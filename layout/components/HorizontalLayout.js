import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import SubPanel from "../../components/Sub-panel/SubPanel";

export default function HorizontalLayout({ children }) {
  return (
    <div
      className="app-layout Dashboard w-full h-full absolute z-10"
      style={{ backgroundColor: "#2c2e33" }}
    >
      <SideBar />
      <SubPanel />
      <div className="ml-[calc(4.5rem+16rem)]">{children}</div>
    </div>
  );
}
