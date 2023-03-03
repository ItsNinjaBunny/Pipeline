import React from "react";

const OtherChat = (props:any) => {
  return (
    <div className="flex h-auto w-full flex-row items-start justify-start self-end  overflow-hidden">
      <div className="relative mx-2 my-2 mr-auto flex max-w-xs flex-col rounded-lg bg-white py-2 px-4 text-sm leading-5 text-white">
        <p>{props.message}</p>
      </div>
    </div>
  );
};

export default OtherChat;
