import { useState } from "react";
import {
  Circle,
  PersonalInfo,
  PaymentPlan,
  Packages,
  Registration,
} from "./components";
import { regex } from "src/constants";

type Props = {
  isSignIn: boolean;
  setIsSignIn: () => void;
};

const circles = [1, 2, 3, 4];

export const SignUp = ({ isSignIn, setIsSignIn }: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [paymentPlan, setPaymentPlan] = useState<[string, "mo" | "yr", number]>(
    ["", "mo", 0]
  );
  const [packages, setPackages] = useState<{
    packages: [string, number][];
    total: number;
  }>({ packages: [], total: 0 });
  const [personalError, setPersonalError] = useState<string[]>([]);
  const [paymentPlanError, setPaymentPlanError] = useState(false);
  const [selected, setSelected] = useState(4);

  // const user = {
  //   information: {
  //     name,
  //     email,
  //     phoneNumber,
  //     password,
  //   },
  //   payment: paymentPlan,
  //   packages: packages,
  // };

  const user = {
    information: {
      name: "Brayden Wong",
      email: "braydenlwong@gmail.com".toLowerCase(),
      phoneNumber: "(123)-456-7890",
      password: "Password123!",
    },
    payment: ["Pro", "mo", 100] as [string, "mo" | "yr", number],
    packages: {
      packages: [["Email Service", 10]] as [string, number][],
      total: 0,
    },
  } as const;

  const increaseSelected = () => {
    setSelected((val) => val + 1);
  };

  const decreaseSelected = () => {
    setSelected((val) => val - 1);
  };

  const handleNextStep = () => {
    switch (selected) {
      case 1:
        if (name.length < 3) setPersonalError((prev) => [...prev, "Name"]);
        if (email.length < 3 || !regex.email.test(email))
          setPersonalError((prev) => [...prev, "Email"]);
        if (!regex.phoneNumber.test(phoneNumber))
          setPersonalError((prev) => [...prev, "Phone Number"]);
        if (password.length < 8 || !regex.password.test(password.trim()))
          setPersonalError((prev) => [...prev, "Password"]);

        if (
          name.length > 3 &&
          regex.email.test(email) &&
          regex.phoneNumber.test(phoneNumber) &&
          regex.password.test(password)
        ) {
          toNextStep();
        }
        break;

      case 2:
        if (paymentPlan[0] === "" || paymentPlan[2] === 0)
          setPaymentPlanError(true);
        else if (paymentPlanError === false) toNextStep();
        break;

      case 3:
        toNextStep();
        break;
    }
  };

  const setSelectedPaymentPlan = (details: [string, "mo" | "yr", number]) =>
    setPaymentPlan(details);

  const filterPackages = (pack: [string, number]) => {
    return packages.packages.some((row) => row.includes(pack[0]));
  };

  const addPackage = (
    type: "update" | "add",
    annual?: boolean,
    cards?: {
      name: string;
      description: string;
      month: number;
      annual: number;
      height: string;
    }[],
    pack?: [string, number]
  ) => {
    switch (type) {
      case "update":
        if (!cards) return;
        let total = 0;

        const updatedCards = packages.packages.map((pack) => {
          const card = cards.find((card) => card.name === pack[0]);
          if (card) {
            total += annual ? card.annual : card.month;
            return [card.name, annual ? card.annual : card.month] as [
              string,
              number
            ];
          }
          return pack;
        });

        setPackages({
          packages: updatedCards,
          total,
        });
        break;
      case "add":
        if (!pack) return;
        if (!filterPackages(pack)) {
          setPackages({
            packages: [...packages.packages, pack],
            total: packages.total + pack[1],
          });
          return;
        }
        const updatedArray = packages.packages.filter(
          (row) => row[0] !== pack[0]
        );

        setPackages({
          packages: updatedArray,
          total: packages.total - pack[1],
        });
        break;
    }
  };

  const handlePageChange = () => {
    switch (selected) {
      case 1:
        return (
          <PersonalInfo
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
            password={password}
            setPassword={setPassword}
            personalError={personalError}
            setPersonalError={setPersonalError}
            selected={selected}
          />
        );
      case 2:
        return (
          <PaymentPlan
            plan={paymentPlan}
            setPaymentPlan={(details: [string, "mo" | "yr", number]) =>
              setSelectedPaymentPlan(details)
            }
            paymentPlanError={paymentPlanError}
            setPaymentPlanError={setPaymentPlanError}
          />
        );
      case 3:
        return (
          <Packages
            packs={packages}
            setPackages={(
              type: "update" | "add",
              annual?: boolean,
              cards?: {
                name: string;
                description: string;
                month: number;
                annual: number;
                height: string;
              }[],
              pack?: [string, number]
            ) => addPackage(type, annual, cards, pack)}
          />
        );
      case 4:
        return <Registration user={user} />;
    }
  };

  const toNextStep = () => {
    console.log(user);
    increaseSelected();
  };

  const handleSubmit = () => console.log("submitted");

  return (
    <>
      <div
        className="absolute top-0 flex w-full items-center justify-center
        space-x-8 bg-slate-900 pt-8 pb-24 shadow-md shadow-slate-900"
      >
        {circles.map((circle) => (
          <Circle key={circle} selected={selected} value={circle} />
        ))}
      </div>

      <div className="min-h-screen w-full">
        <section
          className="relative top-28 left-1/2 w-[90%] -translate-x-1/2 rounded
          bg-slate-300 shadow-lg shadow-slate-600/70"
        >
          {handlePageChange()}
        </section>
      </div>

      <div
        className="absolute bottom-4 left-1/2 flex w-[90%] -translate-x-1/2 items-center
        rounded bg-slate-300 py-8 shadow-md shadow-slate-500"
      >
        <button
          onClick={decreaseSelected}
          className={`absolute left-6 text-gray-600 duration-500 ease-linear ${
            selected === 1
              ? "pointer-events-none opacity-0"
              : "pointer-events-auto opacity-100"
          }`}
        >
          go back
        </button>
        {selected < 3 ? (
          <button
            onClick={handleNextStep}
            className="absolute right-4 flex w-28 justify-center rounded bg-slate-900
            py-2.5 tracking-wide text-slate-200"
          >
            Next Step
          </button>
        ) : selected === 3 ? (
          <button
            onClick={handleNextStep}
            className="absolute right-4 flex w-28 justify-center rounded bg-slate-900
          py-2 tracking-wide text-slate-200"
          >
            Review
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            className="absolute right-4 flex w-28 justify-center rounded bg-slate-900
          py-2 tracking-wide text-slate-200"
          >
            Register
          </button>
        )}
      </div>
    </>
  );
};
