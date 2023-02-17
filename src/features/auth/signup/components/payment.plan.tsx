import { PaymentCards } from "../card.template";
import { StarIcon } from "@heroicons/react/24/outline";
import { StarIcon as SolidStarIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

type Props = {
  plan: [string, string, number];
  setPaymentPlan: (details: [string, "mo" | "yr", number]) => void;
  paymentPlanError: boolean;
  setPaymentPlanError: (error: boolean) => void;
};

export const PaymentPlan = ({
  plan,
  setPaymentPlan,
  paymentPlanError,
  setPaymentPlanError,
}: Props) => {
  const [annually, setAnnually] = useState(
    plan[2] === 200 || plan[2] === 500 || plan[2] === 1000 ? true : false
  );

  const handleSelected = (name: string, price: number) => {
    if (paymentPlanError) setPaymentPlanError(false);
    setPaymentPlan([name, annually ? "yr" : "mo", price]);
  };

  return (
    <div className="relative py-6 ">
      <div className="between flex items-center justify-between">
        <h1 className="relative -top-4 px-4 text-3xl tracking-wide text-slate-900">
          Select your plan
        </h1>
        <div className="relative -top-[22px] mr-6 flex items-center justify-center pt-4">
          <button
            onClick={() => {
              if (plan[0] !== "") {
                const card = PaymentCards.find(
                  (value) => value.name === plan[0]
                );
                if (card) {
                  setPaymentPlan([
                    card.name,
                    annually ? "yr" : "mo",
                    annually ? card.monthlyPrice : card.annualPrice,
                  ]);
                }
              }
              setAnnually((prev) => !prev);
            }}
            className={`relative flex h-2 w-6 items-center rounded-full bg-slate-900 duration-300 ease-linear`}
          >
            <div
              className={`text-md rounded-full bg-white p-1 text-center font-semibold leading-3 duration-200 ease-linear ${
                annually ? "translate-x-4" : "-translate-x-2"
              }`}
            >
              {annually ? "Y" : "M"}
            </div>
          </button>
        </div>
      </div>

      <p className="ml-4 mr-12 pb-4 text-sm font-medium tracking-wide text-gray-600">
        Pick an option of either monthly or yearly billing
      </p>

      <p
        className={`ml-4 mr-12 pb-4 text-sm font-medium tracking-wide text-red-500 duration-300 ${
          paymentPlanError ? "opacity-100" : "opacity-0"
        }`}
      >
        Please select a payment plan
      </p>

      <section className="flex flex-col space-y-4">
        {PaymentCards.map((card) => (
          <div
            key={card.name}
            onClick={() =>
              handleSelected(
                card.name,
                annually ? card.annualPrice : card.monthlyPrice
              )
            }
            className={`relative mx-4 rounded border-2 py-4 duration-300 ease-linear ${
              plan[0] === card.name ? "border-slate-900" : "border-gray-500"
            }`}
          >
            <div
              className={`relataive flex flex-row items-center justify-between space-x-2`}
            >
              <div className="relative flex w-full flex-row items-center justify-start space-x-2">
                <StarIcon
                  className={`${
                    plan[0] === card.name ? "opacity-0" : "opacity-100"
                  } relative left-4 h-5 w-5 duration-300 ease-linear`}
                />
                <SolidStarIcon
                  className={`absolute left-2 h-5 w-5 text-yellow-600/80 duration-300 ease-linear ${
                    plan[0] === card.name ? "opacity-100" : "opacity-0"
                  }`}
                />
                <h1 className="relative left-4 text-xl font-medium tracking-wider text-slate-900 ">
                  {card.name}
                </h1>
              </div>
              <p className="relative right-2 flex w-1/2 items-center justify-end px-0.5 text-slate-800">
                ${annually ? card.annualPrice : card.monthlyPrice}
                <span className="relative right-0 -bottom-0.5 text-xs text-gray-600">
                  /{annually ? "yr" : "mo"}
                </span>
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
