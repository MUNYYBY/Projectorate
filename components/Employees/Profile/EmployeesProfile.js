import { Drawer, Popconfirm, Tooltip, Skeleton, Select } from "antd";
import { message } from "antd";
import { useEffect, useState } from "react";
import React from "react";
import TabDevider from "../../Devider/Devider";
import { getEmployeeProfile, getTicketsStatus } from "../../../client/requests";
import { FaRegUser } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { AiOutlinePhone } from "react-icons/ai";
import { BsCalendarDate, BsGenderAmbiguous } from "react-icons/bs";

import moment from "moment/moment";
import InformationTag from "../../InformationTag/InformationTag";
import ProjectsContainer from "../../Projects/ProjectsContainer/ProjectsContainer";
import { useRouter } from "next/router";

export default function EmployeeProfile(props) {
  const [loading, setLoading] = useState(true);
  const [EmployeeInfo, setEmployeeInfo] = useState(null);

  //** Router Initialization */
  const router = useRouter();

  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  //** Fetch all avaible employees */

  function handleEmployeeFetching() {
    if (props.isEmployeeProfile.id) {
      setLoading(true);
      getEmployeeProfile(props.isEmployeeProfile.id).then((res) => {
        if (!res.error) {
          setEmployeeInfo(res.data);
          setLoading(false);
        } else {
          setLoading(false);
          message.error(
            "Some error occoured while fetching project employees!"
          );
        }
      });
    }
  }
  useEffect(() => {
    handleEmployeeFetching();
  }, [props.isEmployeeProfile.id]);

  return (
    <Drawer
      title="Employee Profile"
      onClose={() => props.setIsEmployeeProfile({ id: null })}
      open={props.isEmployeeProfile.id}
      bodyStyle={{ paddingBottom: 80 }}
      width={windowSize[0] > 1100 ? "70%" : "100%"}
    >
      {loading || !EmployeeInfo ? (
        <>
          <Skeleton active />
          <div className="mt-4">
            <Skeleton active />
          </div>
          <div className="mt-4">
            <Skeleton active />
          </div>
          <div className="mt-4">
            <Skeleton active />
          </div>
          <div className="mt-4">
            <Skeleton active />
          </div>
        </>
      ) : (
        <>
          <header className="flex flex-col md:flex-row justify-between items-start">
            <div className="flex flex-row sm:flex-row-reverse md:flex-row justify-between md:justify-start items-start w-full">
              <div className="h-44 w-44 bg-gray-300 bg-opacity-10 flex justify-center items-center rounded-3xl sm:flex hidden">
                <h1 className="text-[8rem] font-bold opacity-60">
                  {EmployeeInfo.first_name[0]}
                </h1>
              </div>
              <div className="flex flex-col md:pl-4">
                <div className="flex justify-center items-center mb-2">
                  <FaRegUser size={25} />
                  <h1 className="text-3xl font-bold ml-2">
                    {EmployeeInfo.first_name} {EmployeeInfo.last_name}
                  </h1>
                </div>
                <div className="flex justify-start items-center mb-2">
                  <FiMail size={20} />
                  <h1 className="text-lg ml-2">{EmployeeInfo.email}</h1>
                </div>
                <div className="flex justify-start items-center mb-2">
                  <AiOutlinePhone size={23} />
                  <h1 className="text-lg ml-2">{EmployeeInfo.phone_number}</h1>
                </div>
                <div className="flex justify-start items-center mb-2">
                  <BsCalendarDate size={22} />
                  <h1 className="text-lg ml-2">
                    {moment().format(EmployeeInfo.date_of_birth)}
                  </h1>
                </div>
                <div className="flex justify-start items-center mb-2">
                  <BsGenderAmbiguous size={22} />
                  <h1 className="text-lg ml-2">{EmployeeInfo.gender}</h1>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start md:items-end">
              <div className="flex flex-row md:flex-col items-end">
                <div className="mb-2">
                  <InformationTag
                    title={EmployeeInfo.Role.title}
                    type="secondry"
                    size="lg"
                  />
                </div>
                <div className="mb-2">
                  <InformationTag
                    title={EmployeeInfo.Designation.title}
                    type="pOrange"
                    size="lg"
                  />
                </div>
                <div className="mb-2">
                  <InformationTag
                    title={EmployeeInfo.expertise}
                    type="base"
                    size="lg"
                  />
                </div>
              </div>
              <h1 className="text-lg mb-2 mr-2 opacity-75 text-left md:text-right">
                {EmployeeInfo.years_of_experience} years of Experience
              </h1>
              <h1 className="text-lg mb-2 mr-2 opacity-75 text-left md:text-right">
                Joined on{" "}
                {moment(EmployeeInfo.createdAt).format("dddd, MMMM Do YYYY")}
              </h1>
            </div>
          </header>
          <div className="tabdevider h-[1.5px] my-4 bg-opacity-10 bg-white w-full rounded-lg"></div>
          <div className="text-lg font-semibold">Projects Assigned </div>
          <div class="inline-grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 grid-flow-row gap-4 w-full mt-4">
            {EmployeeInfo.userProjects.map((item) => {
              return (
                <div
                  className="project_container cursor-pointer"
                  key={item.id}
                  onClick={() =>
                    router.push({
                      pathname: "/app/u/projects",
                      query: {
                        projectId: item.project.id,
                        projectName: item.project.name,
                      },
                      shallow: true,
                    })
                  }
                >
                  <ProjectsContainer
                    ProjectName={item.project.project_name}
                    tagTitle={item.project.projectDomainsId}
                    type="minimal"
                  />
                </div>
              );
            })}
          </div>
          <div className="text-lg font-semibold mt-4">Teams Assigned </div>
          <div class="inline-grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 grid-flow-row gap-4 w-full mt-4">
            {EmployeeInfo.UserTeams.map((item) => {
              return (
                <div
                  className="team_container cursor-pointer"
                  key={item.id}
                  onClick={() =>
                    router.push({
                      pathname: "/app/u/teams",
                      query: {
                        teamId: item.team.id,
                        teamName: item.team.name,
                      },
                      shallow: true,
                    })
                  }
                >
                  <ProjectsContainer
                    ProjectName={item.team.team_name}
                    tagTitle={item.team.teamDomainsId}
                    type="minimal"
                  />
                </div>
              );
            })}
          </div>
        </>
      )}
    </Drawer>
  );
}
