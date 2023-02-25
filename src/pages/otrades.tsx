import React from "react";
import { Navigation } from "src/components";
import TradeCard from "src/features/TradeCard";

const otrades = () => {
  const offers = [
    {
      offerId: 1,
      games: [
        {
          id: "1a",
          condition: "Used",
          name: "Call Of Duty: Black Ops 3",
          platform: "PlayStation 3(PS3)",
          publisher: "Activision",
          year: "2010",
        },
        {
          id: "2a",
          condition: "New",
          name: "Assassin's Creed 3",
          platform: "Xbox Series X",
          publisher: "Ubisoft",
          year: "2020",
        },
      ],
      trades: [
        {
            id:"Asdas3",
          user: { username: "Alice", userId: "1" },
          games: [
            {
              id: "1a",
              condition: "Used",
              name: "Call Of Duty: Black Ops 1",
              platform: "PlayStation 3(PS3)",
              publisher: "Activision",
              year: "2010",
            },
            {
              id: "2a",
              condition: "New",
              name: "Assassin's Creed Valhalla",
              platform: "Xbox Series X",
              publisher: "Ubisoft",
              year: "2020",
            },
          ],
        },
        {
          id: "123",
          user: { username: "Alice", userId: "1" },
          games: [
            {
              id: "1a",
              condition: "Used",
              name: "Call Of Duty: Black Ops 1",
              platform: "PlayStation 3(PS3)",
              publisher: "Activision",
              year: "2010",
            },
            {
              id: "2a",
              condition: "New",
              name: "God Of War",
              platform: "Xbox Series X",
              publisher: "Ubisoft",
              year: "2020",
            },
          ],
        },
      ],
    },
    {
      offerId: 2,
      games: [
        {
          id: "1a",
          condition: "Used",
          name: "Call Of Duty: Black Ops 3",
          platform: "PlayStation 3(PS3)",
          publisher: "Activision",
          year: "2010",
        },
        {
          id: "2a",
          condition: "New",
          name: "Assassin's Creed 3",
          platform: "Xbox Series X",
          publisher: "Ubisoft",
          year: "2020",
        },
      ],
      trades: [
        {
          id: "fcsewtr43",
          user: { username: "Alice", userId: "1" },
          games: [
            {
              id: "1a",
              condition: "Used",
              name: "Call Of Duty: Black Ops 4",
              platform: "PlayStation 3(PS3)",
              publisher: "Activision",
              year: "2010",
            },
            {
              id: "2a",
              condition: "New",
              name: "Assassin's Creed Valhalla",
              platform: "Xbox Series X",
              publisher: "Ubisoft",
              year: "2020",
            },
          ],
        },
        {
          id: "1asdas",
          user: { username: "Alice", userId: "1" },
          games: [
            {
              id: "1a",
              condition: "Used",
              name: "Call Of Duty: Black Ops 2",
              platform: "PlayStation 3(PS3)",
              publisher: "Activision",
              year: "2010",
            },
            {
              id: "2a",
              condition: "New",
              name: "Assassin's Creed Valhalla",
              platform: "Xbox Series X",
              publisher: "Ubisoft",
              year: "2020",
            },
          ],
        },
      ],
    },
  ];
  function deleteTrade(game: any) {
    document.getElementById(game)?.remove();
    //send del request for this game here
  }
  return (
    <div className="bg-white ">
      <Navigation></Navigation>
      <div className="content h-full overflow-hidden bg-white">
        <h1 className="fixed top-7 w-[70%] border-b-2 border-slate-300 pb-3  text-center text-2xl">
          Outgoing Trades
        </h1>
        <div className="relative top-[15%] h-full w-full bg-white">
          {offers.map((offer) => (
            <div key={offer.offerId}>
              {offer.trades.map((trade) => (
                <TradeCard
                  deleteTrade={deleteTrade}
                  offer={offer.games}
                  tradeId={trade.id}
                  trade={trade.games}
                ></TradeCard>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default otrades;
