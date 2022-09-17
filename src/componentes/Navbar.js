import React from "react";
import { ReactComponent as LogoME } from "../svg/MELogo.svg";
import { BiTask } from "react-icons/bi";
import { IconContext } from "react-icons";
export default function Navbar() {
  return (
    <IconContext.Provider value={{ size: "25px" }}>
      <div className="mt-2 mx-5">
        <nav className="nav">
          <a href="/">
            <LogoME className="brand" />
          </a>
          <ul>
            <li>
              <a href="#Projects">
                <BiTask />
                Projects
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </IconContext.Provider>
  );
}
