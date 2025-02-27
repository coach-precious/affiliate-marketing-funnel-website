import { motion } from "framer-motion";
import coachPrecious1 from "~/assets/images/coach_precious.jpg";
import coachPrecious3 from "~/assets/images/coach_precious_3.jpg";
import coachPrecious4 from "~/assets/images/coach_precious_4.jpg";
import coachPrecious5 from "~/assets/images/coach_precious_5.jpg";
import MasterClassJoinBtn from "./join-btn";

const images = [coachPrecious3, coachPrecious4, coachPrecious5];

export default function MasterClassCoach() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col gap-8 p-5 max-w-5xl mx-auto"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
        But before I continue, let me introduce myself...
      </h2>
      <div className="flex flex-col gap-10">
        <motion.img
          src={coachPrecious1}
          alt="Coach Precious"
          className="w-full rounded-xl shadow-xl md:flex-1"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        />

        <div className="flex flex-col gap-5">
          <p className="text-lg text-gray-300">
            My name is <span className="font-black">Ogunleye Precious</span>
            <span className="text-pink-400">(Coach Precious)</span>, a Top rated
            Digital Affiliate Marketer that has been able to win car, buy land,
            traveled to different countries on vacation and In just 24 months,
            she has generated over $36,000 in sales from her digital product
            business, quickly establishing herself as a respected authority in
            the field..
          </p>

          <p className="text-lg text-gray-300">
            I was once a broke girl who was feeding from hand to mouth and could
            barely afford basic needs for myself.
          </p>

          <p className="text-lg text-gray-300">
            Until I came across this life changing opportunity online, and in a
            few weeks my life totally transformed. I am now a{" "}
            <span className="text-green-400">proud millionaire</span> who helps
            other serious minded people change their financial life.
          </p>
        </div>

        <div className="grid gap-5 grid-cols-3">
          {images.map((image, index) => {
            return (
              <motion.img
                key={index}
                src={image}
                alt="Coach Precious"
                className="w-full h-full object-cover rounded-xl shadow-xl md:flex-1"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
              />
            );
          })}
        </div>

        <MasterClassJoinBtn />
      </div>
    </motion.section>
  );
}
