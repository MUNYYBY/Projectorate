import { useState, useEffect } from "react";
import Link from "next/link";
import { FiHome } from "react-icons/fi";
import { AiOutlineFileDone } from "react-icons/ai";
import { RxLapTimer } from "react-icons/rx";
import ProjectTab from "./ProjectsTabs/ProjectTab";
import TabDevider from "../Devider/Devider";
import ProjectsTabContainer from "./ProjectsTabs/ProjectTabsContainer";
import { useRouteCheck } from "../../context/routesContext";

export default function SubPanel() {
  const { route } = useRouteCheck();
  const [panelName, setPanelName] = useState("");

  useEffect(() => {
    if (route?.includes("projects")) setPanelName("Projects");
    else if (route?.includes("employees")) setPanelName("Employees");
    else if (route?.includes("teams")) setPanelName("Teams");
    else setPanelName("Home");
  }, [route]);
  return (
    <div className="Sub-panel-dahboard fixed ml-[4.5rem] w-64 h-screen bg-gray-800">
      <div className="bg-gray-700 p-4 rounded-b-xl">
        <h1 className=" font-semibold mb-2">{panelName} Panel</h1>
        <input
          className="h-8 w-full bg-gray-900 rounded-sm text-xs border-black px-3"
          placeholder="Search from all the projects..."
          type="text"
        />
      </div>
      {/* fix inner div to scroll */}
      <div className="">
        <div className="sub-panels-tabs flex flex-col my-3">
          <ProjectTab icon={<FiHome size={16} />} title="Project Home" />
          <ProjectTab
            icon={<AiOutlineFileDone size={16} />}
            title="Completed"
          />
          <ProjectTab icon={<RxLapTimer size={16} />} title="In-progress" />
        </div>
        <div className="px-2 mx-4 mb-4">
          <TabDevider width="w-full" />
        </div>
        <div className="Projects-tab-container">
          <ProjectsTabContainer CompanyName="Maverik Corp" />
          <ProjectsTabContainer CompanyName="Subvision LTD" />
          <ProjectsTabContainer CompanyName="Vyro.ai" />
          <ProjectsTabContainer CompanyName="Always Remembered" />
          <ProjectsTabContainer CompanyName="Farevet" />
        </div>
      </div>
    </div>
  );
}
