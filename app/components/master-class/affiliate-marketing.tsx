import { motion } from "framer-motion";
import MasterClassJoinBtn from "./join-btn";

export default function AffiliateMarketing() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col gap-8 p-5 max-w-5xl mx-auto text-center pb-10"
    >
      <div className="flex flex-col gap-5">
        <p className="text-lg md:text-xl lg:text-2xl text-gray-300">
          This business model has{" "}
          <span className="font-bold text-yellow-400">changed my life</span>{" "}
          completely and i know that it will change yours too.
        </p>

        <p className="text-lg md:text-xl lg:text-2xl text-gray-300">
          Now, what is this business model that made me a millionaire?{" "}
          <span className="font-bold text-pink-400">
            It's called Smart Digital Affiliate Marketing
          </span>
          .
        </p>
      </div>

      <h2 className="text-gray-300 font-black text-3xl md:text-5xl lg:text-6xl">
        What Is Digital Affiliate Marketing?
      </h2>

      <p className="text-lg md:text-xl lg:text-2xl text-gray-300">
        I'd be holding a{" "}
        <span className="font-black text-yellow-400">FREE LIVE TRAINING</span>{" "}
        where I'd be revealing to you how to start this simple business model
        with{" "}
        <span className="font-black text-green-400">JUST YOUR SMARTPHONE</span>{" "}
        and{" "}
        <span className="font-black text-purple-400">INTERNET CONNECTION</span>.
      </p>

      <p className="text-lg md:text-xl lg:text-2xl text-gray-300">
        click on the button below to have access to the{" "}
        <span className="font-bold text-green-400">live video training</span>.
      </p>

      <MasterClassJoinBtn />
    </motion.section>
  );
}
