import { links } from "~/links";
import type { Route } from "./+types/home";

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

export default function Tiktok() {
  return (
    <div className="flex flex-col min-h-screen bg-[#a60d08] text-white">
      <section className="text-center px-5 py-3 lg:py-5">
        <h6>In this training, I'll be revealing</h6>
      </section>

      <section className="flex flex-col gap-5 md:gap-7 text-center justify-center items-center px-5 py-10 md:py-16 lg:py-20 xl:py-24 min-h-[20vh] text-black bg-top bg-no-repeat bg-cover bg-[url(/main_bg.png)] bg-white">
        <h1 className="underline font-bold italic text-2xl md:text-3xl lg:text-4xl">
          <span className="font-black">
            HOW YOU CAN START & GROW YOUR OWN REMOTE JOB USING YOUR SOCIAL MEDIA
            APPS AND LEGIT WEBSITES IN LESS THAN 30 DAYS…
          </span>{" "}
          <br /> Without Leaving Your Home Or Current Job
        </h1>

        <p className="">
          Especially If You Have No Experience Earning Online, No Laptop And All
          Past Efforts Have Only Led To Either Scam Or Big Disappointments
        </p>

        <a
          href={links.tiktok}
          target="_blank"
          className="bg-red-800 text-white text-center flex w-full items-center justify-center px-4 py-2 rounded-full max-w-[450px] mx-auto shadow hover:scale-105 transition-transform"
        >
          GET ACCESS NOW
        </a>

        <h3 className="font-bold">
          Access to the FREE training is limited to just few people
        </h3>
      </section>

      <footer className="flex flex-col gap-4 text-center justify-center items-center px-5 pb-8 pt-10">
        <p className="text-sm font-medium">
          &copy;{new Date().getFullYear()}. All Rights Reserved
        </p>
        <p className="text-sm">
          This site is not a part of the YouTube, Tiktok, Google, or Facebook
          website; Google Inc or Facebook Inc. Additionally, This site is NOT
          endorsed by YouTube, Tiktok, Google, or Facebook in any way.
        </p>
      </footer>
    </div>
  );
}
