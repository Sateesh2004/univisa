"use client"
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '@/components/NavBar';
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import { motion } from 'framer-motion'

const Page = () => {
  const searchParams = useSearchParams();
  const [selectedOption, setSelectedOption] = useState('Student');
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const typeFromUrl = searchParams.get('type');
    if (typeFromUrl) {
      const optionMap = {
        'student': 'Student',
        'recruitment': 'Recruitment Partners',
        'institution': 'Institutions'
      };
      
      const validOption = optionMap[typeFromUrl.toLowerCase()];
      if (validOption) {
        setSelectedOption(validOption);
      }
    }
    // Add a small delay to ensure smooth transition
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [searchParams]);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4 }
  };

  if (isLoading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
          <div className="text-center">
            <Loader2 className="h-12 w-12 animate-spin text-blue-600 mx-auto" />
            
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-b from-gray-50 to-white min-h-screen"
      >
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
                  {['Student', 'Recruitment Partners', 'Institutions'].map((option) => (
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

                <form className="space-y-6">
                  <motion.div {...fadeIn} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Phone</Label>
                      <Input id="email" type="tel" placeholder="john@example.com" />
                    </div>
                  </motion.div>

                  <motion.div {...fadeIn} className="gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Email</Label>
                      <Input id="phone" type="email" placeholder="+1 (555) 000-0000" />
                    </div>
                    {/* {selectedOption === 'Student' && (
                      <div className="space-y-2">
                        <Label htmlFor="course">Desired Country</Label>
                        <Input id="course" placeholder="e.g., Computer Science" />
                      </div>
                    )} */}
                    {selectedOption === 'Recruitment Partners' && (
                      <div className="space-y-2">
                        <Label htmlFor="company">Agency Name</Label>
                        <Input id="company" placeholder="Your Company" />
                      </div>
                    )}
                    {selectedOption === 'Institutions' && (
                      <div className="space-y-2">
                        <Label htmlFor="institution">Institution Name</Label>
                        <Input id="institution" placeholder="University/College Name" />
                      </div>
                    )}
                  </motion.div>

                  {selectedOption === 'Recruitment Partners' && (
                    <motion.div {...fadeIn} className=" gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="website">Location</Label>
                        <Input id="website" type="url" placeholder="https://..." />
                      </div>
                                          </motion.div>
                  )}

                  {selectedOption === 'Institutions' && (
                    <motion.div {...fadeIn} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="type">Institution Type</Label>
                        <Input id="type" placeholder="University/College/School" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="location">Location</Label>
                        <Input id="location" placeholder="City, Country" />
                      </div>
                    </motion.div>
                  )}

                  <motion.div {...fadeIn} className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Your message here..." 
                      className="min-h-[150px]"
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
    </>
  );
};

export default Page;