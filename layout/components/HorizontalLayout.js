import React, { useState } from "react";
import SideBar from "../../components/SideBar/SideBar";
import SubPanel from "../../components/Sub-panel/SubPanel";

export default function HorizontalLayout({ children }) {
  const [isNavActive, setIsNavActive] = useState(true);
  return (
    <div
      className="app-layout Dashboard w-full min-h-[100vh]"
      style={{ backgroundColor: "#2c2e33" }}
    >
      <div className="absolute left-0 top-0 z-50">
        {isNavActive ? (
          <div className="nav-full relative flex flex-row">
            <SideBar />
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="sidepanel md:visible invisible">
        <SubPanel />
      </div>

      <div className="md:ml-[20.5rem] ml-[4.5rem]">{children}</div>
    </div>
  );
}
