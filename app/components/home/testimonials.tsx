import { motion } from "framer-motion";

const testimonials = [
  {
    text: "This program changed my life! Went from $0 to $5k/month while raising my kids",
    author: "Sarah, Mom of 3",
  },
  {
    text: "Finally found a system that works with my busy mom schedule",
    author: "Emily, Single Mom",
  },
  {
    text: "Earned $12k in my first month - unbelievable results!",
    author: "Jessica, Work-at-Home Mom",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-white"
        >
          Success <span className="text-green-400">Stories</span> From People
          Whose <span className="text-amber-400">Lives Have Changed</span>
        </motion.h2>

        <p className="mt-4 text-3xl text-gray-300 text-center mb-8">
          See Some Ordinary People Like You Who Have Gotten Extraordinary
          Results
        </p>

        <div className="mt-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

const TestimonialCard = ({
  text,
  author,
  index,
}: {
  text: string;
  author: string;
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "0px 0px -100px 0px" }}
    transition={{ delay: index * 0.2 }}
    className="p-8 bg-gray-900 rounded-xl hover:bg-gray-700 transition-colors duration-300"
  >
    <p className="text-gray-300 text-lg mb-4">"{text}"</p>
    <p className="font-bold text-pink-400">- {author}</p>
  </motion.div>
);
