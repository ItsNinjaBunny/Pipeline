import {
  ArrowsRightLeftIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Head from "next/head";
import { platform } from "os";
import React, { useState } from "react";
import { Navigation, UserCircleIcon } from "src/components";
import Popup from "src/components/Popup";
import GameCard from "src/features/GameCard";
import SendTrade from "src/features/SendTrade";

const Game = (props: any) => {
  const offers = [
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
          name: "Assassin's Creed Valhalla",
          platform: "Xbox Series X",
          publisher: "Ubisoft",
          year: "2020",
        },
      ],
    },
    {
      id: "123",
      user: { username: "Bob", userId: "2" },
      games: [
        {
          id: "1b",
          condition: "Used",
          name: "Call Of Duty: Modern Warfare 2",
          platform: "Xbox 360",
          publisher: "Activision",
          year: "2009",
        },
        {
          id: "2b",
          condition: "New",
          name: "The Legend of Zelda: Breath of the Wild",
          platform: "Nintendo Switch",
          publisher: "Nintendo",
          year: "2017",
        },
      ],
    },
    {
      id: "123",
      user: { username: "Charlie", userId: "3" },
      games: [
        {
          id: "1c",
          condition: "Used",
          name: "Grand Theft Auto V",
          platform: "PlayStation 4",
          publisher: "Rockstar Games",
          year: "2014",
        },
        {
          id: "2c",
          condition: "New",
          name: "Halo Infinite",
          platform: "Xbox Series X",
          publisher: "Microsoft Studios",
          year: "2021",
        },
      ],
    },
  ];

  const [popUp, setPopUp] = useState(false);
  const [title, setTitle] = useState<string>("");
  const [popUpTitle, setPopUpTitle] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [console, setConsole] = useState<string>("");

  function getMatchingOffers() {
    const filteredOffers = offers.filter((offer) => {
      const filteredGames = offer.games.filter((game: any) => {
        const isTitleMatch = game.name
          .toLowerCase()
          .includes(title.toLowerCase());
        const isYearMatch = year ? game.year.includes(year) : true;
        const isPlatformMatch = game.platform
          .toLowerCase()
          .includes(console.toLowerCase());
        return isTitleMatch && isYearMatch && isPlatformMatch;
      });
      return filteredGames.length > 0;
    });
    return filteredOffers;
  }
  const [id, setid] = useState("");

  return (
    <>
      <Head>
        <title>All Games</title>
      </Head>
      <Navigation />

      <div className="content">
        <div className="header flex h-full flex-col items-center justify-center">
          <div className="w-full overflow-hidden">
            <svg
              className="waves"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 24 150 28"
              preserveAspectRatio="none"
              shape-rendering="auto"
            >
              <defs>
                <path
                  id="gentle-wave"
                  d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                />
              </defs>
              <g className="parallax">
                <use xlinkHref="#gentle-wave" x="48" y="0" fill="#cccccc5c" />
                <use xlinkHref="#gentle-wave" x="48" y="3" fill="#cccccc5c" />
                <use xlinkHref="#gentle-wave" x="48" y="5" fill="#cccccc5c" />
                <use xlinkHref="#gentle-wave" x="48" y="7" fill="#ccc" />
              </g>
            </svg>
          </div>

          <div className=" w-full rotate-180 overflow-hidden">
            <svg
              className="waves"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 24 150 28"
              preserveAspectRatio="none"
              shape-rendering="auto"
            >
              <defs>
                <path
                  id="gentle-wave"
                  d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                />
              </defs>
              <g className="parallax">
                <use xlinkHref="#gentle-wave" x="48" y="0" fill="#cccccc5c" />
                <use xlinkHref="#gentle-wave" x="48" y="3" fill="#cccccc5c" />
                <use xlinkHref="#gentle-wave" x="48" y="5" fill="#cccccc5c" />
                <use xlinkHref="#gentle-wave" x="48" y="7" fill="#ccc" />
              </g>
            </svg>
          </div>
        </div>
        <div className="absolute mt-[3%] h-[20%] w-[60%]  ">
          <div className="row1 items-center justify-center rounded-full  p-[1%]">
            <div className="input-box mi-auto t w-full items-center  justify-center rounded-full border-transparent bg-slate-200">
              <input
                className="input float-left w-[28%]"
                type="text"
                placeholder="Game Name"
                onChange={(e) => setTitle(e.target.value)}
              ></input>
              <input
                className="input diff float-left  w-[20%]"
                type="text"
                placeholder="Console"
                onChange={(e) => setConsole(e.target.value)}
              ></input>
              <input
                className="input diff float-left  w-[20%]"
                type="text"
                placeholder="Year"
                onChange={(e) => setYear(e.target.value)}
              ></input>
              <MagnifyingGlassIcon className=" relative ml-auto mt-[0.5%] flex h-6 w-6"></MagnifyingGlassIcon>
            </div>
            <p className="mt-3 flex">
              Total Offers :{getMatchingOffers().length}
            </p>
          </div>
        </div>
        <div
          id="games"
          className="absolute right-[0.5%] top-[25vh] mr-[2%] flex h-[65vh] w-[80%] flex-row flex-wrap items-center justify-center overflow-y-scroll px-[3%] pr-[9%]  align-middle "
        >
          {title === "" && console === "" && year === ""
            ? offers.map((offer: any) => {
                return (
                  <div
                    className="mt-10 w-full  rounded-[50px] bg-slate-300 p-[1%] "
                    id={`offer-${offer.id}`}
                  >
                    <h1 className="mt-3 mb-5 flex h-[7vh] flex-row items-center justify-center overflow-hidden text-4xl font-semibold tracking-wide">
                      Offer -
                      <div className="mt-auto h-full w-auto overflow-visible">
                        <button
                          onClick={() => {
                            setid(offer.id);
                            setPopUp(true);
                          }}
                          className="mt-2 w-[6vh] rounded-full bg-slate-400 p-[3%] text-slate-900 hover:text-slate-500  "
                        >
                          <ArrowsRightLeftIcon className="h-10 w-10" />
                        </button>
                      </div>
                      <p className="relative left-[30%] overflow-hidden text-sm">
                        Username:{offer.user.username}
                      </p>
                    </h1>{" "}
                    {/* add any other offer information here */}
                    <div className="flex w-full flex-row justify-center space-x-8">
                      {offer.games.map((game: any) => (
                        <div key={game.id}>
                          <GameCard
                            className=" h-[40vh] w-[35vh] overflow-hidden border-none"
                            game={game}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })
            : getMatchingOffers().map((offer: any) => {
                return (
                  <div
                    className="mt-10 w-full  rounded-[50px] bg-slate-300 p-[1%] "
                    id={`offer-${offer.id}`}
                  >
                    <h1 className="mt-3 mb-5 flex h-[7vh] flex-row items-center justify-center overflow-hidden text-4xl font-semibold tracking-wide">
                      Offer -
                      <div className="mt-auto h-full w-auto overflow-visible">
                        <button
                          onClick={() => {
                            setid(offer.id);
                            setPopUp(true);
                          }}
                          className="mt-2 w-[6vh] rounded-full bg-slate-400 p-[3%] text-slate-900 hover:text-slate-500  "
                        >
                          <ArrowsRightLeftIcon className="h-10 w-10" />
                        </button>
                      </div>
                      <p className="relative left-[30%] overflow-hidden text-sm">
                        Username:{offer.user.username}
                      </p>
                    </h1>{" "}
                    {/* add any other offer information here */}
                    <div className="flex w-full flex-row justify-center space-x-8">
                      {offer.games.map((game: any) => (
                        <div key={game.id}>
                          <GameCard
                            className=" h-[40vh] w-[35vh] overflow-hidden border-none"
                            game={game}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
        </div>
        <Popup
          title={"Send Trade Offer"}
          isOpen={popUp}
          {...props}
          onClose={() => {
            setPopUp(false);
          }}
          children={[<SendTrade setPopUp={setPopUp} offerId={id}></SendTrade>]}
        ></Popup>
      </div>
    </>
  );
};

export default Game;
