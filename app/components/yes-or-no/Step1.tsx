import React from "react";

const Step1 = () => {
  return (
    <div className="flex flex-col gap-8">
      <h3 className="text-xl">
        In a world where{" "}
        <span className="font-bold text-2xl text-red-500">98%</span> of{" "}
        <span className="text-yellow-400 text-3xl">online income</span>{" "}
        <span className="text-green-500 italic">opportunities</span> are{" "}
        <span className="text-red-500 underline">scams</span>,{" "}
        <span className="text-green-500 underline text-3xl">
          this changes everything.
        </span>
      </h3>

      <h1>
        Would you like to{" "}
        <span className="text-lg italic text-yellow-300">
          know how you can use your
        </span>{" "}
        <span className="text-green-500 text-3xl">Smart Phone</span> to{" "}
        <span className="text-pink-400">make as much as</span>{" "}
        <span className="text-4xl text-green-500 font-bold">N200k</span> a month
        - <span className="text-amber-300 text-3xl font-bold">LEGALLY?</span>
      </h1>
    </div>
  );
};

export default Step1;
