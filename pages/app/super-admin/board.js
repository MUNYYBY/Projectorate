import React from "react";
import { CgInbox } from "react-icons/cg";
import { IoIosHelpCircle } from "react-icons/io";
import { HiOutlineViewBoards } from "react-icons/hi";

export default function board() {
  return (
    <>
      <div className="board">
        <header className="flex flex-row items-center justify-between border-b-2 border-b-gray-900 px-4 py-2 relative">
          <div className="flex flex-row items-center">
            <div className="teams-panel-icon mr-3">
              <HiOutlineViewBoards size={26} />
            </div>
            <h1 className="text-lg font-bold">Board Panel</h1>
          </div>
          <div className="flex flex-row items-center">
            <div className="help-icon px-2">
              <CgInbox size={24} />
            </div>
            <div className="inbox-icon px-2">
              <IoIosHelpCircle size={26} />
            </div>
          </div>
        </header>
      </div>
    </>
  );
}
