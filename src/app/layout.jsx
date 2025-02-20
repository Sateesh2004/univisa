import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import NextTopLoader from 'nextjs-toploader';
import Footer from "@/components/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  

    icons: {
     icon: "/favicon.png",
    },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth ">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  overflow-x-hidden`}
      >
        {/* <NextTopLoader
         showSpinner={false}
        color="#1a48ce"
        
        /> */}
        {/* <NavBar/> */}
        {children}
       {/* <Footer/> */}
      </body>
    </html>
  );
}
