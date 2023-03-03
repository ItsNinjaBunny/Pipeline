import React from "react";

const UserChat = (props: any) => {
  return (
    <div className=" flex h-auto w-full flex-row self-end overflow-hidden">
      <div className="relative mx-2 my-2 ml-auto flex max-w-xs flex-col rounded-lg bg-slate-700 py-2 px-4 text-sm leading-5 text-white">
        <p>{props.message}</p>
      </div>
    </div>
  );
};

export default UserChat;
