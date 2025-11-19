import type { Route } from "./+types/home";
import MasterClassHero from "~/components/master-class/hero";
// import MasterClassStickyHeader from "~/components/master-class/sticky-header";
import MasterClassCoach from "~/components/master-class/coach";
import AffiliateMarketing from "~/components/master-class/affiliate-marketing";
import Testimonials from "~/components/master-class/testimonials";
import MasterClassFooter from "~/components/master-class/footer";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title: "Gain Financial Freedom and Change your Life with Coach Precious",
    },
    {
      name: "description",
      content:
        "Discover Coach Precious' proven financial freedom and life changing system through affiliate marketing. Join free training now!",
    },
    {
      name: "keywords",
      content:
        "affiliate marketing, work from home, mom income, financial freedom, online earnings, Coach Precious",
    },
  ];
}

export default function MasterClass() {
  return (
    <main className="text-gray-300">
      {/* <MasterClassStickyHeader /> */}
      <MasterClassHero />
      <MasterClassCoach />
      <AffiliateMarketing />
      <Testimonials />
      <MasterClassFooter />
    </main>
  );
}
