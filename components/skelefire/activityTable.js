import React, { useContext } from "react";

import ActivityRow from "./activityRow";
import { SkelefireContext } from "@context/SkelefireContext";

export default function activityTable() {
  const { skelefire } = useContext(SkelefireContext);

  return (
    <div className="overflow-auto max-h-80 scrollbar scrollbar-hidden hover:scrollbar-width-1 hover:scrollbar-track-transparent hover:scrollbar-thumb-yellow-600 hover:scrollbar-track-radius-full pr-1.5">
      <table className="table table-compact w-full text-center relative">
        <thead className="sticky top-0 z-20">
          <tr>
            <th>
              <input type="checkbox" className="checkbox checkbox-sm" />
            </th>
            <th>Course</th>
            <th className="text-left">Activity Name</th>
            <th>Last Update</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {skelefire.activities.map((a) => (
            <ActivityRow />
          ))}
        </tbody>
      </table>
    </div>
  );
}
