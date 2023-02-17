import { PackageCards } from "../package.template";
import { PackageCard } from "./package.card";
import { useState } from "react";

type Props = {
  packs: {
    packages: [string, number][];
    total: number;
  };
  setPackages: (
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
  ) => void;
};

export const Packages = ({ packs, setPackages }: Props) => {
  const { packages, total } = packs;
  const [annually, setAnnually] = useState(
    !packages[0] ||
      (packages[0] &&
        (packages[0][1] === 0 ||
          packages[0][1] === 10 ||
          packages[0][1] === 15 ||
          packages[0][1] === 30))
      ? false
      : true
  );

  return (
    <div className="relative h-[420px] py-6">
      <div className="flex items-center justify-between">
        <h1
          className="relative -top-4 px-4 text-3xl
          tracking-wide text-slate-900"
        >
          Packages
        </h1>
        <div className="relative -top-[22px] mr-6 flex items-center justify-center pt-4">
          <button
            onClick={() => {
              setAnnually((prev) => !prev);
              packages.length > 0 &&
                packages.forEach((row) => {
                  const card = PackageCards.find(
                    (value) => value.name === row[0]
                  );

                  if (card) {
                    setPackages("update", !annually, PackageCards, undefined);
                  }
                });
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

      <p
        className="relative mx-4 pb-4 text-sm font-medium
        tracking-wide text-gray-600"
      >
        Select various packages to enhance your Pipeline experience
      </p>

      <div className="relative flex h-[250px] flex-col space-y-4 overflow-y-scroll">
        {PackageCards.map((pack) => (
          <PackageCard
            packages={packages}
            key={pack.name}
            pack={pack}
            annual={annually}
            onClick={() => {
              setPackages("add", undefined, undefined, [
                pack.name,
                annually ? pack.annual : pack.month,
              ]);
            }}
          />
        ))}
      </div>
      <div className="mx-8 mt-4 divide-y-2 divide-gray-900/20">
        <span></span>
        <div className="flex justify-between">
          <p className="text-sm font-semibold italic tracking-wide text-gray-800">
            total
          </p>
          <p className="font-light text-gray-800">
            <span className="relative mr-0.5 font-normal">$</span>
            {total}
          </p>
        </div>
      </div>
    </div>
  );
};
