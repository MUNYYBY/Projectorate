import { Result, Tooltip } from "antd";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { CgInbox } from "react-icons/cg";
import { IoIosAdd, IoIosHelpCircle } from "react-icons/io";
import { SlSocialSteam } from "react-icons/sl";
import SearchModule from "../../../components/Search/SearchModule";
import TabDevider from "../../../components/Devider/Devider";
import { getAllTeams, getTeamDomains } from "../../../client/requests";
import TeamsContainer from "../../../components/Teams/TeamsContainer/TeamsContainer";
import TeamsContainerSkelton from "../../../components/Teams/TeamsContainer/TeamsContainerSkelton";
import CreateTeam from "../../../components/Teams/CreateTeam/CreateTeam";

export default function Teams({ teamsData, teamDomains }) {
  //** Router Initialization */
  const router = useRouter();

  //** React States */
  const [teams, setTeams] = useState(teamsData);
  const [isRefreshTeams, setIsRefreshTeams] = useState(false);
  const [isCreateTeam, setIsCreateTeam] = useState(false);

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

  //** Handle project domains information */
  function handleTeamDomainsInfo(id) {
    return teamDomains.find((domain) => domain.id == id);
  }

  return (
    <div className="teams">
      <header className="flex flex-row items-center justify-between border-b-2 border-b-gray-900 px-4 py-2">
        <div className="flex flex-row items-center">
          <div className="teams-panel-icon mr-3">
            <SlSocialSteam size={26} />
          </div>
          <h1 className="text-lg font-bold">Teams Panel</h1>
        </div>
        <div className="flex flex-row items-center">
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
          <div className="help-icon px-2">
            <CgInbox size={24} />
          </div>
          <div className="inbox-icon px-2">
            <IoIosHelpCircle size={26} />
          </div>
        </div>
      </header>
      <div className="Search-Teams-section px-4 my-4">
        <SearchModule
          title="SEARCH TEAMS"
          type="Teams"
          description="Take a dive in to the teams and its attributes. Find anything you are looking for in this team"
        />
      </div>
      <TabDevider color="bg-gray-900" width="w-full" opacity="opacity-1" />
      <div className="All-teams-stack mt-4 px-4">
        <div className="">
          <h1 className="font-bold text-xl">ALL TEAMS</h1>
          <p className="text-sm opacity-60 mt-1">
            A complete list of all the Team for certain projects in
            Projectorate.
          </p>
        </div>

        <div className="Projects py-4">
          {teams.length == 0 ? (
            <div className="w-full flex justify-center items-center">
              <Result
                status="404"
                title="There are no teams yet!"
                subTitle="Please create new team for your in your workspace."
              />
            </div>
          ) : (
            <></>
          )}
          <div class="inline-grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 grid-flow-row gap-4 w-full">
            {!isRefreshTeams ? (
              teams.map((item) => {
                return (
                  <div
                    className="team_container cursor-pointer"
                    key={item.id}
                    // onClick={() =>
                    //   handleActiveProject({
                    //     name: item.project_name,
                    //     id: item.id,
                    //   })
                    // }
                  >
                    <TeamsContainer
                      teamName={item.team_name}
                      employeesCount={item._count.userTeams}
                      tagTitle={handleTeamDomainsInfo(item.teamDomainsId).title}
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
    </div>
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
    console.log("Error at server-side for Super-admin projects: ", error);
  }
  // Pass data to the page via props
  return {
    props: { teamsData: teams, teamDomains },
  };
}
