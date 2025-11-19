import { FiClock } from "react-icons/fi";
import { links } from "~/links";

export default function FinalCTA() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center text-white">
        <div className="flex items-center justify-center gap-4 mb-8">
          <FiClock className="text-5xl text-yellow-400" />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Claim Your <span className="text-yellow-400">Free Access</span> Now!
        </h2>

        <a
          href={links.main}
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-4 cta-button bg-gradient-to-r from-red-500 to-red-800 text-white font-bold py-5 px-12 rounded-full text-lg md:text-xl hover:scale-105 transition-transform duration-300 shadow-lg max-w-max mx-auto"
        >
          Start My Free Training
        </a>

        <p className="mt-8 text-gray-200 italic">
          Only 23 spots remaining - Don't miss out!
        </p>
      </div>
    </section>
  );
}
