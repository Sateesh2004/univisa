"use client";
import React from "react";
import { ArrowRight, Compass, Map, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const Journey = () => {
  return (
    <main className="min-h-screen bg-[#f9fafb] relative">
    {/* Background Image with Next.js Image optimization */}
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="relative w-full h-full">
        {/* <Image
          src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80"
          alt="Background"
          fill
          priority
          className="object-cover opacity-5"
          sizes="100vw"
        /> */}
      </div>
    </div>

    {/* Hero Section */}
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-6xl  font-bold text-foreground mb-6">
          Begin Your Journey With Us
        </h1>
        {/* <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Embark on an adventure of growth and discovery. Let us guide you through every step of your transformative journey.
        </p> */}
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {[
          {
            icon: "/journey1.png",
            title: "Students",
            description: "Do you want to study abroad? Begin your study abroad journey with UniViza.",
            btntext: "Join as Student",
            url:"/students"
          },
          {
            icon: "/insw3.png",
            title: "Recruitment Partners",
            description: "Do you want to recruit and guide students? Join UniViza and simplify your process.",
            btntext: "Join as Partner",
             url:"/recruitment-partners"
          },
          {
            icon: "/step2.png",
            title: "Institutions",
            description: "Do you want to increase your global presence? Partner with UniViza.",
            btntext: "Join as Institution",
             url:"/institutions"
          }
        ].map((feature, index) => (
          <div
            key={index}
            className="bg-card p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 p-3 bg-secondary rounded-full">
             <Image src={feature.icon} alt={feature.title} width={100} height={100} />  
              </div>
              <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground mt-5">
                {feature.description}
              </p>
               <div className="text-center mt-10">
                <Link href={feature.url}>
        <button className="inline-flex bg-black text-white items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity">
          {feature.btntext}
          <ArrowRight className="w-5 h-5" />
        </button>
          </Link>
      </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      {/* <div className="text-center">
        <button className="inline-flex bg-black text-white items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity">
          Start Your Journey
          <ArrowRight className="w-5 h-5" />
        </button>
      </div> */}
    </div>
  </main>
  )
}

export default Journey
