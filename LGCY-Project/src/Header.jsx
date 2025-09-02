import React from "react";
import { useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const hambToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="homeHeader">
      <div className="logo">
        <img
          src="../public/images/LGCY-Power-Primary-Logo-White.png"
          alt="LGCY Logo"
          height={80}
          width={"auto"}
        />
      </div>
      <button
        className={`hambBtn${isOpen ? " open" : ""}`}
        onClick={hambToggle}
      ></button>
      <nav className={isOpen ? "open" : ""}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
