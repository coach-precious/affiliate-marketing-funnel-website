import { motion } from "framer-motion";

const contentItems = [
  {
    title: "Smart Affiliate Marketing",
    color: "from-purple-400 to-blue-400",
    text: "What is Smart Affiliate Marketing, and how does it work?",
  },
  {
    title: "Earning Fast Track",
    color: "from-yellow-400 to-orange-400",
    text: "The untapped secret to earn 100-300k weekly",
  },
  {
    title: "Mistake Prevention",
    color: "from-green-400 to-teal-400",
    text: "Common mistakes people make when trying to earn online—and how to avoid them",
  },
  {
    title: "Secret System",
    color: "from-pink-400 to-red-400",
    text: "The Highly Untapped System For Turning Your Current Financial Situation Around For Good",
  },
];

export default function WhatYouWillLearn() {
  return (
    <section className="py-20 px-4 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-white"
        >
          What You'll <span className="text-pink-400">Learn</span>
        </motion.h2>

        <p className="my-4 text-lg text-gray-300">
          Here is something you should understand,{" "}
          <span className="from-purple-400 to-blue-400 font-bold bg-clip-text text-transparent bg-gradient-to-bl">
            Smart Affiliate Marketing{" "}
          </span>
          requires a lot of skills, knowledge, and dedication to succeed. Which
          is why I created this Training to teach you step by step on
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {contentItems.map((item, index) => (
            <ContentCard key={index} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

const ContentCard = ({
  title,
  color,
  text,
  index,
}: {
  title: string;
  color: string;
  text: string;
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "0px 0px -100px 0px" }}
    transition={{ delay: index * 0.1 }}
    className="p-8 bg-gray-900 rounded-xl hover:bg-gray-700 transition-colors duration-300"
  >
    <h3
      className={`text-2xl font-bold mb-4 bg-gradient-to-r ${color} bg-clip-text text-transparent`}
    >
      {title}
    </h3>
    <p className="text-gray-300 text-lg">{text}</p>
    <a
      className={`block mt-6 bg-gradient-to-br ${color} bg-clip-text text-transparent`}
      href={"/"}
    >
      GET FREE ACCESS TO THE TRAINING
    </a>
  </motion.div>
);
