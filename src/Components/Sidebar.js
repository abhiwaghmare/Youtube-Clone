import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const SidebarList = ["Home", "Shorts", "Subscription", "Youtube Music"];

  if (!isMenuOpen) return null;

  return (
    <div className="min-w-60 bg-gray-100 p-2 h-auto">
      <ul>
        {SidebarList.map((item, index) => (
          <li className="px-3 py-2 font-semibold font-mono-" key={index}>
            {item === "Home" ? <Link to="/">Home</Link> : item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
