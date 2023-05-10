import { useEffect, useState } from "react";
import SearchModule from "../../../components/Search/SearchModule";
import TabDevider from "../../../components/Devider/Devider";
import ProjectsContainer from "../../../components/Projects/ProjectsContainer/ProjectsContainer";
import { SlSocialSteam } from "react-icons/sl";
import { IoIosAdd, IoIosHelpCircle, IoMdGitNetwork } from "react-icons/io";
import { AiOutlineUsergroupAdd, AiOutlineEdit } from "react-icons/ai";

import { CgInbox, CgTrash } from "react-icons/cg";
import { Tooltip, Col, Row, Tabs, Popconfirm, message, Result } from "antd";
import CreateProject from "../../../components/Projects/CreateProject/CreateProject";
import {
  DeleteProject,
  GetSpecificProject,
  getAllProjects,
  getProjectDomains,
} from "../../../client/requests";
import ProjectsContainerSkelton from "../../../components/Projects/ProjectsContainer/ProjectsContainerSkelton";
import { RxCross1 } from "react-icons/rx";
import { useRouter } from "next/router";
import InformationTag from "../../../components/InformationTag/InformationTag";
import ProjectEmployees from "../../../components/Projects/ProjectEmployees.js/ProjectEmployees";
import AssignEmployee from "../../../components/Projects/AssignEmployee/AssignEmployee";
import CreateTicketBtn from "../../../components/Tickets/CreateTicketBtn";
import CreateTicketModel from "../../../components/Tickets/CreateTicketModel";
import ProjectTeams from "../../../components/Projects/ProjectTeams/ProjectTeams.js";
import AllTickets from "../../../components/Tickets/AllTickets/AllTickets";
import TicketInfo from "../../../components/Tickets/TicketInfo/TicketInfo";
import EmployeeProfile from "../../../components/Employees/Profile/EmployeesProfile";
import AuthorityCheck from "../../../Permissions/AuthorityCheck";
import UpdateProject from "../../../components/Projects/UpdateProject/UpdateProject";

const PROJECTS_TABS = ["Employees", "Teams", "Tickets"];

