import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "src/components/icons";

type Props = {
  label: string;
  type: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  personalError: string[];
  setPhoneNumber?: (value: string) => void;
  className?: string;
};

export const Input = ({
  className,
  label,
  type,
  placeholder,
  value,
  onChange,
  personalError,
  setPhoneNumber,
}: Props) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow((prev) => !prev);

  const toggleShow = () => (show ? "text" : "password");
  const phoneNumberFormatter = () => {
    if (label !== "Phone Number") return;

    if (setPhoneNumber) setPhoneNumber(formatPhoneNumber(value));
  };

  const formatPhoneNumber = (value: string) => {
    if (!value) return "";

    const phoneNumber = value.replace(/[^\d]/g, "");

    const phoneNumberLength = phoneNumber.length;

    if (phoneNumberLength < 4) return phoneNumber;

    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }

    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
      3,
      6
    )}-${phoneNumber.slice(6, 9)}`;
  };

  return type !== "password" ? (
    <div className="mx-4 flex flex-col">
      <div className="mx-1 flex justify-between text-sm font-medium text-slate-800">
        <label htmlFor={label} className="cursor-text">
          {label}
        </label>
        <p
          className={`text-xs font-medium tracking-wide text-red-500 duration-300
          ${personalError.includes(label) ? "opacity-100" : "opacity-0"}
          `}
        >
          this field is required
        </p>
      </div>
      <input
        id={label}
        type={type}
        placeholder={placeholder}
        onKeyDown={() => phoneNumberFormatter()}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`rounded border-2 border-slate-500 px-2 py-2 text-sm font-medium tracking-wide
          text-slate-900 outline-none duration-200 placeholder:text-sm
          placeholder:font-normal placeholder:tracking-normal focus:border-slate-800`}
      />
    </div>
  ) : (
    <div className="mx-4 flex flex-col">
      <div className="mx-1 flex justify-between text-sm font-medium text-slate-800">
        <label htmlFor={label} className="cursor-text">
          {label}
        </label>
        <p
          className={`text-xs font-medium tracking-wide text-red-500 duration-300
          ${personalError.includes(label) ? "opacity-100" : "opacity-0"}
          `}
        >
          this field is required
        </p>
      </div>
      <div className="relative flex items-center justify-center">
        <input
          id={label}
          placeholder={placeholder ? placeholder : ""}
          type={toggleShow()}
          onChange={(e) => onChange(e.target.value)}
          value={value}
          className={`${
            className ? className : ""
          } w-full rounded border-2 border-slate-500 px-2 py-2 pr-8 text-sm
          font-medium tracking-wide text-slate-900 outline-none duration-200
          placeholder:text-sm placeholder:font-normal placeholder:tracking-normal focus:border-slate-800`}
        />
        {show ? (
          <EyeSlashIcon
            onClick={handleShow}
            className="absolute right-1.5 h-5 w-5 cursor-pointer text-slate-900"
          />
        ) : (
          <EyeIcon
            onClick={handleShow}
            className="absolute right-1.5 h-5 w-5 cursor-pointer text-slate-900"
          />
        )}
      </div>
    </div>
  );
};
