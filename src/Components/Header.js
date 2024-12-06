import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";

const Header = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  const toggleSidebar = () => {
    dispatch(toggleMenu());
  };

  const getSuggestions = async () => {
    const response = await fetch(
      "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" +
        searchKeyword
    );
    const jsonData = await response.json();
    setSuggestions(jsonData[1]);
  };

  const clearSearch = () => {
    const searchInput = document.querySelector("input");
    searchInput.value = "";
    setSearchKeyword("");
    setShowSuggestions(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      getSuggestions();
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchKeyword]);

  const handleOnblur = () => {
    setTimeout(() => {
      setShowSuggestions(false);
    }, 200);
  };

  return (
    <div className="grid grid-flow-col p-4 shadow-lg  ">
      <div className="flex col-span-1 items-center">
        <img
          alt="hamburger"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/800px-Hamburger_icon.svg.png"
          width="30px"
          height="30px"
          className="h-7 w-7"
          onClick={() => toggleSidebar()}
        ></img>
        <Link to="/">
          <img
            className="px-2 ml-3 h-18 w-25"
            alt="logo"
            src="https://cdn.worldvectorlogo.com/logos/youtube-6.svg"
            height="60px"
            width="100px"
          ></img>
        </Link>
      </div>

      <div className="col-span-10 ml-60">
        <div className="flex">
          <input
            type="text"
            placeholder="Search"
            className="py-2 px-4 border-2 border-gray-400 rounded-l-full h-10 w-96 align-middle"
            onChange={(e) => setSearchKeyword(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => handleOnblur()}
          />
          {searchKeyword && (
            <img
              style={{
                cursor: "pointer",
                position: "absolute",
                marginLeft: "354px",
                marginTop: "11px",
              }}
              alt="cancel"
              className="w-5 h-5 hover:bg-gray-200 rounded-full"
              src="https://www.svgrepo.com/show/80301/cross.svg"
              width="16px"
              height="16px"
              onClick={() => clearSearch()}
            ></img>
          )}
          <button className="flex py-2 px-3 radius border-2 border-gray-400 rounded-r-full h-10 align-middle border-l-0">
            <img
              alt="search"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png"
              width="20px"
              height="20px"
            ></img>
          </button>
        </div>
        <div>
          {showSuggestions && (
            <div className="bg-white p-2 m-2 absolute w-[24rem] shadow-lg rounded-sm">
              <ul>
                {suggestions &&
                  suggestions.map((suggestion) => (
                    <li key={suggestion}>
                      <Link
                        className="flex gap-2 px-2 py-1 hover:bg-gray-200 cursor-pointer"
                        key={suggestion}
                        to={
                          "/results?search_query=" +
                          suggestion.replaceAll(" ", "+")
                        }
                      >
                        <img
                          alt="search"
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png"
                          width="20px"
                          height="10px"
                          className="h-5 w-5"
                        ></img>
                        {suggestion}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="col-span-1">
        <img
          alt="profile"
          src="https://cdn.vectorstock.com/i/500p/53/42/user-member-avatar-face-profile-icon-vector-22965342.jpg"
          width="40px"
          height="40px"
        ></img>
      </div>
    </div>
  );
};

export default Header;
