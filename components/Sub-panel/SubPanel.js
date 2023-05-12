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
import { Empty } from "antd";

export default function SubPanel() {
  const router = useRouter();
  const [panelName, setPanelName] = useState("");
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (router.asPath?.includes("projects")) setPanelName("Projects");
    else if (router.asPath?.includes("employees")) setPanelName("Employees");
    else if (router.asPath?.includes("teams")) setPanelName("Teams");
    else if (router.asPath?.includes("board")) setPanelName("Board");
    else if (router.asPath?.includes("logs")) setPanelName("Logs");
    else setPanelName("Home");
  }, [router.asPath]);

  //** Get All the projects in CSR */
  const fetchAllProjects = async () => {
    setLoading(true);
    await getAllProjects().then((res) => {
      console.log("Projects:", res);
      if (res) {
        setProjects(res.data);
        setLoading(false);
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
          {loading && projects.length == 0 ? (
            <div className="w-full flex flex-col justify-center items-center">
              <svg
                className="animate-spin -ml-1 h-10 w-10 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </div>
          ) : projects.length == 0 ? (
            <Empty
              image={Empty.PRESENTED_IMAGE_SIMPLE}
              description="No projects in the company"
            />
          ) : (
            projects.map((project, index) => {
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
            })
          )}
        </div>
      </div>
    </div>
  );
}
