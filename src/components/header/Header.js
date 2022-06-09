import React from "react";
import "./header.css";

const Header = () => {
  return (
    <>
      <div className="header-container">
        <div className="header">
          <div className="header-logo">
            Xpensr <i className="fa-solid fa-calendar"></i>
          </div>
          <div className="header-button">
            <a
              href="https://github.com/nishankadel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github"></i>Star
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
