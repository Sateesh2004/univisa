"use client"
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '@/components/NavBar';
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import { motion } from 'framer-motion'
import Footer from '@/components/Footer';
import { CheckCircle, X } from "lucide-react"






const Alert = ({ message, type, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 500);
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: isVisible ? 0 : 100, opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg flex items-center gap-2 z-50 ${
        type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
      }`}
    >
      {type === 'success' ? <CheckCircle className="h-5 w-5" /> : <X className="h-5 w-5" />}
      <span>{message}</span>
      <button onClick={() => setIsVisible(false)} className="ml-4 text-gray-500 hover:text-gray-700">
        <X className="h-4 w-4" />
      </button>
    </motion.div>
  );
};

// Loading component
const LoadingSpinner = () => (
  <>
    {/* <Navbar /> */}
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
      <div className="text-center">
        <Loader2 className="h-12 w-12 animate-spin text-blue-600 mx-auto" />
      </div>
    </div>
  </>
);

// Contact form component
const ContactForm = () => {
  const searchParams = useSearchParams();
  const [selectedOption, setSelectedOption] = useState('Student');
  const [isLoading, setIsLoading] = useState(true);
  const [alert, setAlert] = useState(null);
  useEffect(() => {
    const typeFromUrl = searchParams.get('type');
    if (typeFromUrl) {
      const optionMap = {
        'student': 'Student',
        'recruitment': 'Recruitment Partner',
        'institution': 'Institution'
      };
      
      const validOption = optionMap[typeFromUrl.toLowerCase()];
      if (validOption) {
        setSelectedOption(validOption);
      }
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [searchParams]);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4 }
  };

  const submitHandler =async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });
      
      if (response.ok) {
        setAlert({
          type: 'success',
          message: 'Your message has been sent successfully!'
        });
        e.target.reset();
      } else {
        setAlert({
          type: 'error',
          message: 'Something went wrong. Please try again.'
        });
      }
    } catch (error) {
      setAlert({
        type: 'error',
        message: 'Failed to send message. Please check your connection.'
      });
    }
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-b from-gray-50 to-white min-h-screen"
    >
        {alert && (
        <Alert
          message={alert.message}
          type={alert.type}
          onClose={() => setAlert(null)}
        />
      )}
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2 flex items-center justify-center">
            <motion.img 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-md" 
              src="/contacts.svg" 
              alt="Contact illustration" 
            />
          </div>

          <Card className="lg:col-span-3 shadow-xl">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3 mb-8">
                {['Student', 'Recruitment Partner', 'Institution'].map((option) => (
                  <Button
                    key={option}
                    variant={selectedOption === option ? "default" : "outline"}
                    className="w-full transition-all duration-200"
                    onClick={() => setSelectedOption(option)}
                  >
                    {option}
                  </Button>
                ))}
              </div>

              <form className="space-y-6" onSubmit={submitHandler} action="https://api.web3forms.com/submit" method="POST">
              <input type="hidden" name="access_key" value="be5f2b6b-2156-4b9f-84e6-33c0d450aa2b"/>
                {/* Rest of your form code remains exactly the same */}
                {selectedOption === 'Recruitment Partner' && (
                    <div className="space-y-2">
                      <Label htmlFor="company">Agency Name</Label>
                      <Input id="company" placeholder="Agency name" name="Agency Name" />
                    </div>
                  )}
                    {selectedOption === 'Institution' && (
                    <div className="space-y-2">
                      <Label htmlFor="institution">Institution Name<span className='text-red-500'>*</span></Label>
                      <Input id="institution" name="Institution" placeholder="Institution Name" />
                    </div>
                  )}
                <motion.div {...fadeIn} className="grid grid-cols-1 sm:grid-cols-2 gap-4">


             

                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name<span className='text-red-500'>*</span></Label>
                    <Input id="name" name="Full Name" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Phone<span className='text-red-500'>*</span></Label>
                    <Input id="email" name="phone" type="tel" placeholder="+91 91XXXXXXXXX" required />
                  </div>
                </motion.div>

                <motion.div {...fadeIn} className="gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Email<span className='text-red-500'>*</span></Label>
                    <Input id="phone" name="email" type="email" placeholder="abc@example.com" />
                  </div>
                  {/* {selectedOption === 'Recruitment Partner' && (
                    <div className="space-y-2">
                      <Label htmlFor="company">Agency Name</Label>
                      <Input id="company" placeholder="Your Agency" />
                    </div>
                  )} */}
                
                </motion.div>

                {selectedOption === 'Recruitment Partner' && (
                  <motion.div {...fadeIn} className="gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="website">Location</Label>
                      <Input id="website" name="location" type="text" placeholder="City, Country" />
                    </div>
                  </motion.div>
                )}

                {selectedOption === 'Institution' && (
                  <motion.div {...fadeIn} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="type">Institution Type<span className='text-red-500'>*</span></Label>
                      <Input id="type" name="type" placeholder="University/College/School" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Location<span className='text-red-500'>*</span></Label>
                      <Input id="location" name="location" placeholder="City, Country" />
                    </div>
                  </motion.div>
                )}

                <motion.div {...fadeIn} className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Your message here..." 
                    className="min-h-[150px]"
                    name="Message"
                  />
                </motion.div>

                <Button 
                  type="submit" 
                  className="w-full sm:w-auto"
                >
                  Send Enquiry
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.section>
    
  );
};

// Main page component
const Page = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<LoadingSpinner />}>
        <ContactForm />
      </Suspense>
      <Footer />
    </>
  );
};

export default Page;