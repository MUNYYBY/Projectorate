import { Popconfirm, Result, Tabs, Tooltip, message } from "antd";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { CgInbox, CgTrash } from "react-icons/cg";
import { IoIosAdd, IoIosHelpCircle } from "react-icons/io";
import { SlSocialSteam } from "react-icons/sl";
import SearchModule from "../../../components/Search/SearchModule";
import TabDevider from "../../../components/Devider/Devider";
import {
  DeleteTeam,
  GetSpecificTeam,
  getAllTeams,
  getTeamDomains,
} from "../../../client/requests";
import TeamsContainer from "../../../components/Teams/TeamsContainer/TeamsContainer";
import TeamsContainerSkelton from "../../../components/Teams/TeamsContainer/TeamsContainerSkelton";
import CreateTeam from "../../../components/Teams/CreateTeam/CreateTeam";
import { RxCross1 } from "react-icons/rx";
import {
  AiOutlineBlock,
  AiOutlineEdit,
  AiOutlineUsergroupAdd,
} from "react-icons/ai";
import InformationTag from "../../../components/InformationTag/InformationTag";
import TeamEmployees from "../../../components/Teams/TeamEmployees/TeamEmployees";
import AssignEmployee from "../../../components/Teams/AssignEmployee/AssignEmployee";
import CreateTicketModel from "../../../components/Tickets/CreateTicketModel";
import CreateTicketBtn from "../../../components/Tickets/CreateTicketBtn";
import AllTickets from "../../../components/Tickets/AllTickets/AllTickets";
import TicketInfo from "../../../components/Tickets/TicketInfo/TicketInfo";
import EmployeeProfile from "../../../components/Employees/Profile/EmployeesProfile";
import AuthorityCheck from "../../../Permissions/AuthorityCheck";
import UpdateTeam from "../../../components/Teams/UpdateTeam/UpdateTeam";

import { useSession } from "next-auth/react";

const PROJECTS_TABS = ["Employees", "Tickets"];

