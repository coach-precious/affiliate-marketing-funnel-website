import { motion } from "framer-motion";
import coachPrecious1 from "~/assets/images/coach_precious.jpg";
import coachPrecious3 from "~/assets/images/coach_precious_3.jpg";
import coachPrecious4 from "~/assets/images/coach_precious_4.jpg";
import coachPrecious5 from "~/assets/images/coach_precious_5.jpg";

const images1 = [coachPrecious1, coachPrecious3];

const images2 = [coachPrecious4, coachPrecious5];

export default function CoachSection() {
  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-8">
        <div className="flex-[.5] flex flex-col gap-8">
          <h2 className="text-3xl md:hidden font-bold mb-6">
            Meet Your Coach -{" "}
            <span className="text-pink-400"> Coach Precious</span>
          </h2>

          {images1.map((image, index) => {
            return (
              <motion.img
                key={index}
                src={image}
                alt="Coach Precious"
                className="w-full rounded-xl shadow-xl md:flex-1"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
              />
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex-1 text-white"
        >
          <h2 className="hidden md:block text-3xl md:text-4xl font-bold mb-6">
            Meet Your Coach -{" "}
            <span className="text-pink-400"> Coach Precious</span>
          </h2>
          <p className="text-lg mb-8 text-gray-300">
            Coach Precious (Ogunleye Precious) has rapidly emerged as a
            trailblazer in the digital sales arena and entrepreneurial
            mentorship. In just 24 months, she has generated over $36,000 in
            sales from her digital product business, quickly establishing
            herself as a respected authority in the field.
          </p>

          <p className="text-lg mb-8 text-gray-300">
            Beyond her impressive business achievements, Coach Precious enjoys
            the freedom to travel the world, living a lifestyle that reflects
            the financial independence she champions. Her commitment to
            transforming lives and inspiring entrepreneurs worldwide makes her a
            true force in the realm of business coaching and global
            entrepreneurship.
          </p>

          <p className="text-lg mb-8 text-gray-300">
            Her dynamic approach and innovative sales strategies have empowered
            more than 4,000 individuals to achieve weekly earnings in the six-
            to seven-figure range. As a passionate mentor and sales expert,
            Coach Precious has redefined financial success for her students,
            enabling them to break free from conventional income limitations and
            chart their own path to prosperity.
          </p>

          <div className="mt-8 grid md:grid-cols-2 gap-4">
            {images2.map((image, index) => {
              return (
                <motion.img
                  key={index}
                  src={image}
                  alt="Coach Precious"
                  className="w-full rounded-xl shadow-xl"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                />
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
