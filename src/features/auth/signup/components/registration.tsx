import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

type Props = {
  user: {
    information: {
      name: string;
      email: string;
      phoneNumber: string;
      password: string;
    };
    payment: [string, "mo" | "yr", number];
    packages: {
      packages: [string, number][];
      total: number;
    };
  };
};

export const Registration = ({ user }: Props) => {
  const [personalCard, setPersonalCard] = useState(false);
  const [paymentCard, setPaymentCard] = useState(false);
  const [packageCard, setPackageCard] = useState(false);

  const handlePersonalCard = () => setPersonalCard((prev) => !prev);
  const handlePaymentCard = () => setPaymentCard((prev) => !prev);
  const handlePackageCard = () => setPackageCard((prev) => !prev);

  const { information, packages, payment } = user;

  return (
    <div className="relative py-6 pt-8">
      <h1 className="relative -top-4 mx-4 py-4 pt-6 text-3xl tracking-wide text-slate-900">
        Confirmation
      </h1>
      <div className="max-h-[300px] overflow-y-scroll">
        <div className="mx-4 flex flex-col space-y-4">
          <section className="relative rounded border-2 border-gray-600 p-2 pt-4">
            <h1 className="-top-4 text-xl tracking-wide text-slate-900">
              Personal Info
            </h1>

            <div className={`duration-500 ${personalCard ? "h-24" : "h-0"}`}>
              <div
                className={`mt-2 flex flex-col text-sm font-medium ${
                  personalCard
                    ? "h-auto opacity-100 delay-200 duration-300"
                    : "h-0 opacity-0 duration-200"
                }`}
              >
                <p className="flex w-full flex-row justify-between">
                  Name: <span>{information.name}</span>
                </p>
                <p className="flex w-full flex-row justify-between">
                  Email: <span>{information.email}</span>
                </p>
                <p className="flex w-full flex-row justify-between">
                  Phone Number: <span>{information.phoneNumber}</span>
                </p>
                <p className="flex w-full flex-row justify-between">
                  Password:{" "}
                  <input
                    readOnly={true}
                    type="password"
                    className="pointer-events-none w-fit bg-transparent text-right "
                    value={information.password}
                  />
                </p>
              </div>
            </div>

            <ChevronUpIcon
              onClick={() => handlePersonalCard()}
              className={`absolute right-1.5 bottom-1 h-4 w-4 ${
                personalCard
                  ? "pointer-events-auto opacity-100 duration-500"
                  : "pointer-events-none opacity-0 duration-100"
              }`}
            />
            <ChevronDownIcon
              onClick={() => handlePersonalCard()}
              className={`absolute right-1.5 bottom-[18px] h-4 w-4  ${
                personalCard
                  ? "pointer-events-none opacity-0 duration-100"
                  : "pointer-events-auto opacity-100 duration-500"
              }`}
            />
          </section>

          <section className="relative rounded border-2 border-gray-600 p-2">
            <div className="flex w-full justify-between">
              <h1 className="-top-4 text-xl tracking-wide text-slate-900">
                Payment Plan
              </h1>
              <div className="flex flex-col justify-end">
                <p>status: {payment[0]}</p>
                <p className="text-right text-sm font-medium text-gray-500">
                  ${payment[2]}
                  <span>/{payment[1]}</span>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
