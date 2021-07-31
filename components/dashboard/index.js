import React from "react";

import SettingsCard from "./settingsCard"
import SkelefireCard from "./skelefireCard" 
import StrawberryCard from "./strawberryCard" 
import MatchaCard from "./matchaCard" 
import TiramisuCard from "./tiramisuCard" 

export default function dashboard() {
  const matkul = ["Gamedev", "Gamedev", "Gamedev", "Gamedev", "Gamedev", "Gamedev"];
  return (
    <div className="w-full grid grid-flow-row-dense grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 grid-rows-3">
      <SettingsCard />
      <SkelefireCard {...{matkul}}/>
      <StrawberryCard />
      <MatchaCard {...{matkul}}/>
      <TiramisuCard />
    </div>
  );
}
