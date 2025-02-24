import { FiClock } from "react-icons/fi";

export default function FinalCTA() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-900 to-pink-900">
      <div className="max-w-4xl mx-auto text-center text-white">
        <div className="flex items-center justify-center gap-4 mb-8">
          <FiClock className="text-5xl text-yellow-400" />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Claim Your <span className="text-yellow-400">Free Access</span> Now!
        </h2>

        <button className="cta-button bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold py-5 px-16 rounded-full text-xl hover:scale-105 transition-transform duration-300 shadow-lg mx-auto">
          Start My Free Training
        </button>

        <p className="mt-8 text-gray-200 italic">
          Only 23 spots remaining - Don't miss out!
        </p>
      </div>
    </section>
  );
}
