
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SignOutButton, SignUpButton } from "@clerk/nextjs";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import WhatToAsk from "@/components/landing/WhatToAsk";
import PricingSection from "@/components/landing/PricingSection";
import CTA from "@/components/landing/CTA";
import { Footer } from "react-day-picker";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";


export default async function Home() {
  const user= await currentUser();

  //redirect user to auth dashboard
  if(user) redirect("/dashboard")
  
  
  
  return (
    <div className="min-h-screen bg-background">
      <Header/>
      <Hero/>
      <HowItWorks/>
      <WhatToAsk/>
      <PricingSection/>
      <CTA/>
      <Footer/>
    </div>

  );
}
