import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

type Props = {
  pack: {
    name: string;
    description: string;
    month: number;
    annual: number;
    height: string;
  };
  annual: boolean;
  packages: [string, number][];
  onClick?: () => void;
};

export const PackageCard = ({ pack, annual, onClick, packages }: Props) => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => setShowDescription((prev) => !prev);

  return (
    <div
      onClick={onClick}
      key={pack.name}
      className={`relative mx-4 flex h-auto flex-col rounded border-2 px-4 py-2 ${
        packages.includes([pack.name, annual ? pack.annual : pack.month])
          ? "border-slate-900"
          : "border-gray-500"
      }`}
    >
      <div className="flex justify-between ">
        <h1 className="w-full">{pack.name}</h1>
        <p className="absolute right-2 top-0 text-sm font-medium tracking-wide text-slate-900">
          ${annual ? pack.annual : pack.month}
          <span className="relative -bottom-[1px] text-xs text-gray-600">
            /{annual ? "yr" : "mo"}
          </span>
        </p>
      </div>

      <div
        className={`max-h-[100px] pt-2 duration-500 ${
          showDescription ? (pack.height ? pack.height : "h-14") : "h-0"
        }`}
      >
        <p
          className={`mr-4
        text-xs font-bold tracking-wider text-black/80 ${
          showDescription
            ? "pointer-events-auto opacity-100 delay-200 duration-500"
            : "pointer-events-none opacity-0 duration-150"
        }`}
        >
          {pack.description}
        </p>
      </div>
      <div className="absolute right-0 bottom-0">
        <ChevronDownIcon
          className={`absolute bottom-1 right-1 h-4 w-4 duration-500 ${
            showDescription ? "opacity-0" : "opacity-100"
          }`}
          onClick={toggleDescription}
        />
        <ChevronUpIcon
          className={`absolute bottom-1 right-1 h-4 w-4 duration-500 ${
            showDescription ? "opacity-100" : "opacity-0"
          }`}
          onClick={toggleDescription}
        />
      </div>
    </div>
  );
};
