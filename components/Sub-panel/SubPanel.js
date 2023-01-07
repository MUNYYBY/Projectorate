import { FiHome } from "react-icons/fi";
import { AiOutlineFileDone } from "react-icons/ai";
import { RxLapTimer } from "react-icons/rx";
import ProjectTab from "./ProjectsTabs/ProjectTab";
import TabDevider from "../Devider/Devider";
import ProjectsTabContainer from "./ProjectsTabs/ProjectTabsContainer";

export default function SubPanel() {
  return (
    <div className="Sub-panel-dahboard ml-20 w-72 h-screen bg-gray-800">
      <div className="bg-gray-700 p-4 rounded-b-xl">
        <h1 className=" font-semibold mb-2">Projects Panel</h1>
        <input
          className="h-8 w-full bg-gray-900 rounded-sm text-xs border-black px-3"
          placeholder="Search from all the projects..."
          type="text"
        />
      </div>
      <div className="sub-panels-tabs flex flex-col my-3">
        <ProjectTab icon={<FiHome size={20} />} title="Project Home" />
        <ProjectTab icon={<AiOutlineFileDone size={20} />} title="Completed" />
        <ProjectTab icon={<RxLapTimer size={20} />} title="In-progress" />
      </div>
      <div className="px-2 mx-4 mb-4">
        <TabDevider width="w-full" />
      </div>
      <div className="Projects-tab-container">
        <ProjectsTabContainer CompanyName="Image Converter" />
        <ProjectsTabContainer CompanyName="Image Converter" />
        <ProjectsTabContainer CompanyName="Image Converter" />
        <ProjectsTabContainer CompanyName="Image Converter" />
        <ProjectsTabContainer CompanyName="Image Converter" />
        <ProjectsTabContainer CompanyName="Image Converter" />
        <ProjectsTabContainer CompanyName="Image Converter" />
        <ProjectsTabContainer CompanyName="Image Converter" />
        <ProjectsTabContainer CompanyName="Image Converter" />
      </div>
    </div>
  );
}
