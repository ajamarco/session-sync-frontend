import Audience from "@/components/landing/Audience";
import CallToAction from "@/components/landing/CallToAction";
import Comparison from "@/components/landing/Comparison";
import Features from "@/components/landing/Features";
import Footer from "@/components/landing/Footer";
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import Pricing from "@/components/landing/Pricing";
import Problem from "@/components/landing/Problem";

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <Hero />
        <Problem />
        <Features />
        <HowItWorks />
        <Audience />
        <Pricing />
        <Comparison />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
