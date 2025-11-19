// components/HeroSection.jsx
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { links } from "~/links";
import bg from "~/assets/images/master-class/dollar.webp";

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-no-repeat bg-center bg-blend-multiply bg-slate-950 py-20 px-4"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white"
        >
          How to Gain <Span>Financial Freedom</Span> in{" "}
          <Span>Less Than 30 Days</Span> Through <Span>100% </Span> Working{" "}
          <Span v2>Smart Affiliate Marketing</Span> <Span>System</Span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-8 text-white"
        >
          Without Leaving Your <Span>Home</Span> Or <Span>Current Job</Span>
        </motion.h2>

        <motion.div
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          className="inline-block"
        >
          <a
            href={links.main}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-4 cta-button bg-gradient-to-r from-red-500 to-red-800 text-white font-bold py-5 px-12 rounded-full text-lg md:text-xl hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            Reserve A Free Spot! <FiArrowRight className="inline ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

const Span = ({
  children,
  v2,
}: {
  v2?: boolean;
  children: React.ReactNode;
}) => {
  return (
    <span
      className={`bg-gradient-to-r ${
        v2
          ? "to-blue-500 via-red-500 from-slate-500"
          : "from-red-700 to-yellow-500"
      } bg-clip-text text-transparent`}
    >
      {children}
    </span>
  );
};
