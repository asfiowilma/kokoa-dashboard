import React from "react";

import { GiFire } from "react-icons/gi";
import ActivityTable from "./activityTable"

export default function skelefire() {
  const matkul = ["All", "Gamedev", "Gamedev", "Gamedev", "Gamedev", "Gamedev"];
  return (
    <div className="w-full flex flex-col space-y-4 h-full">
      <div className="grid grid-cols-2 grid-rows-3 md:grid-cols-6 md:grid-rows-none gap-4">
        {matkul.map((a) => (
          <a className="btn bg-accent text-accent-content rounded-box">{a}</a>
        ))}
      </div>
      <div className="flex-1 card bg-base-100 shadow-lg w-full">
        <div className="card-body flex flex-col gap-3">
          <div className="card-title flex justify-between">
            <div className="flex items-center">
              <GiFire className="w-6 h-6 mr-2" /> Skelefire{" "}
            </div>
            <div>
              <div class="dropdown dropdown-end dropdown-hover">
                <div tabindex="0" class="m-1 btn btn-sm btn-ghost">
                  Actions
                </div>
                <ul class="shadow menu dropdown-content bg-primary text-primary-content rounded-box w-52 text-base">
                  <li>
                    <a>Mark selected as read</a>
                  </li>
                  <li>
                    <a>Mark all as read</a>
                  </li>
                </ul>
              </div>

              <button class="btn btn-sm btn-ghost">refresh</button>
            </div>
          </div>
          <div class="tabs">
            {matkul.map((a, i) => (
              <a class={`indicator tab tab-lifted ${i === 0 && "tab-active"}`}>
                {a} <div class="indicator-item badge">8</div>
              </a>
            ))}
            <div class="flex-1 tab tab-lifted cursor-default"></div>
          </div>
          <ActivityTable {...{matkul}}/>
        </div>
      </div>
    </div>
  );
}