export default function SuperAdminProjectPanel({
  projectsData,
  projectDomains,
}) {
  //** Router Initialization */
  const router = useRouter();

  //** React States */
  const [projects, setProjects] = useState(projectsData);
  const [filteredProjectsData, setFilteredProjectsData] =
    useState(projectsData);
  const [isCreateProject, setIsCreateProject] = useState(false);
  const [isRefreshProjects, setIsRefreshProjects] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [projectInformation, setProjectInformation] = useState();
  const [assignEmployeesPanel, setAssignEmployeesPanel] = useState(false);
  const [isNewEmployee, setisNewEmployee] = useState(false);
  const [isCreateTicket, setIsCreateTicket] = useState(false);
  const [activeTab, setActiveTab] = useState(1); // 1 is employees
  const [isTicketInfo, setIsTicketInfo] = useState({ id: null });
  const [isEmployeeProfile, setIsEmployeeProfile] = useState({ id: null });
  const [isUpdateProject, setIsUpdateProject] = useState(false);

  //** Get All the projects in CSR */
  const fetchAllProjects = async () => {
    await getAllProjects().then((res) => {
      setProjects(res.data);
      setFilteredProjectsData(res.data);
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
      pathname: "/app/u/projects",
      query: {
        projectId: project.id,
        projectName: project.name,
      },
      shallow: true,
    });
  }

  function handleUnActiveProject() {
    setActiveProject(null);
    setProjectInformation(null);
    router.replace({
      pathname: "/app/u/projects",
      query: undefined,
      shallow: true,
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
        if (!res.error) {
          console.log(res.data);
          setProjectInformation(res.data);
        } else {
          if (res.error.error == 404) {
            message.error("Team not found!");
          }
          handleUnActiveProject();
        }
      });
    }
  }, [router.query]);

  //** Delete project */
  function DeleteProjectConfirm() {
    DeleteProject(activeProject.id).then((res) => {
      if (!res.error) {
        message.success("Project Sucessfully deleted!");
        handleUnActiveProject();
      } else {
        message.error("Error deleting project!");
      }
    });
  }
  function OnProjectDeleteCancel() {}

  //** Handle project domains information */
  function handleProjectDomainsInfo(id) {
    return projectDomains.find((domain) => domain.id == id);
  }

  function handleOnTabChange(value) {
    setActiveTab(value);
  }

  return (
    <>
      <AuthorityCheck grantPermissionFor="manage_tickets">
        <div className="fixed z-[999] bottom-4 right-4 flex flex-col items-end">
          {isCreateTicket ? (
            <CreateTicketModel setIsCreateTicket={setIsCreateTicket} />
          ) : (
            <></>
          )}

          <div
            className="Create-ticket"
            onClick={() => setIsCreateTicket(true)}
          >
            <CreateTicketBtn />
          </div>
        </div>
      </AuthorityCheck>
      <div className="Project-panel">
        <header className="flex flex-row items-center justify-between border-b-2 border-b-gray-900 px-4 py-2 relative">
          <div className="flex flex-row items-center">
            <div className="project-panel-icon mr-3">
              <IoMdGitNetwork size={26} />
            </div>
            <h1 className={`text-lg font-bold hidden sm:flex`}>
              Project Panel
            </h1>
          </div>
          <div className={`absolute -bottom-0 left-16 sm:left-52`}>
            {activeProject ? (
              <div className="border-x-2 border-t-2 border-gray-900 bg-gray-900 rounded-t-md px-4 py-2 flex flex-row justify-between items-center">
                <p>{activeProject.name}</p>
                <div
                  className="ml-4 opacity-30 hover:opacity-100 transition-all cursor-pointer"
                  onClick={() => handleUnActiveProject()}
                >
                  <RxCross1 size={14} />
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div className="flex flex-row items-center">
            {!activeProject ? (
              <AuthorityCheck grantPermissionFor="manage_projects">
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
              </AuthorityCheck>
            ) : (
              <></>
            )}
            <div className="help-icon px-2 sm:flex hidden">
              <CgInbox size={24} />
            </div>
            <div className="inbox-icon px-2 sm:flex hidden">
              <IoIosHelpCircle size={26} />
            </div>
          </div>
        </header>
        {/* show all project / show specific project starts here */}
        {!activeProject || !projectInformation ? (
          <>
            <div className="Search-projects-section px-4 my-4">
              <SearchModule
                type="projects"
                title="SEARCH PROJECTS"
                description="Take a dive in to the project and its attributes. Find anything you are looking for in this project"
                data={projects}
                setFilteredData={setFilteredProjectsData}
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
                {filteredProjectsData.length == 0 ? (
                  <div className="w-full flex justify-center items-center">
                    <Result
                      status="404"
                      title="No projects found!"
                      subTitle="Could not found any projects, please create new project in you workspace."
                    />
                  </div>
                ) : (
                  <></>
                )}
                <div class="inline-grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 grid-flow-row gap-4 w-full">
                  {!isRefreshProjects ? (
                    filteredProjectsData.map((item) => {
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
                            employeesCount={item._count.userProjects}
                            teamsCount={item._count.Teams}
                            ticketsCount={item._count.Tickets}
                            tagTitle={
                              handleProjectDomainsInfo(item.projectDomainsId)
                                .title
                            }
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
          <>
            <AssignEmployee
              assignEmployeesPanel={assignEmployeesPanel}
              setAssignEmployeesPanel={setAssignEmployeesPanel}
              setisNewEmployee={setisNewEmployee}
              projectId={activeProject.id}
            />
            <div
              className={`${activeProject.name}-project bg-gray-900 bg-opacity-60`}
            >
              <div className="py-10 flex flex-col sm:flex-row justify-between sm:items-start px-3 sm:px-6">
                <div className="flex flex-row justify-start items-start">
                  <div className="bg-gray-700 md:flex hidden lg:h-52 lg:w-52 md:h-32 md:w-32 h-24 w-24 rounded-lg flex justify-center items-center">
                    <p className="font-extrabold lg:text-[10rem] md:text-6xl text-3xl opacity-40">
                      {activeProject.name[0]}
                    </p>
                  </div>
                  {!isUpdateProject ? (
                    <div className="flex flex-col justify-center sm:ml-4">
                      <h1 className="text-3xl font-bold text-secondry ">
                        {projectInformation?.project_name.toUpperCase()}
                      </h1>
                      <p className="font-medium mt-2 text-sm md:text-md lg:text-xl sm:w-32 lg:w-96 md:w-32 w-full">
                        {projectInformation?.description}
                      </p>
                      <div className="mt-4">
                        <InformationTag
                          title={
                            handleProjectDomainsInfo(
                              projectInformation?.projectDomainsId
                            ).title
                          }
                          type="intermediate"
                        />
                      </div>
                    </div>
                  ) : (
                    <UpdateProject
                      projectInformation={projectInformation}
                      setIsUpdateProject={setIsUpdateProject}
                    />
                  )}
                </div>
                <AuthorityCheck grantPermissionFor="manage_projects">
                  <div className="project-actions flex flex-row mt-4 sm:mt-0">
                    <Tooltip
                      placement="topRight"
                      title="Add employees to work on this project"
                      mouseEnterDelay={0.05}
                    >
                      <button
                        className="bg-white bg-opacity-10 hover:bg-opacity-25 transition-all mr-2 p-2 rounded-lg flex flex-row justify-center items-center"
                        onClick={() => setAssignEmployeesPanel(true)}
                      >
                        <AiOutlineUsergroupAdd size={24} />
                      </button>
                    </Tooltip>
                    <Tooltip
                      placement="topRight"
                      title="Edit this project"
                      mouseEnterDelay={0.05}
                    >
                      <button
                        className="bg-white bg-opacity-10 hover:bg-opacity-25 transition-all mr-2 p-2 rounded-lg flex flex-row justify-center items-center"
                        onClick={() => setIsUpdateProject(!isUpdateProject)}
                      >
                        <AiOutlineEdit size={24} />
                      </button>
                    </Tooltip>
                    <Tooltip
                      placement="topRight"
                      title="Remove this project"
                      mouseEnterDelay={0.05}
                    >
                      <Popconfirm
                        title={`Remove project Projectorate?`}
                        description="Are you sure to remove this project from projectorate?"
                        onConfirm={() => {
                          DeleteProjectConfirm(activeProject.id);
                        }}
                        onCancel={OnProjectDeleteCancel}
                        okText="Confirm"
                        cancelText="No"
                        placement="bottomLeft"
                      >
                        <button className="bg-white bg-opacity-10 hover:bg-opacity-25 transition-all mr-2 p-2 rounded-lg flex flex-row justify-center items-center">
                          <CgTrash size={24} />
                        </button>
                      </Popconfirm>
                    </Tooltip>
                  </div>
                </AuthorityCheck>
              </div>
            </div>
            {/* Show tabs */}
            <div className="mt-4">
              <Tabs
                defaultActiveKey="1"
                type="card"
                size={32}
                onChange={(value) => {
                  handleOnTabChange(value);
                }}
                items={PROJECTS_TABS.map((_, i) => {
                  const id = String(i + 1);
                  return {
                    label: `${_}`,
                    key: id,
                  };
                })}
              />
            </div>
            {activeTab == 1 ? (
              <>
                <EmployeeProfile
                  isEmployeeProfile={isEmployeeProfile}
                  setIsEmployeeProfile={setIsEmployeeProfile}
                />
                <ProjectEmployees
                  projectId={activeProject.id}
                  isNewEmployee={isNewEmployee}
                  setisNewEmployee={setisNewEmployee}
                  setIsEmployeeProfile={setIsEmployeeProfile}
                />
              </>
            ) : activeTab == 2 ? (
              <ProjectTeams
                projectId={activeProject.id}
                isNewEmployee={isNewEmployee}
                setisNewEmployee={setisNewEmployee}
              />
            ) : (
              <>
                <TicketInfo
                  isTicketInfo={isTicketInfo}
                  setIsTicketInfo={setIsTicketInfo}
                />
                <AllTickets
                  projectId={activeProject.id}
                  isNewEmployee={isNewEmployee}
                  setisNewEmployee={setisNewEmployee}
                  setIsTicketInfo={setIsTicketInfo}
                />
              </>
            )}
          </>
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
    console.log("Error at server-side for users projects: ", error);
  }
  //get all the projects domains
  try {
    const allProjectsDomains = await getProjectDomains();
    projectDomains = allProjectsDomains.data;
    console.log(projectDomains);
  } catch (error) {
    console.log("Error at server-side for users projects: ", error);
  }
  // Pass data to the page via props
  return {
    props: { projectsData: projects, projectDomains },
  };
}
