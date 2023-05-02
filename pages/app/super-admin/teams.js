import { Tooltip } from "antd";
import React from "react";
import { CgInbox } from "react-icons/cg";
import { IoIosAdd, IoIosHelpCircle } from "react-icons/io";
import { SlSocialSteam } from "react-icons/sl";
import SearchModule from "../../../components/Search/SearchModule";

export default function teams() {
  return (
    <div className="teams">
      <header className="flex flex-row items-center justify-between border-b-2 border-b-gray-900 px-4 py-2">
        <div className="flex flex-row items-center">
          <div className="teams-panel-icon mr-3">
            <SlSocialSteam size={26} />
          </div>
          <h1 className="text-lg font-bold">Teams Panel</h1>
        </div>
        <div className="flex flex-row items-center">
          <Tooltip
            placement="bottom"
            title="Create a new project in your company and add a workforce"
            mouseEnterDelay={0.05}
          >
            <button className="bg-secondry mr-2 py-1 px-3 rounded-md flex flex-row justify-center items-center">
              <IoIosAdd size={26} />
              <p>Create Team</p>
            </button>
          </Tooltip>
          <div className="help-icon px-2">
            <CgInbox size={24} />
          </div>
          <div className="inbox-icon px-2">
            <IoIosHelpCircle size={26} />
          </div>
        </div>
      </header>
      <div className="Search-Teams-section px-4 my-4">
        <SearchModule
          title="SEARCH TEAMS"
          type="Teams"
          description="Take a dive in to the teams and its attributes. Find anything you are looking for in this team"
        />
      </div>
    </div>
  );
}
