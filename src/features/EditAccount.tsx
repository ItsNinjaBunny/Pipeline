import {
  UserCircleIcon,
  LockClosedIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";

const EditAccount = (props: any) => {
  const [name, setName] = useState<string>(props.user.name);
  const [oldPassword, setOldPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [email, setEmail] = useState<string>(props.user.email);
  const [username, setUsername] = useState(props.user.username);
  async function checkValues() {
    props.user.name = name;
    props.user.email = email;
    const apiCall = true;
    //if true updates otherwise return false
    if (apiCall) {
      //check api call
      //if password is given update it and chekc otherwise just update basic info
      window.alert("information has been updated");
      props.setUser(props.user);
    } else {
      window.alert("password is not valid nothing was updated");
    }
  }

  return (
    <div className="relative top-[-5vh] flex h-full w-[90%] scale-90 flex-col self-center ">
      <div className="input-box mi-auto mt-5 h-[auto!important] ">
        <UserCircleIcon className="float-left h-8 w-8" />
        <input
          className="input float-left  "
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => {
            e.stopPropagation();
            e.preventDefault();
            setName(e.target.value);
          }}
        ></input>
      </div>
      <div className="input-box mi-auto mt-5 h-[auto!important] ">
        <UserCircleIcon className="float-left h-8 w-8" />
        <input
          className="input float-left  "
          type="text"
          placeholder="Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
      </div>
      <div className="input-box mi-auto overflow-visible">
        <EnvelopeIcon className="float-left h-8 w-8"></EnvelopeIcon>
        <input
          className="input float-left  "
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
      </div>
      <div className="input-box mi-auto overflow-visible">
        <LockClosedIcon className="float-left h-8 w-8" />
        <input
          className="input float-left  "
          type="password"
          placeholder="Old Password"
          onChange={(e) => setOldPassword(e.target.value)}
        ></input>
      </div>
      <div className="input-box mi-auto overflow-visible">
        <LockClosedIcon className="float-left h-8 w-8" />
        <input
          className="input float-left  "
          type="password"
          placeholder="New Password"
          onChange={(e) => setNewPassword(e.target.value)}
        ></input>
      </div>
      <button
        className="login-button h-auto "
        onClick={(e) => {
          e.stopPropagation();

          e.preventDefault();
          checkValues();
        }}
      >
        Save
      </button>
    </div>
  );
};

export default EditAccount;
