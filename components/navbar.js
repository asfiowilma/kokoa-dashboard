import React from "react";
import { IoNotificationsOutline } from "react-icons/io5";

export default function navbar({ sidebarLabel }) {
  return (
    <div className="navbar w-full mb-4 px-0 lg:px-4 shadow-lg bg-base-100 text-base-content rounded-box shadow-lg">
      <div className="flex-none flex lg:hidden drawer-button">
        <label for={sidebarLabel} className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
      <div className="navbar-center flex-1 mx-1 invisible sm:visible">
        <img src="/kokoa-logo.png" alt="kokoa" className="h-10 w-10 mr-2" />
        <span className="text-lg font-bold">Kokoa</span>
      </div>
      <div className="flex-none ">
        <button className="btn btn-square btn-ghost">
          <IoNotificationsOutline className="inline-block w-6 h-6 stroke-current" />
        </button>
      </div>
      <div className="flex-none">
        <div className="avatar">
          <div className="rounded-full w-10 h-10 m-1">
            <img src={process.env.BACKEND_URL + "/avatar.png"} />
          </div>
        </div>
      </div>
    </div>
  );
}
