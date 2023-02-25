import React from "react";
import GameCard from "./GameCard";

const TradeCard = (props: any) => {
  return (
    <div
      id={props.tradeId}
      className="mi-auto mb-10 flex w-[80%] flex-row rounded-md border-4 border-black py-8"
    >
      <div className="flex h-full w-1/2 flex-col p-8">
        <h3 className="mb-4 border-b-2 border-slate-300 pb-3 text-center  text-2xl">
          Your Offer Games:
        </h3>

        <div className="flex flex-wrap gap-6">
          {props.offer.map((game: any) => (
            <GameCard
              className="h-96 w-80 overflow-hidden border-none"
              game={game}
            />
          ))}
        </div>
      </div>

      <div className="absolute flex h-full w-1 rounded-full bg-slate-900"></div>

      <div className="flex h-full w-1/2 flex-col p-8">
        <h3 className="mb-4 border-b-2 border-slate-300 pb-3 text-center  text-2xl">
          Trade Games:
        </h3>

        <div className="flex flex-wrap gap-6">
          {props.trade.map((game: any) => (
            <GameCard
              className="h-96 w-80 overflow-hidden border-none"
              game={game}
            />
          ))}
        </div>
      </div>
      <div className="absolute flex h-full ">
        {props.out === false && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-8 h-8 w-8 cursor-pointer text-green-500 "
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9 12.586L4.707 8.293a1 1 0 10-1.414 1.414l5 5a1 1 0 001.414 0l9-9a1 1 0 10-1.414-1.414l-8.293 8.293z"
              clipRule="evenodd"
            />
          </svg>
        )}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="ml-8 h-8 w-8 cursor-pointer text-red-500"
          onClick={() => {
            props.deleteTrade(props.tradeId);
            //send the delting trade id
          }}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
      </div>
    </div>
  );
};

export default TradeCard;
