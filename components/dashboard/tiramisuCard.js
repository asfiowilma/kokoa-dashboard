import React from 'react'
import { GiCakeSlice} from "react-icons/gi";

export default function tiramisuCard() {
  return (
    <div className="card shadow-lg bg-base-100">
        <div className="card-body">
          <div className="card-title flex justify-between">
            <div className="flex items-center">
              <GiCakeSlice className="w-6 h-6 mr-2" /> Tiramisu
            </div>
          </div>
        </div>
      </div>
  )
}
