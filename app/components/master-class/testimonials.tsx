import { motion } from "framer-motion";
import img1 from "~/assets/images/testimonials/1711276052650.jpg";
import img2 from "~/assets/images/testimonials/1711276360476.jpg";
import img3 from "~/assets/images/testimonials/1719734100198.jpg";
import img4 from "~/assets/images/testimonials/1722788935899.jpg";
import img6 from "~/assets/images/testimonials/IMG-20241105-WA0043.jpg";
import img7 from "~/assets/images/testimonials/IMG-20241105-WA0044.jpg";
import img8 from "~/assets/images/testimonials/IMG_20241105_232719_691.jpg";
import img9 from "~/assets/images/testimonials/IMG_20241105_232720_425.jpg";
import img10 from "~/assets/images/testimonials/IMG_20241105_232720_487.jpg";

const testimonials = [img1, img2, img10, img4, img6, img7, img8, img9, img3];

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

        <div className="mt-4 grid md:grid-cols-2 gap-4">
          {testimonials.map((img, index) => (
            <motion.img
              key={index}
              src={img}
              alt={"Testimonial " + index + 1}
              className="w-full rounded-xl shadow-xl"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
