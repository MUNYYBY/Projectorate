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
import { Empty, Input } from "antd";

export default function SubPanel() {
  const router = useRouter();
  const [panelName, setPanelName] = useState("");
  const [projects, setProjects] = useState([]);
  const [filterProjects, setFilterProjects] = useState([]);
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
      if (res) {
        setProjects(res.data);
        setFilterProjects(res.data);
        setLoading(false);
      }
    });
  };

  //** When a new project has been added refresh all the projects */
  useEffect(() => {
    fetchAllProjects();
  }, []);

  //** handle search */
  function handleSearch(val) {
    const value = val.target.value;
    setFilterProjects(
      projects.filter((e) => {
        return e.project_name.toLowerCase().includes(value.toLowerCase());
      })
    );
  }

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
        <h1 className="text-xl mb-3 font-semibold">{panelName} Panel</h1>
        <Input
          placeholder="Search projects..."
          type="text"
          onChange={handleSearch}
        />
      </div>
      {/* fix inner div to scroll */}
      <div className="">
        <div className="Projects-tab-container mt-4">
          {loading && filterProjects.length == 0 ? (
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
          ) : filterProjects.length == 0 ? (
            <Empty
              image={Empty.PRESENTED_IMAGE_SIMPLE}
              description="No projects found"
            />
          ) : (
            filterProjects.map((project, index) => {
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
