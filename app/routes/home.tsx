import type { Route } from "./+types/home";
import HeroSection from "~/components/home/hero";
import WhatYouWillLearn from "~/components/home/what-you-will-learn";
import CoachSection from "~/components/home/coach";
import Testimonials from "~/components/home/testimonials";
import FinalCTA from "~/components/home/final-cta";
import Footer from "~/components/home/footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Gain Financial Freedom Through This New 100% Working System" },
    {
      name: "description",
      content:
        "Discover Coach Precious' proven system for mothers to achieve financial freedom through affiliate marketing. Join free training now!",
    },
    {
      name: "keywords",
      content:
        "affiliate marketing, work from home, mom income, financial freedom, online earnings, Coach Precious",
    },
  ];
}

export default function Home() {
  return (
    <main className="text-gray-300">
      <HeroSection />
      <WhatYouWillLearn />
      <CoachSection />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  );
}
