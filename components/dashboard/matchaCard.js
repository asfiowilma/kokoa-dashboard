import React from "react";
import { SiGitea } from "react-icons/si";

export default function matchaCard({ matkul }) {
  return (
    <div className="card shadow-lg bg-base-100">
      <div className="card-body">
        <div className="card-title flex justify-between">
          <div className="flex items-center">
            <SiGitea className="w-6 h-6 mr-2" /> Matcha
          </div>
          <button class="btn btn-sm btn-ghost">refresh</button>
        </div>
        <div className="card bordered max-h-28 overflow-y-auto scrollbar scrollbar-hidden">
          <table className="table table-compact w-full text-center">
            <tbody>
              {matkul.map((a, i) => (
                <tr>
                  <td>{a}</td>
                  <td>
                    {i === 2 ? (
                      <div className="badge badge-secondary badge-sm">not published</div>
                    ) : (
                      "101.92"
                    )}
                  </td>
                  <td>
                    {i === 2 ? <div className="badge badge-accent badge-sm">empty</div> : "A"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
