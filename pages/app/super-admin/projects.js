import { useEffect, useState } from "react";
import SearchModule from "../../../components/Search/SearchModule";
import TabDevider from "../../../components/Devider/Devider";
import ProjectsContainer from "../../../components/Projects/ProjectsContainer/ProjectsContainer";
import { SlSocialSteam } from "react-icons/sl";
import { IoIosAdd, IoIosHelpCircle } from "react-icons/io";
import { CgInbox } from "react-icons/cg";
import { Tooltip, Col, Row, Tabs } from "antd";
import SuperAdminDashboard from ".";
import CreateProject from "../../../components/Projects/CreateProject/CreateProject";
import {
  GetSpecificProject,
  getAllProjects,
  getProjectDomains,
} from "../../../client/requests";
import ProjectsContainerSkelton from "../../../components/Projects/ProjectsContainer/ProjectsContainerSkelton";
import { RxCross1 } from "react-icons/rx";
import { useRouter } from "next/router";

export default function SuperAdminProjectPanel({
  projectsData,
  projectDomains,
}) {
  //** Router Initialization */
  const router = useRouter();

  //** React States */
  const [projects, setProjects] = useState(projectsData);
  const [isCreateProject, setIsCreateProject] = useState(false);
  const [isRefreshProjects, setIsRefreshProjects] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [projectInformation, setProjectInformation] = useState();

  //** Get All the projects in CSR */
  const fetchAllProjects = async () => {
    await getAllProjects().then((res) => {
      setProjects(res.data);
      setIsRefreshProjects(false);
    });
  };

  //** When a new project has been added refresh all the projects */
  useEffect(() => {
    if (isRefreshProjects) {
      fetchAllProjects();
    }
  }, [isRefreshProjects]);

  //** Handle when user click on a project */
  function handleActiveProject(project) {
    setActiveProject(project);
    router.push({
      pathname: "/app/super-admin/projects",
      query: {
        projectId: project.id,
        projectName: project.name,
      },
    });
  }

  //** Listen for query params change */
  useState(() => {
    if (router.query.projectId && router.query.projectName) {
      setActiveProject({
        id: router.query.projectId,
        name: router.query.projectName,
      });
      //** Get project Information */
      GetSpecificProject(router.query.projectId).then((res) => {
        setProjectInformation(res.data);
      });
    }
  }, [router.query]);

  //** handle change of active project tab */
  const onActiveProjectChange = (key) => {
    setActiveProject(key);
  };
  return (
    <>
      <div className="Project-panel">
        <header className="flex flex-row items-center justify-between border-b-2 border-b-gray-900 px-4 py-2 relative">
          <div className="flex flex-row items-center">
            <div className="project-panel-icon mr-3">
              <SlSocialSteam size={26} />
            </div>
            <h1 className="text-lg font-bold">Project Panel</h1>
          </div>
          <div className="absolute -bottom-0 left-52">
            {activeProject ? (
              <div className="border-x-2 border-t-2 border-gray-900 bg-gray-900 rounded-t-md px-4 py-2 flex flex-row justify-between items-center">
                <p>{activeProject.name}</p>
                <div
                  className="ml-4 opacity-30 hover:opacity-100 transition-all cursor-pointer"
                  onClick={() => onActiveProjectChange(null)}
                >
                  <RxCross1 size={14} />
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div className="flex flex-row items-center">
            <Tooltip
              placement="bottom"
              title="Create a new project in your company and add a workforce"
              mouseEnterDelay={0.05}
            >
              <button
                className="bg-secondry mr-2 py-1 px-3 rounded-md flex flex-row justify-center items-center"
                onClick={() => !setIsCreateProject(!isCreateProject)}
              >
                <IoIosAdd size={26} />
                <p>Create Project</p>
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
        {/* show all project / show specific project starts here */}
        {!activeProject ? (
          <>
            <div className="Search-projects-section px-4 my-4">
              <SearchModule
                title="SEARCH PROJECTS"
                description="Take a dive in to the project and its attributes. Find anything you are looking for in this project"
              />
            </div>

            <TabDevider
              color="bg-gray-900"
              width="w-full"
              opacity="opacity-1"
            />
            <div className="All-projects-stack mt-4 px-4">
              <div className="">
                <h1 className="font-bold text-xl">ALL PROJECTS</h1>
                <p className="text-sm opacity-60 mt-1">
                  A complete list of all the projects in Projectorate.
                </p>
              </div>
              <div className="Projects py-4">
                <div class="inline-grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 grid-flow-row gap-4">
                  {!isRefreshProjects ? (
                    projects.map((item) => {
                      const searchObject = projectDomains.find(
                        (domain) => domain.id == item.projectDomainsId
                      );
                      return (
                        <div
                          className="project_container cursor-pointer"
                          key={item.id}
                          onClick={() =>
                            handleActiveProject({
                              name: item.project_name,
                              id: item.id,
                            })
                          }
                        >
                          <ProjectsContainer
                            ProjectName={item.project_name}
                            tagTitle={searchObject.title}
                          />
                        </div>
                      );
                    })
                  ) : (
                    <>
                      <ProjectsContainerSkelton />
                      <ProjectsContainerSkelton />
                      <ProjectsContainerSkelton />
                      <ProjectsContainerSkelton />
                      <ProjectsContainerSkelton />
                      <ProjectsContainerSkelton />
                    </>
                  )}
                </div>
              </div>
            </div>
            {isCreateProject ? (
              <CreateProject
                setIsRefreshProjects={setIsRefreshProjects}
                setIsCreateProject={setIsCreateProject}
              />
            ) : (
              <></>
            )}
          </>
        ) : (
          <div
            className={`${activeProject.name}-project bg-gray-900 bg-opacity-60`}
          >
            <div className="py-10 flex flex-row justify-between items-center px-6">
              <div className="flex flex-row justify-center items-center">
                <div className="bg-gray-700 p-24 rounded-lg relative">
                  <p className="absolute bottom-[-10px] left-5 font-extrabold text-[10rem] opacity-40">
                    {activeProject.name[0]}
                  </p>
                </div>
                <div className="flex flex-col justify-center ml-4">
                  <p>{projectInformation.project_name}</p>
                  <p>hello world</p>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* show all project / show specific project ends here */}
      </div>
    </>
  );
}

// This gets called on every server-side render
export async function getServerSideProps() {
  // Fetch data from external API
  let projects = null;
  let projectDomains = null;
  //get all the projects
  try {
    const allProjects = await getAllProjects();
    projects = allProjects.data;
  } catch (error) {
    console.log("Error at server-side for Super-admin projects: ", error);
  }
  //get all the projects domains
  try {
    const allProjectsDomains = await getProjectDomains();
    projectDomains = allProjectsDomains.data;
    console.log(projectDomains);
  } catch (error) {
    console.log("Error at server-side for Super-admin projects: ", error);
  }
  // Pass data to the page via props
  return {
    props: { projectsData: projects, projectDomains },
  };
}
