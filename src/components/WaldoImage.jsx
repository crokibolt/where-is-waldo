import React, { useState } from "react";
import first from "../assets/1.png";
import second from "../assets/2.jpg";
import third from "../assets/3.jpg";
import fourth from "../assets/4.jpg";
import Dropdown from "./Dropdown";

function WaldoImage() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  const toggleDropdown = () => {
    setShowDropdown((prevState) => !prevState);
  };

  const getCoords = (e) => {
    const bounds = e.target.getBoundingClientRect();
    const x = e.clientX;
    const y = e.clientY;
    const clickX = Math.round(x - bounds.left);
    const clickY = y - bounds.top;
    return { x, y, clickX, clickY };
  };

  const handleClick = (e) => {
    setCoordinates(getCoords(e));
    toggleDropdown();
  };

  return (
    <div className="container-lg text-center">
      <img onClick={handleClick} src={first} alt="" className="w-4/5 mx-auto" />
      {showDropdown && (
        <Dropdown
          list={["Waldo"]}
          coordinates={coordinates}
          toggleDropdown={toggleDropdown}
          handleWin={() => {}}
          checkCharacter={() => {}}
        />
      )}
    </div>
  );
}

export default WaldoImage;
