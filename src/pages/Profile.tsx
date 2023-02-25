import Head from "next/head";
import React, { Component, useState } from "react";
import { Navigation } from "src/components";
import Image from "next/image";
import icon from "public/UserIcon.png";
import Popup from "src/components/Popup";
import { number } from "zod";
import { ArrowPathIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import EditGames from "src/features/EditGames";
import EditConsoles from "src/features/EditConsoles";
import EditAccount from "src/features/EditAccount";
import EditOffers from "src/features/EditOffers";
export const Profile = (props: any) => {

  const [signUpUser, setUser] = useState({
    name: "Paco Trenches",
    email: "pacot@netbangers.com",
    username: "XxTheTrenchxX",
    bio: "Hello, fellow gamers! I'm an avid gamer with a passion for PlayStation and classic Mario games. Ever since I was a kid, I've been fascinated by the immersive worlds and exciting challenges that video games offer. I love nothing more than diving into a new adventure, whether it's exploring the vast open world of the latest PlayStation title, or revisiting the nostalgic world of retro Mario games.As a gamer, I understand the value of building a collection of quality games, and that's where this trading platform comes in. I'm excited to be part of this community where I can connect with other gamers and swap games that I no longer play for ones that I'm eager to try. I'm looking forward to discovering new titles and sharing my love of gaming with others. Let's trade and play!",
    consoles: [
      "Sega Master System",
      "TurboGrafx-16 (PC Engine)",
      "Sega Genesis (Mega Drive)",
      "Super Nintendo Entertainment System (SNES)",
      "Sega Saturn",
      "PlayStation",
      "Nintendo 64",
      "Sega Dreamcast",
    ],
    games: [
      {
        id: 11,
        condition: "Used",
        name: "Halo 5: Guardians",
        platform: "Xbox One",
        publisher: "Microsoft Studios",
        year: "2015",
      },
      {
        id: 12,
        condition: "New",
        name: "The Elder Scrolls V: Skyrim Special Edition",
        platform: "PlayStation 4(PS4)",
        publisher: "Bethesda Softworks",
        year: "2016",
      },
      {
        id: 13,
        condition: "Used",
        name: "Uncharted 4: A Thief's End",
        platform: "PlayStation 4(PS4)",
        publisher: "Naughty Dog",
        year: "2016",
      },
      {
        id: 14,
        condition: "New",
        name: "Resident Evil Village",
        platform: "PlayStation 5(PS5)",
        publisher: "Capcom",
        year: "2021",
      },

    ],
    offers: [], // myReccivedOffers: [],
    // mySentOffers: [],
    admin: false,
  });
  function deleteGame(game: any) {
    signUpUser.games.splice(
      signUpUser.games.findIndex((value) => value === game),
      1
    );

    setUser(signUpUser);
  }
  const [email, setEmail] = useState<string>("");
  const [index, setIndex] = useState<number>(0);
  const forms = [
    <EditGames
      key="1"
      addGame={addGame}
      deleteGame={deleteGame}
      userGames={signUpUser.games}
    ></EditGames>,
    <EditConsoles key="2" user={signUpUser} setUser={setUser}></EditConsoles>,
    <EditAccount key="3" user={signUpUser} setUser={setUser}></EditAccount>,
    <EditOffers key="4" user={signUpUser} setUser={setUser}></EditOffers>,
  ];
  const [popUp, setPopUp] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [bio, setBio] = useState<boolean>(false);

  function updatePopUp(index: number, title: string) {
    setPopUp(!popUp);
    setPopUpContent(index, title);
  }
  function addGame(game: any) {
    //send
    signUpUser.games.push(game);
    setUser(signUpUser);
    console.log(signUpUser.games);
  }
  function setPopUpContent(state: number, title: string) {
    setTitle(title);
    setIndex(state);
  }
  const newGame = useState({});
  return (
    <>
      <Head>
        <title>My Profile</title>
        <meta name="description" content="Game Trading to a digital level" />
      </Head>
      <Navigation />

      <div className="content">
        <div className="header">
          <div className="inner-header flex"></div>

          <div className="overflow-hidden">
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
        <div className="userDesc">
          <Image priority={true} width={100} height={100} alt="" src={icon} />
          <h1>{signUpUser.username}</h1>

          <div className="ml-auto flex w-40 rounded-md border-2 border-slate-900 justify-end">
            {signUpUser.admin == false && (
              <h1
                className="cursor-pointer   p-[2px] font-[200!important] "
                onClick={() => {
                  updatePopUp(2, "Edit Account Information");
                }}
              >
                Edit Account
              </h1>
            )}
            {signUpUser.admin == true && (
              <h1
                className="cursor-pointer p-[2px] font-[200!important] "
                onClick={() => {
                  updatePopUp(2, "Edit Account Information");
                }}
              >
                Delete User
              </h1>
            )}
          </div>
        </div>
        <div className="bio overflow-hidden">
          {bio === false ? (
            <p>{signUpUser.bio}</p>
          ) : (
            <div className="flex h-[38vh] w-[99%] flex-col overflow-hidden">
              <textarea
                onChange={(e) => {
                  signUpUser.bio = e.target.value;
                  setUser(signUpUser);
                }}
                className=" mi-auto h-full w-full resize-none rounded-md  p-[1%] text-lg leading-tight text-slate-900 active:border-0"
              >
                {signUpUser.bio}
              </textarea>
              <ArrowPathIcon
                className="ml-auto mt-[1%] h-5 w-5 cursor-pointer"
                onClick={() => {
                  setBio(false);
                  //edit bio post here
                }}
              ></ArrowPathIcon>
            </div>
          )}
        </div>
        {bio === false && signUpUser.admin == false && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            onClick={() => {
              setBio(true);
            }}
            fill="#f5f5f5"
            className="editbio h-6 w-6"
          >
            <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
            <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
          </svg>
        )}

        <div className="row over mt-auto">
          <div className="rowbox">
            <h2 className="overflow-hidden">
              Games: {signUpUser.games.length}
            </h2>
            {signUpUser.admin == false && (
              <svg
                onClick={() => {
                  updatePopUp(0, "Edit Game Collection");
                }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#f5f5f5"
                className="add h-6 w-6"
              >
                <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
              </svg>
            )}
          </div>

          <div className="rowbox">
            <h2 className="overflow-hidden">
              Consoles: {signUpUser.consoles.length}
            </h2>
            {signUpUser.admin == false && (
              <svg
                onClick={() => {
                  updatePopUp(1, "Edit Console Collection");
                }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#f5f5f5"
                className="add h-6 w-6"
              >
                <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
              </svg>
            )}
          </div>

          <div className="rowbox">
            <h2>Offers: {signUpUser.offers.length}</h2>
            {signUpUser.admin == false && (
              <svg
                onClick={() => {
                  updatePopUp(3, "Edit Offers");
                }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#f5f5f5"
                className="add h-6 w-6"
              >
                <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
              </svg>
            )}
          </div>
          <Popup
            title={title}
            isOpen={popUp}
            {...props}
            onClose={() => {
              setPopUp(false);
            }}
            children={forms[index]}
          ></Popup>
        </div>
      </div>
    </>
  );
};

export default Profile;
