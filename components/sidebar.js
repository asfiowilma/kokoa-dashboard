import React from "react";
import { NavLink } from "./navLink";
import { AiFillHome, AiFillSetting } from "react-icons/ai";
import { GiFire, GiCakeSlice, GiStrawberry } from "react-icons/gi";
import { SiGitea } from "react-icons/si";

export default function sidebar() {
  return (
    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 rounded-box shadow-lg">
      <li>
        <NavLink href="/" exact>
          <AiFillHome className="w-6 h-6 mr-2" /> Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink href="/settings" exact>
          <AiFillSetting className="w-6 h-6 mr-2" /> Settings
        </NavLink>
      </li>
      <li className="menu-title mt-4 mb-1">
        <span>Notifiers</span>
      </li>
      <li>
        <NavLink href="/skelefire" exact>
          <GiFire className="w-6 h-6 mr-2" /> Skelefire
        </NavLink>
      </li>
      <li>
        <NavLink href="/strawberry" exact>
          <GiStrawberry className="w-6 h-6 mr-2" /> Strawberry
        </NavLink>
      </li>
      <li>
        <NavLink href="/matcha" exact>
          <SiGitea className="w-6 h-6 mr-2" /> Matcha
        </NavLink>
      </li>
      <li className="menu-title mt-4 mb-1">
        <span>Apps</span>
      </li>
      <li>
        <NavLink href="/tiramisu" exact>
          <GiCakeSlice className="w-6 h-6 mr-2" />
          Tiramisu
        </NavLink>
      </li>
    </ul>
  );
}