export default function Teams({ teamsData, teamDomains }) {
  //** Router Initialization */
  const router = useRouter();

  //** React States */
  const [teams, setTeams] = useState(teamsData);
  const [filteredTeams, setFilteredTeams] = useState(teamsData);
  const [isRefreshTeams, setIsRefreshTeams] = useState(false);
  const [isCreateTeam, setIsCreateTeam] = useState(false);
  const [activeTeam, setActiveTeam] = useState(null);
  const [teamInformation, setTeamInformation] = useState();
  const [isNewEmployee, setisNewEmployee] = useState(false);
  const [assignEmployeesPanel, setAssignEmployeesPanel] = useState(false);
  const [callbackExecuted, setCallbackExecuted] = useState(false); // to control multiple callbacks of usestate based on query params
  const [isCreateTicket, setIsCreateTicket] = useState(false);
  const [activeTab, setActiveTab] = useState(1);
  const [isTicketInfo, setIsTicketInfo] = useState(false);
  const [isEmployeeProfile, setIsEmployeeProfile] = useState({ id: null });
  const [isUpdateTeam, setIsUpdateTeam] = useState(false);

  const { data: session, status } = useSession();

  //** Get All the Teams in CSR */
  const fetchAllTeams = async () => {
    await getAllTeams().then((res) => {
      setTeams(res.data);
      setIsRefreshTeams(false);
    });
  };

  //** When a new project has been added refresh all the projects */
  useEffect(() => {
    if (isRefreshTeams) {
      fetchAllTeams();
    }
  }, [isRefreshTeams]);

  //** Handle when user click on a project */
  function handleActiveTeam(team) {
    setActiveTeam(team);
    router.push({
      pathname: "/app/u/teams",
      query: {
        teamId: team.id,
        teamName: team.name,
      },
      shallow: true,
    });
  }

  function handleUnActiveTeam() {
    setActiveTeam(null);
    setTeamInformation(null);
    router.replace({
      query: undefined,
      shallow: true,
    });
  }

  //** Listen for query params change */
  useState(() => {
    if (router.query.teamId && router.query.teamName && !callbackExecuted) {
      // Update the flag to indicate that the callback has been executed
      setCallbackExecuted(true);
      setActiveTeam({
        id: router.query.teamId,
        name: router.query.teamName,
      });
      //** Get project Information */
      GetSpecificTeam(router.query.teamId).then((res) => {
        if (!res.error) {
          console.log(res.data);
          setTeamInformation(res.data);
        } else {
          if (res.error.error == 404) {
            message.error("Team not found!");
          }
          handleUnActiveTeam();
        }
      });
    }
  }, [router.query, callbackExecuted]);

  //** Delete project */
  function DeleteTeamConfirm() {
    DeleteTeam(activeTeam.id, session.user.id).then((res) => {
      if (!res.error) {
        message.success("Team Sucessfully deleted!");
        handleUnActiveTeam();
      } else {
        message.error("Error deleting Team!");
      }
    });
  }
  function OnTeamDeleteCancel() {}

  //** Handle project domains information */
  function handleTeamDomainsInfo(id) {
    return teamDomains.find((domain) => domain.id == id);
  }
  function handleOnTabChange(value) {
    setActiveTab(value);
  }

  return (
    <>
      <AuthorityCheck grantPermissionFor="manage_tickets">
        <div className="absolute z-[999] bottom-4 right-4 flex flex-col items-end">
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
      <div className="teams">
        <header className="flex flex-row items-center justify-between border-b-2 border-b-gray-900 px-4 py-2 relative">
          <div className="flex flex-row items-center">
            <div className="teams-panel-icon mr-3">
              <AiOutlineBlock size={26} />
            </div>
            <h1 className="text-lg font-bold hidden sm:flex">Teams Panel</h1>
          </div>
          <div className="absolute -bottom-0 left-16 sm:left-48">
            {activeTeam ? (
              <div className="border-x-2 border-t-2 border-gray-900 bg-gray-900 rounded-t-md px-4 py-2 flex flex-row justify-between items-center">
                <p>{activeTeam.name}</p>
                <div
                  className="ml-4 opacity-30 hover:opacity-100 transition-all cursor-pointer"
                  onClick={() => handleUnActiveTeam()}
                >
                  <RxCross1 size={14} />
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div className="flex flex-row items-center">
            {!activeTeam ? (
              <AuthorityCheck grantPermissionFor="manage_teams">
                <Tooltip
                  placement="bottom"
                  title="Create a new project in your company and add a workforce"
                  mouseEnterDelay={0.05}
                >
                  <button
                    className="bg-secondry mr-2 py-1 px-3 rounded-md flex flex-row justify-center items-center"
                    onClick={() => {
                      setIsCreateTeam(true);
                    }}
                  >
                    <IoIosAdd size={26} />
                    <p>Create Team</p>
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
        {/* show all teams / show specific team starts here */}
        {!activeTeam || !teamInformation ? (
          <>
            <div className="Search-Teams-section px-4 my-4">
              <SearchModule
                title="SEARCH TEAMS"
                type="teams"
                description="Take a dive in to the teams and its attributes. Find anything you are looking for in this team"
                data={teams}
                setFilteredData={setFilteredTeams}
              />
            </div>
            <TabDevider
              color="bg-gray-900"
              width="w-full"
              opacity="opacity-1"
            />
            <div className="All-teams-stack mt-4 px-4">
              <div className="">
                <h1 className="font-bold text-xl">ALL TEAMS</h1>
                <p className="text-sm opacity-60 mt-1">
                  A complete list of all the Team for certain projects in
                  Projectorate.
                </p>
              </div>

              <div className="Projects py-4">
                {filteredTeams.length == 0 ? (
                  <div className="w-full flex justify-center items-center">
                    <Result
                      status="404"
                      title="No teams found!"
                      subTitle="Could not found teams, please create new team for your in your workspace."
                    />
                  </div>
                ) : (
                  <></>
                )}
                <div class="inline-grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 grid-flow-row gap-4 w-full">
                  {!isRefreshTeams ? (
                    filteredTeams.map((item) => {
                      return (
                        <div
                          className="team_container cursor-pointer"
                          key={item.id}
                          onClick={() => {
                            handleActiveTeam({
                              name: item.team_name,
                              id: item.id,
                            });
                          }}
                        >
                          <TeamsContainer
                            teamName={item.team_name}
                            employeesCount={item._count.UserTeams}
                            ticketsCount={item._count.Tickets}
                            tagTitle={
                              handleTeamDomainsInfo(item.teamDomainsId).title
                            }
                          />
                        </div>
                      );
                    })
                  ) : (
                    <>
                      <TeamsContainerSkelton />
                      <TeamsContainerSkelton />
                      <TeamsContainerSkelton />
                      <TeamsContainerSkelton />
                      <TeamsContainerSkelton />
                      <TeamsContainerSkelton />
                    </>
                  )}
                </div>
              </div>
            </div>
            {isCreateTeam ? (
              <CreateTeam
                setIsRefreshTeams={setIsRefreshTeams}
                setIsCreateTeam={setIsCreateTeam}
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
              projectId={teamInformation.project.id}
              teamId={activeTeam.id}
              ownerId={session?.user.id}
            />
            <div
              className={`${activeTeam.name}-project bg-gray-900 bg-opacity-60`}
            >
              <div className="py-10 flex flex-col sm:flex-row justify-between sm:items-start px-3 sm:px-6">
                <div className="flex flex-row justify-start items-start">
                  <div className="bg-gray-700 md:flex hidden lg:h-52 lg:w-52 md:h-32 md:w-32 h-24 w-24 rounded-lg flex justify-center items-center">
                    <p className="font-extrabold lg:text-[10rem] md:text-6xl text-3xl opacity-40">
                      {activeTeam.name[0]}
                    </p>
                  </div>
                  {!isUpdateTeam ? (
                    <div className="flex flex-col justify-center sm:ml-4">
                      <h1 className="text-3xl font-bold text-secondry ">
                        {teamInformation?.team_name.toUpperCase()} |{" "}
                        {teamInformation?.project.project_name.toUpperCase()}
                      </h1>
                      <p className="font-medium mt-2 text-sm md:text-md lg:text-xl sm:w-32 lg:w-96 md:w-32 w-full">
                        {teamInformation?.description}
                      </p>
                      <div className="mt-4">
                        <InformationTag
                          title={
                            handleTeamDomainsInfo(
                              teamInformation?.teamDomainsId
                            ).title
                          }
                          type="intermediate"
                        />
                      </div>
                    </div>
                  ) : (
                    <UpdateTeam
                      teamInformation={teamInformation}
                      setIsUpdateTeam={setIsUpdateTeam}
                    />
                  )}
                </div>
                <AuthorityCheck grantPermissionFor="manage_teams">
                  <div className="project-actions flex flex-row mt-4 sm:mt-0">
                    <Tooltip
                      placement="topRight"
                      title="Add employees to work on this team"
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
                      title="Edit this team"
                      mouseEnterDelay={0.05}
                    >
                      <button
                        className={`${
                          isUpdateTeam
                            ? "bg-primary"
                            : "bg-white bg-opacity-10 hover:bg-opacity-25"
                        }  transition-all mr-2 p-2 rounded-lg flex flex-row justify-center items-center`}
                        onClick={() => setIsUpdateTeam(!isUpdateTeam)}
                      >
                        <AiOutlineEdit size={24} />
                      </button>
                    </Tooltip>
                    <Tooltip
                      placement="topRight"
                      title="Remove this team"
                      mouseEnterDelay={0.05}
                    >
                      <Popconfirm
                        title={`Remove Team from Projectorate?`}
                        description="Are you sure to remove this team? "
                        onConfirm={() => {
                          DeleteTeamConfirm(activeTeam.id);
                        }}
                        onCancel={OnTeamDeleteCancel}
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
                <TeamEmployees
                  teamId={activeTeam.id}
                  isNewEmployee={isNewEmployee}
                  setisNewEmployee={setisNewEmployee}
                  setIsEmployeeProfile={setIsEmployeeProfile}
                  ownerId={session?.user.id}
                />
              </>
            ) : activeTab == 2 ? (
              <>
                <TicketInfo
                  isTicketInfo={isTicketInfo}
                  setIsTicketInfo={setIsTicketInfo}
                />
                <AllTickets
                  teamId={activeTeam.id}
                  isNewEmployee={isNewEmployee}
                  setisNewEmployee={setisNewEmployee}
                  setIsTicketInfo={setIsTicketInfo}
                />
              </>
            ) : (
              <></>
            )}
          </>
        )}
      </div>
    </>
  );
}

// This gets called on every server-side render
export async function getServerSideProps() {
  // Fetch data from external API
  let teams = null;
  let teamDomains = null;
  //get all the projects
  try {
    const allTeams = await getAllTeams();
    teams = allTeams.data;
  } catch (error) {
    console.log("Error at server-side for teams: ", error);
  }
  //get all the projects domains
  try {
    const allTeamDomains = await getTeamDomains();
    teamDomains = allTeamDomains.data;
  } catch (error) {
    console.log("Error at server-side for user projects: ", error);
  }
  // Pass data to the page via props
  return {
    props: { teamsData: teams, teamDomains },
  };
}
