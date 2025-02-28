import GeneralFooter from "~/components/general/footer";
import type { Route } from "../+types/root";
import { Link, useSearchParams } from "react-router";
import Step1 from "~/components/yes-or-no/step1";
import Step2 from "~/components/yes-or-no/step2";
import Step3 from "~/components/yes-or-no/step3";
import Step4 from "~/components/yes-or-no/step4";
import Step5 from "~/components/yes-or-no/step5";
import Step6 from "~/components/yes-or-no/step6";
import Final from "~/components/yes-or-no/final";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title:
        "Are you ready to Gain Financial Freedom and Change your Life with Coach Precious | Yes or No?",
    },
  ];
}

const steps = [
  <Step1 />,
  <Step2 />,
  <Step3 />,
  <Step4 />,
  <Step5 />,
  <Step6 />,
];

export default function YesOrNo() {
  const [searchParams] = useSearchParams();
  const stepCount = Number(searchParams.get("step")) || 1;
  const totalSteps = steps.length;
  const step = stepCount > totalSteps + 1 || stepCount < 1 ? 1 : stepCount;
  const stepIndex = step - 1;
  const stepPercent = Math.round((step / totalSteps) * 100);

  return (
    <main className="text-gray-300 bg-slate-950 w-full min-h-screen flex flex-col gap-2">
      <div className="flex-1 p-5 flex flex-col gap-10 w-full max-w-3xl mx-auto">
        {step === totalSteps + 1 ? (
          <Final />
        ) : (
          <>
            <div className="pt-2 md:pt-16">
              <div className="bg-gray-200 h-14 w-full mx-auto rounded-sm flex items-center p-3 relative overflow-hidden">
                <p
                  className={`relative z-10 font-bold ${
                    stepPercent >= 75
                      ? "text-green-300"
                      : stepPercent >= 50
                      ? "text-yellow-400"
                      : "text-red-200"
                  }`}
                >
                  {step} of {totalSteps}
                </p>
                <span
                  style={{ width: `${stepPercent}%` }}
                  className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-green-700 via-green-600 to-green-400 transition-[width] duration-700"
                ></span>
              </div>
            </div>
            <div className="flex items-start gap-8 flex-col md:pt-8">
              <div className="text-center">{steps[stepIndex]}</div>

              <p className="font-black text-purple-500 text-center w-full">
                CHOOSE YOUR ANSWER BELOW
              </p>
              <div className="flex gap-5 items-center w-full justify-center">
                <Link
                  to="/master-class?from=yes-or-no"
                  className="flex-1 max-w-2xs bg-red-500 px-5 py-3 md:py-5 hover:opacity-75 rounded-2xl text-white font-bold text-2xl flex items-center justify-center text-center"
                >
                  No
                </Link>
                <Link
                  to={{
                    pathname: "/yes-or-no",
                    search: `?step=${step + 1}`,
                  }}
                  className="flex-1 max-w-2xs bg-green-500 px-5 py-3 md:py-5 hover:opacity-75 rounded-2xl text-white font-bold text-2xl flex items-center justify-center text-center"
                >
                  Yes
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
      <GeneralFooter />
    </main>
  );
}
