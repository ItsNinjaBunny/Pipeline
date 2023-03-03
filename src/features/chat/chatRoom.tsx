import {
  ChevronUpIcon as ArrowUpIcon,
  ChatBubbleBottomCenterTextIcon,
  PaperAirplaneIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";

const ChatRoom = () => {
  const [openChats, setOpenChats] = useState(true);
  const [value, setValue] = useState("");

  const handleInputChange = (event: any) => {
    setValue(event.target.value);
    console.log("value - ");
    if (event.target.value.trim().valueOf() === "" || !event.target.value) {
      event.target.style.height = "";
    }
    event.target.style.height = event.target.scrollHeight + "px";

    var scroll = document.getElementById("input");

    if (scroll !== null) {
      scroll.scrollTop = scroll.scrollHeight;
    }
  };
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const message = (
  //       <div className=" flex h-auto  w-full flex-row overflow-hidden">
  //         <div className="relative mx-2 my-2 ml-auto flex max-w-xs flex-col rounded-lg bg-slate-700 py-2 px-4 text-sm leading-5 text-white">
  //           <p>Hi there! Nice to meet you.</p>
  //         </div>
  //       </div>
  //     );

  //     setChatMessages((prev) => [...prev, message]);
  //     var scroll = document.getElementById("messages_chat");
  //     if (scroll !== null) {
  //       scroll.scrollTop = scroll.scrollHeight;
  //     }
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);

  const updateHeight = () => {};
  const [ChatMessages, setChatMessages] = useState<any[]>([]);
  const getAllMessages = () => {
    return "";
  };
  return (
    <div
      className={`${
        openChats === true && "h-[60%!important]"
      } smooth absolute  right-[30%] bottom-0 z-[9999] h-[6%] w-[25%] overflow-hidden rounded-md bg-slate-300 ease-in-out`}
    >
      <h1
        onClick={() => {
          setOpenChats(!openChats);
        }}
        className="flex cursor-pointer  flex-row border-b-2 border-b-slate-900 p-[3%]"
      >
        XxTrenchxX
        <ChatBubbleBottomCenterTextIcon className="ml-1  w-5" />
        {openChats === true ? (
          <ArrowUpIcon
            className={`smooth ml-auto h-5 rotate-180 cursor-pointer`}
          ></ArrowUpIcon>
        ) : (
          <XMarkIcon className="ml-auto h-5 "></XMarkIcon>
        )}
      </h1>

      <div className="flex h-[90%] w-full flex-col  items-end justify-end overflow-hidden ">
        <div
          id="messages_chat"
          className="flex h-[48vh] w-full self-center overflow-y-auto bg-green-700  align-middle"
        >
          <div className="mt-auto h-auto w-full  ">{ChatMessages}</div>
        </div>
        <div id="input" className="h-[14%] w-full overflow-y-auto p-[1%]">
          <textarea
            className="relative float-left mt-1  h-[5vh] w-3/4 resize-none overflow-hidden rounded-md p-[2%]  font-normal leading-5 tracking-wide"
            value={value}
            onChange={handleInputChange}
          />
          <PaperAirplaneIcon className=" fixed left-[65%] w-10 rotate-[-45] transform" />
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
