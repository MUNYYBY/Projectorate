import SideBar from "../../../components/SideBar/SideBar";
import SubPanel from "../../../components/Sub-panel/SubPanel";
import { SlSocialSteam } from "react-icons/sl";
import { IoIosAdd, IoIosHelpCircle } from "react-icons/io";
import { CgInbox } from "react-icons/cg";

export default function SuperAdminDashboard({ children }) {
  return (
    <div className="Dashboard">
      <SideBar />
      <SubPanel />
      <div className="Project-panel ml-[calc(5rem+18rem)]">
        <header className="flex flex-row items-center justify-between border-b-2 border-b-gray-900 px-4 py-4">
          <div className="flex flex-row items-center">
            <div className="project-panel-icon mr-3">
              <SlSocialSteam size={32} />
            </div>
            <h1 className="text-xl font-bold">Project Panel</h1>
          </div>
          <div className="flex flex-row items-center">
            <button className="bg-secondry py-1 px-3 rounded-md flex flex-row justify-center items-center">
              <IoIosAdd size={26} />
              <p>Create Project</p>
            </button>
            <div className="help-icon px-2">
              <CgInbox size={32} />
            </div>
            <div className="inbox-icon px-2">
              <IoIosHelpCircle size={32} />
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}
