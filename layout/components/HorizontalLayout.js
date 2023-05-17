import React, { useState, useEffect } from "react";
import SideBar from "../../components/SideBar/SideBar";
import SubPanel from "../../components/Sub-panel/SubPanel";

export default function HorizontalLayout({
  children,
  isNavActive,
  setIsNavActive,
}) {
  const [isLgWidth, setIsLgWidth] = useState(true);

  //** Screen size dynamic */
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    if (windowSize[0] >= 768) {
      setIsLgWidth(true);
      setIsNavActive(true);
    } else {
      setIsLgWidth(false);
    }
  }, [windowSize[0]]);
  return (
    <>
      {isLgWidth ? (
        <></>
      ) : (
        <div className="navbar-actions">
          <button
            className={`fixed bottom-3 z-50 ${
              isNavActive ? "left-20" : "left-3"
            } bg-gray-900 rounded-md py-2 px-4 font-normal text-sm text-white shadow-secondry shadow-2xl`}
            onClick={() => setIsNavActive(!isNavActive)}
          >
            {isNavActive ? "Collapse Navbar" : "Open Navbar"}
          </button>
        </div>
      )}
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

        <div className={`md:ml-[20.5rem]`}>{children}</div>
      </div>
    </>
  );
}
