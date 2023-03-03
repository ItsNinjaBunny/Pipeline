import React, { useEffect, useState } from "react";

import {
  ChevronUpIcon as ArrowUpIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/outline";
import RoomCard from "./roomCard";

const Messages = (props: any) => {
  const [openChats, setOpenChats] = useState(false);
  // useEffect(() => {
  //   document.addEventListener("click", () => {
  //     window.alert("hello");
  //   });
  // }, []);
  return (
    <div
      id="messageTab"
      className={`${
        openChats === true && "h-[60%!important]"
      } smooth fixed right-4 bottom-0 z-[9999] h-[6%] w-[25%] overflow-hidden rounded-md bg-slate-300 ease-in-out`}
    >
      <h1 className="flex flex-row border-b-2 border-b-slate-900 p-[3%]">
        Messaging
        <ChatBubbleBottomCenterTextIcon className="ml-1 w-5" />
        <ArrowUpIcon
          onClick={() => {
            setOpenChats(!openChats);
          }}
          className={`${
            openChats === true && "rotate-180"
          } smooth ml-auto h-5 cursor-pointer`}
        />
      </h1>
      {openChats === true &&
        props.chats.map((chat: any) => <RoomCard chat={chat} />)}
    </div>
  );
};

export default Messages;
