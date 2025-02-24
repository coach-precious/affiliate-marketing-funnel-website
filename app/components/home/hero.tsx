// components/HeroSection.jsx
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 to-pink-900 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-5xl md:text-6xl font-bold mb-8 text-white"
        >
          How to Gain <Span>Financial Freedom</Span> in{" "}
          <Span>Less Than 30 Days</Span> Through{" "}
          <Span>100% Working Smart Affiliate Marketing System</Span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-8 text-white"
        >
          Without Leaving Your <Span>Home</Span> Or <Span>Current Job</Span>
        </motion.h2>

        <motion.div
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          className="inline-block"
        >
          <button className="cta-button bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold py-5 px-12 rounded-full text-lg md:text-xl hover:scale-105 transition-transform duration-300 shadow-lg">
            Reserve A Free Spot! <FiArrowRight className="inline ml-2" />
          </button>
        </motion.div>

        {/* <motion.img
          src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ba"
          alt="Happy mom working"
          className="mt-16 rounded-lg shadow-2xl mx-auto w-full max-w-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2 }}
        /> */}
      </div>
    </section>
  );
}

const Span = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
      {children}
    </span>
  );
};
