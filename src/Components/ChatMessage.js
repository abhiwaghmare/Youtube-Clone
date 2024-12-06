import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex mx-1 my-2 p-2 bg-slate-200 gap-2 rounded-lg">
      <img
        className="h-5 w-5 rounded-full"
        alt="profile"
        src="https://cdn.vectorstock.com/i/500p/53/42/user-member-avatar-face-profile-icon-vector-22965342.jpg"
        width="40px"
        height="40px"
      ></img>
      <p className="font-bold">{name}</p>
      <p>{message}</p>
    </div>
  );
};

export default ChatMessage;
