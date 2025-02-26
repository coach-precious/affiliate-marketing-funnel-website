import { motion } from "framer-motion";

export default function AffiliateMarketing() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col gap-8 p-5 max-w-5xl mx-auto"
    >
      <div className="flex flex-col gap-5">
        <p className="text-lg md:text-xl lg:text-2xl text-gray-300">
          This business model has{" "}
          <span className="font-bold text-pink-400">changed my life</span>{" "}
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

      <div className="flex flex-col gap-8">
        <h2 className="font-black text-3xl md:text-4xl lg:text-5xl text-center">
          What Is Digital Affiliate Marketing?
        </h2>
      </div>
    </motion.section>
  );
}
