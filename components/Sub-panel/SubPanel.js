import { useState, useEffect } from "react";
import Link from "next/link";
import { FiHome } from "react-icons/fi";
import { AiOutlineFileDone } from "react-icons/ai";
import { RxLapTimer } from "react-icons/rx";
import ProjectTab from "./ProjectsTabs/ProjectTab";
import TabDevider from "../Devider/Devider";
import ProjectsTabContainer from "./ProjectsTabs/ProjectTabsContainer";
import { useRouter } from "next/router";
import { getAllProjects } from "../../client/requests";

export default function SubPanel() {
  const router = useRouter();
  const [panelName, setPanelName] = useState("");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (router.asPath?.includes("projects")) setPanelName("Projects");
    else if (router.asPath?.includes("employees")) setPanelName("Employees");
    else if (router.asPath?.includes("teams")) setPanelName("Teams");
    else if (router.asPath?.includes("board")) setPanelName("Board");
    else setPanelName("Home");
  }, [router.asPath]);

  //** Get All the projects in CSR */
  const fetchAllProjects = async () => {
    await getAllProjects().then((res) => {
      console.log("Projects:", res);
      if (res) {
        setProjects(res.data);
      }
    });
  };

  //** When a new project has been added refresh all the projects */
  useEffect(() => {
    fetchAllProjects();
  }, []);

  function handleProjectNav(projectName, projectId) {
    router.replace({
      pathname: "/app/u/projects",
      query: {
        projectId: projectId,
        projectName: projectName,
      },
      shallow: true,
    });
  }
  return (
    <div className="Sub-panel-dahboard fixed ml-[4.5rem] w-64 h-screen bg-gray-800">
      <div className="bg-gray-700 p-4 rounded-b-xl">
        <h1 className="text-xl font-semibold">{panelName} Panel</h1>
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
          {projects.map((project, index) => {
            return (
              <div
                key={project.id + index}
                onClick={() =>
                  handleProjectNav(project.project_name, project.id)
                }
              >
                <ProjectsTabContainer
                  projectId={project.id}
                  CompanyName={project.project_name}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
