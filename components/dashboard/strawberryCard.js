import React from "react";
import { GiStrawberry } from "react-icons/gi";

export default function strawberryCard() {
  return (
    <div className="card shadow-lg bg-base-100">
      <div className="card-body space-y-4">
        <div className="card-title flex justify-between">
          <div className="flex items-center">
            <GiStrawberry className="w-6 h-6 mr-2" /> Strawberry{" "}
          </div>
          <button class="btn btn-sm btn-ghost">refresh</button>
        </div>
        <div className="alert flex justify-between items-center">
          <div>New Offers</div>
          <div className="badge badge-primary badge-outline">12</div>
        </div>
        <div className="flex bg-neutral-content text-neutral rounded-box h-full px-3 items-center cursor-pointer">
          <GiStrawberry />
          <GiStrawberry />
          <GiStrawberry />
        </div>
      </div>
    </div>
  );
}
