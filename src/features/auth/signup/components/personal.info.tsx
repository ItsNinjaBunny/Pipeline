import { Input } from "./input";
import { regex } from "src/constants";

type Props = {
  name: string;
  setName: (value: string) => void;
  email: string;
  setEmail: (value: string) => void;
  phoneNumber: string;
  setPhoneNumber: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  personalError: string[];
  setPersonalError: (value: string[]) => void;
};

export const PersonalInfo = ({
  name,
  setName,
  email,
  setEmail,
  phoneNumber,
  setPhoneNumber,
  password,
  setPassword,
  personalError,
  setPersonalError,
}: Props) => {
  return (
    <div className="py-8 duration-300">
      <h1 className="relative -top-4 px-4 text-3xl tracking-wide text-slate-900">
        Personal Info
      </h1>

      <p className="relative -top-2 mx-4 text-xs font-medium tracking-wide text-gray-500">
        Please provide your name email, phone number and password
      </p>

      <div className="space-y-2">
        <Input
          label="Name"
          type="text"
          placeholder="e.g. John Doe"
          value={name}
          onChange={(e: string) => {
            setName(e);
            if (e.length > 3 && personalError.includes("Name"))
              setPersonalError(
                personalError.filter((error) => error !== "Name")
              );
          }}
          personalError={personalError}
        />
        <Input
          label="Email"
          type="text"
          placeholder="e.g. JohnDoe@example.com"
          value={email}
          onChange={(e: string) => {
            setEmail(e);
            if (regex.email.test(e) && personalError.includes("Email"))
              setPersonalError(
                personalError.filter((error) => error !== "Email")
              );
          }}
          personalError={personalError}
        />
        <Input
          label="Phone Number"
          type="text"
          placeholder="e.g. +1 234 567 890"
          value={phoneNumber}
          onChange={(e: string) => {
            setPhoneNumber(e);
            if (
              regex.phoneNumber.test(e) &&
              e.length >= 10 &&
              personalError.includes("Phone Number")
            )
              setPersonalError(
                personalError.filter((error) => error !== "Phone Number")
              );
          }}
          setPhoneNumber={setPhoneNumber}
          personalError={personalError}
        />
        <Input
          label="Password"
          type="password"
          placeholder="e.g. ***********"
          value={password}
          onChange={(e: string) => {
            setPassword(e);
            if (regex.password.test(e) && personalError.includes("Password"))
              setPersonalError(
                personalError.filter((error) => error !== "Password")
              );
          }}
          personalError={personalError}
        />
      </div>
    </div>
  );
};
