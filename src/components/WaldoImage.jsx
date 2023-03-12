import React from "react";
import first from "../assets/1.png";
import second from "../assets/2.jpg";

const logCoords = (e) => {
  const bounds = e.target.getBoundingClientRect();
  const x = Math.round(e.clientX - bounds.left);
  const y = e.clientY - bounds.top;

  console.log({ x, y });
};

function WaldoImage() {
  return (
    <div className="container-lg text-center">
      <img onClick={logCoords} src={second} alt="" className="w-4/5 m-auto" />
    </div>
  );
}

export default WaldoImage;
