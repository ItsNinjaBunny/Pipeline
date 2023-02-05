type Props = {
  value: number;
  selected: number;
};

export const Circle = ({ value, selected }: Props) => {
  return (
    <div
      className={`flex h-10 w-10 items-center justify-center rounded-full border-2
      border-slate-200 text-lg font-medium duration-500 ${
        selected === value
          ? "bg-slate-200 text-slate-900"
          : " bg-transparent text-slate-200"
      }`}
    >
      {value}
    </div>
  );
};
