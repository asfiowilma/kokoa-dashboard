import React from "react";

import ActivityRow from "./activityRow";

export default function activityTable({ matkul }) {
  const activities = [1, 2, 3, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
  return (
    <div class="overflow-auto max-h-80 scrollbar scrollbar-hidden hover:scrollbar-width-1 hover:scrollbar-track-transparent hover:scrollbar-thumb-yellow-600 hover:scrollbar-track-radius-full pr-1.5">
      <table class="table table-compact w-full text-center relative">
        <thead className="sticky top-0 z-20">
          <tr>
            <th>
              <input type="checkbox" class="checkbox checkbox-xs" />
            </th>
            <th>Course</th>
            <th className="text-left">Activity Name</th>
            <th>Last Update</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {activities.map((a) => (
            <ActivityRow />
          ))}
        </tbody>
      </table>
    </div>
  );
}
