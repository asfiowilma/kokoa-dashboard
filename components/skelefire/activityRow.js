import React from "react";
import { VscMailRead } from "react-icons/vsc";

export default function activityRow() {
  return (
    <tr>
      <td>
        <input type="checkbox" class="checkbox checkbox-sm" />
      </td>
      <td>
        <div class="badge badge-accent">DAA</div>
      </td>
      <td className="max-w-prose truncate text-left">
        Lollipop caramels icing jelly sesame snaps liquorice gummies jelly-o candy canes. Ice cream
        toffee sweet cupcake bonbon bear claw dragée sesame snaps pudding. Bear claw jelly beans
        marzipan cotton candy cookie chupa chups pie soufflé. Wafer jelly beans toffee gummi bears
        macaroon toffee.
      </td>
      <td>1 day ago</td>
      <td>
        <button class="btn btn-sm btn-ghost">
          <VscMailRead />
        </button>
      </td>
    </tr>
  );
}
