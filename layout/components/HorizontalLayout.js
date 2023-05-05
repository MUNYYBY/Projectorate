import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import SubPanel from "../../components/Sub-panel/SubPanel";

export default function HorizontalLayout({ children }) {
  return (
    <div
      className="app-layout Dashboard w-full min-h-[100vh]"
      style={{ backgroundColor: "#2c2e33" }}
    >
      <SideBar />
      <div className="sidepanel md:visible invisible">
        <SubPanel />
      </div>

      <div className="md:ml-[20.5rem] ml-[4.5rem]">{children}</div>
    </div>
  );
}
