import React from "react";
import { GiFire } from "react-icons/gi";
import { VscMailRead } from "react-icons/vsc";

export default function skelefireCard({ matkul }) {
  return (
    <div className="card bg-base-100 shadow-lg md:col-span-2 row-span-2">
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
        <div class="overflow-x-auto overflow-auto max-h-80 scrollbar scrollbar-hidden hover:scrollbar-width-1 hover:scrollbar-track-transparent hover:scrollbar-thumb-yellow-600 hover:scrollbar-track-radius-full pr-1.5">
          <table class="table table-compact w-full">
            <thead>
              <tr>
                <th>
                  <input type="checkbox" class="checkbox checkbox-xs" />
                </th>
                <th>Course</th>
                <th>Activity Name</th>
                <th>Last Update</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" class="checkbox checkbox-xs" />
                </td>
                <td>
                  <div class="badge badge-accent">DAA</div>
                </td>
                <td className="max-w-snippet truncate">
                  Lollipop caramels icing jelly sesame snaps liquorice gummies jelly-o candy canes.
                  Ice cream toffee sweet cupcake bonbon bear claw dragée sesame snaps pudding. Bear
                  claw jelly beans marzipan cotton candy cookie chupa chups pie soufflé. Wafer jelly
                  beans toffee gummi bears macaroon toffee.
                </td>
                <td>1 day ago</td>
                <td>
                  <button class="btn btn-sm btn-ghost">
                    <VscMailRead />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}