import { useState } from "react";
import { Circle } from "./components";
import { PersonalInfo } from "./components/personal.info";
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
  const [personalError, setPersonalError] = useState<string[]>([]);

  const [selected, setSelected] = useState(1);

  const increaseSelected = () => {
    if (selected < 4) {
      setSelected(selected + 1);
    }
  };

  const decreaseSelected = () => {
    if (selected > 1) {
      setSelected(selected - 1);
    }
  };

  const handleNextStep = () => {
    switch (selected) {
      case 1:
        if (name.length < 3) setPersonalError((prev) => [...prev, "Name"]);
        if (email.length < 3) setPersonalError((prev) => [...prev, "Email"]);
        if (phoneNumber.length < 3)
          setPersonalError((prev) => [...prev, "Phone Number"]);
        if (password.length < 3)
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
    }
  };

  const toNextStep = () => {
    if (personalError.length === 0) increaseSelected();
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
          />
        );
    }
  };

  const handleSubmit = () => console.log("submitted");

  return (
    <>
      <div
        className="absolute top-0 flex w-full items-center justify-center
        space-x-8 bg-slate-900 pt-8 pb-16"
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
        rounded bg-slate-300 py-10 shadow-md shadow-slate-500"
      >
        {selected > 1 && (
          <button
            onClick={decreaseSelected}
            className="absolute left-4 text-gray-500"
          >
            go back
          </button>
        )}

        {selected < 4 ? (
          <button
            onClick={handleNextStep}
            className="absolute right-4 rounded bg-slate-900 py-2 px-4 tracking-wide
            text-slate-200"
          >
            Next Step
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            className="absolute right-4 rounded bg-slate-900 py-2 px-4 tracking-wide
            text-slate-200"
          >
            submit
          </button>
        )}
      </div>
    </>
  );
};
