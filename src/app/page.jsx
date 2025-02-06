import ImageSwitcher from "@/components/ImageSwitcher";
import Universities from "@/components/Universities";
import Image from "next/image";

export default function Home() {
  return (<>
   <div className="h-[80vh]   w-[calc(100vw - 200px)] bg-gradient-to-r from-[#1a48ce]  to-[white]">
    <div className="text-5xl sm:pl-52 sm:pt-52 pl-12 pt-12 font-bold text-white">
    <h1>We Make Global Education </h1>
    <h1>Easy</h1>
    </div>
    
  
   </div>
   <div className="mt-16 ">
   <h1 className="text-center text-4xl font-bold">A Platform That Supports You End-to-End</h1>
   <ImageSwitcher/>

   <div className="bg-[#f6f8fe] px-64 mt-20  mb-14">
    <h1 className="pt-20 pb-12 text-center text-3xl font-bold">We've Helped Over 1M Students And Counting</h1>
     <div className="pb-16 gap-20 grid grid-cols-5"> 
      <div className="bg-white border w-[180px] rounded-[8px]">
        <div> <Image src="/Communication-2.svg" className='mt-6 mx-auto' width={80} height={80} alt=""/>   </div>
        <div className="my-6 text-center text-3xl font-bold text-[#1a48ce]">1500+</div>
        <h1 className="mb-4 text-2xl font-medium text-center">Partner Institutions</h1>
      </div>
      <div className="bg-white border w-[180px] rounded-[8px]">
        <div> <Image src="/Communication-2.svg" className='mt-6 mx-auto' width={80} height={80} alt=""/>   </div>
        <div className="my-6 text-center text-3xl font-bold text-[#1a48ce]">1500+</div>
        <h1 className="mb-4 text-2xl font-medium text-center">Partner Institutions</h1>
      </div>
      <div className="bg-white border w-[180px] rounded-[8px]">
        <div> <Image src="/Communication-2.svg" className='mt-6 mx-auto' width={80} height={80} alt=""/>   </div>
        <div className="my-6 text-center text-3xl font-bold text-[#1a48ce]">1500+</div>
        <h1 className="mb-4 text-2xl font-medium text-center">Partner Institutions</h1>
      </div>
      <div className="bg-white border w-[180px] rounded-[8px]">
        <div> <Image src="/Communication-2.svg" className='mt-6 mx-auto' width={80} height={80} alt=""/>   </div>
        <div className="my-6 text-center text-3xl font-bold text-[#1a48ce]">1500+</div>
        <h1 className="mb-4 text-2xl font-medium text-center">Partner Institutions</h1>
      </div>
      <div className="bg-white border w-[180px] rounded-[8px]">
        <div> <Image src="/Communication-2.svg" className='mt-6 mx-auto' width={80} height={80} alt=""/>   </div>
        <div className="my-6 text-center text-3xl font-bold text-[#1a48ce]">1500+</div>
        <h1 className="mb-4 text-2xl font-medium text-center">Partner Institutions</h1>
      </div>
      
      
      
      
    </div> 
    </div> 
 </div>

 <Universities/>
 </>
   
  );
}
