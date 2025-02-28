import React from "react";
import { links } from "~/links";

const Final = () => {
  return (
    <div className="md:text-lg flex flex-col gap-8 italic pt-8">
      <h3 className="italic">
        <span className="font-bold text-xl underline text-yellow-300">
          Okay
        </span>
        . I am out of questions.
      </h3>
      <h3>
        From your responses, It looks like you are a good fit for this income
        opportunity.
      </h3>
      <h3>Most people don't make it this far.</h3>
      <h3>
        Right now, you are going to get{" "}
        <span className="text-yellow-300 font-bold">
          access to the FULL details
        </span>{" "}
        of the{" "}
        <span className="text-green-400">
          legitimate money making opportunity
        </span>{" "}
        that can <span className="text-purple-400">change your life</span>.
      </h3>

      <h3>
        Don't rush.{" "}
        <a
          className="text-2xl font-black text-yellow-400 underline"
          href={links.yesOrNo}
          target="_blank"
          rel="noopener noreferrer"
        >
          CLICK HERE TO CONTINUE
        </a>
      </h3>
    </div>
  );
};

export default Final;
