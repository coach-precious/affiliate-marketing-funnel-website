import { FaHandPointUp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function MasterClassJoinBtn() {
  return (
    <motion.a
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className="bg-gradient-to-br from-yellow-400 to-orange-500 px-4 py-3 text-xl md:text-2xl lg:text-3xl md:py-4 lg:py-5 rounded-lg flex text-center items-center justify-center gap-2 max-w-max mx-auto  text-white hover:from-orange-800 hover:to-yellow-700 font-bold"
      href=""
    >
      <span className="">Yes, I want the live video training</span>
      <FaHandPointUp />
    </motion.a>
  );
}
