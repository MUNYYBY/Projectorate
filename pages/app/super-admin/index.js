import SideBar from "../../../components/SideBar/SideBar";
import SubPanel from "../../../components/Sub-panel/SubPanel";
import SearchModule from "../../../components/Search/SearchModule";
import TabDevider from "../../../components/Devider/Devider";
import { SlSocialSteam } from "react-icons/sl";
import { IoIosAdd, IoIosHelpCircle } from "react-icons/io";
import { CgInbox } from "react-icons/cg";
import { Tooltip } from "antd";

export default function SuperAdminDashboard({ children }) {
  return (
    <div className="Dashboard">
      <SideBar />
      <SubPanel />
      <div className="Project-panel ml-[calc(5rem+18rem)]">
        <header className="flex flex-row items-center justify-between border-b-2 border-b-gray-900 px-4 py-4">
          <div className="flex flex-row items-center">
            <div className="project-panel-icon mr-3">
              <SlSocialSteam size={30} />
            </div>
            <h1 className="text-lg font-bold">Project Panel</h1>
          </div>
          <div className="flex flex-row items-center">
            <Tooltip
              placement="bottom"
              title="Create a new project in your company and add a workforce"
              mouseEnterDelay={0.05}
            >
              <button className="bg-secondry py-1 px-3 rounded-md flex flex-row justify-center items-center">
                <IoIosAdd size={26} />
                <p>Create Project</p>
              </button>
            </Tooltip>
            <div className="help-icon px-2">
              <CgInbox size={28} />
            </div>
            <div className="inbox-icon px-2">
              <IoIosHelpCircle size={30} />
            </div>
          </div>
        </header>
        <div className="Search-projects-section px-4 my-4">
          <SearchModule
            title="Search Projects"
            description="Take a dive in to the project and its attributes. Find anything you are looking for in this project"
          />
        </div>
        <TabDevider color="bg-gray-900" width="w-full" opacity="opacity-1" />
      </div>
    </div>
  );
}
