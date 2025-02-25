import { motion } from "framer-motion";
import { IoStar, IoStarHalf } from "react-icons/io5";
import MasterClassJoinBtn from "./join-btn";

import bg from "~/assets/images/master-class/dollar.webp";

const contentItems = [
  {
    color: "from-purple-400 to-blue-400",
    text: "This online business model completely changed the life of my friends and they were able to win a Car for themselves! (evidence below)",
  },
  {
    color: "from-yellow-400 to-orange-400",
    text: "This same online business completely changed the life of 100+ of my students and they were able to make 200k-250k under 4 weeks.(evidence below)",
  },
  {
    color: "from-green-400 to-teal-400",
    text: "I've also been able to coach over 1,950+ serious persons on this Online Business, I'd be revealing to you shortly. (evidence below)",
  },
  {
    color: "from-pink-400 to-red-400",
    text: "The Highly Untapped System For Turning Your Current Financial Situation Around For Good. (evidence below)",
  },
];
export default function MasterClassHero() {
  return (
    <div className="flex flex-col gap-8">
      <section
        className="pt-24 min-h-[50vh] bg-cover bg-no-repeat bg-center bg-slate-950 bg-blend-multiply"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="flex flex-col gap-5 w-full px-4 pb-8 md:pb-10 lg:pb-12 md:px-8 lg:max-w-4xl lg:mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-black text-center text-3xl md:text-4xl lg:text-5xl mb-8"
          >
            How I move from a broke graduate to making an average of{" "}
            <Span className="text-4xl! font-black! md:text-5xl! lg:text-6xl!">
              300k
            </Span>{" "}
            to{" "}
            <Span className="text-4xl! font-black! md:text-5xl! lg:text-6xl!">
              500k
            </Span>{" "}
            every single month from the comfort of my home with just my Smart
            Phone.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center text-lg md:text-xl lg:text-2xl"
          >
            This simple business model is for <Span>9 to 5fer's</Span>,{" "}
            <Span>students</Span>, <Span>graduates</Span>,{" "}
            <Span>Stay at home moms</Span> and <Span>individual</Span> that
            currently has nothing doing but willing to change their financial
            status.
          </motion.p>

          <MasterClassJoinBtn />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-1 text-center text-yellow-400"
          >
            <IoStar />
            <IoStar />
            <IoStar />
            <IoStar />
            <IoStarHalf />
          </motion.div>
        </div>
      </section>

      <section className="flex flex-col gap-5 w-full px-4 pb-8 md:pb-10 lg:pb-12 md:px-8 lg:max-w-6xl lg:mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-white">
          Let me shock you...
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {contentItems.map((item, index) => (
            <ContentCard key={index} {...item} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}

const Span = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={`font-bold text-lg bg-gradient-to-r from-yellow-300 to-orange-600 bg-clip-text text-transparent ${className}`}
    >
      {children}
    </span>
  );
};

const ContentCard = ({
  color,
  text,
  index,
}: {
  color: string;
  text: string;
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "0px 0px -100px 0px" }}
    transition={{ delay: index * 0.1 }}
    className="p-8 bg-gray-900 rounded-xl hover:bg-gray-700 transition-colors duration-300 flex flex-col gap-5"
  >
    <p
      className={`text-2xl font-bold mb-4 bg-gradient-to-r ${color} bg-clip-text text-transparent`}
    >
      {text}
    </p>
    <a
      href=""
      className={`bg-gradient-to-br ${color} p-2 rounded-lg max-w-max`}
    >
      JOIN THE TRAINING
    </a>
  </motion.div>
);
