import React from "react";
import Button from "./Button";

const ButtonContainer = () => {
  const buttonList = [
    "All",
    "JavaScript",
    "Gaming",
    "Music",
    "News",
    "Hip-Hop",
    "Cricket",
    "Recently Uploaded",
    "Watched",
  ];
  return (
    <div className="px-8 py-2 shadow-lg flex">
      {buttonList.map((button, index) => (
        <Button key={index} name={button} />
      ))}
    </div>
  );
};

export default ButtonContainer;
