import React, { useState } from "react";
import GameCard from "./GameCard";

const SendTrade = (props: any) => {
  const [selectedConsoles, setSelectedConsoles] = useState<any>([]);
  function deleteOffer(id: any) {
    document.getElementById("offer-" + id)?.remove();
    //send del request for this offer here
  }

  const [inputValue, setInputValue] = useState<string>("");
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const consoles = [
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
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setShowDropdown(true);
    if (e.target.value === "") {
      setShowDropdown(false);
    }
  };

  const handleSelect = (console: any) => {
    setSelectedConsoles([console, ...selectedConsoles]);
    setInputValue("");
    setShowDropdown(false);
  };

  const filteredConsoles = consoles.filter(
    (console: any) =>
      !selectedConsoles.some(
        (selectedConsole: any) => selectedConsole.id === console.id
      ) && console.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  const handleRemove = (console: any) => {
    setSelectedConsoles(
      selectedConsoles.filter((c: any) => c.id !== console.id)
    );
  };

  return (
    <div className="flex h-full w-full flex-col  items-center ">
      <div className="dropdown-container relative top-[5%] mt-0 ">
        <div className="selected-container  rounded-md  ">
          <input
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Search Your Game Collection"
            className="input-field "
          />
          {showDropdown && (
            <ul className="dropdown-list top-[14%] rounded-b-md ">
              {filteredConsoles.map((console: any) => (
                <li
                  className="smooth"
                  key={console}
                  onClick={() => handleSelect(console)}
                >
                  {console.name} - {console.platform} - {console.year}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="relative  left-[-45%] flex h-[45vh] w-[80vw] flex-row items-start justify-items-start   ">
          {selectedConsoles.map((console: any) => (
            <GameCard
              className="mt-3  mr-3 ml-0 h-[40vh] w-[18vw] overflow-hidden border-none "
              profile={false}
              offer={true}
              handleRemove={handleRemove}
              game={console}
            ></GameCard>
          ))}
        </div>
      </div>
      <button
        type="button"
        className="login-button mi-auto mt-auto h-auto rounded-md  "
        onClick={() => {
          console.log({
            games: selectedConsoles.map((obj: { id: any }) => obj.id),

          });
          props.setPopUp(false);
        }}
      >
        Send Offer
      </button>
    </div>
  );
};

export default SendTrade;
