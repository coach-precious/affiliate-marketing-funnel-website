import { motion } from "framer-motion";
export default function MasterClassStickyHeader() {
  return (
    <header className="z-30 fixed top-0 right-0 left-0 w-full min-h-12 flex p-2 items-center gap-4 text-center text-white justify-center bg-gradient-to-b from-slate-900 via-slate-950 to-slate-700 text-lg">
      <p>FREE live video training</p>
      <motion.a
        initial={{ opacity: 0, y: 20, x: 5 }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        href=""
        className="bg-gradient-to-br from-yellow-400 to-orange-500 px-4 py-2 rounded-md"
      >
        Join Now!
      </motion.a>
    </header>
  );
}
