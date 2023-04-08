import { useEffect, useState } from "react";
import SearchModule from "../../../components/Search/SearchModule";
import TabDevider from "../../../components/Devider/Devider";
import ProjectsContainer from "../../../components/Projects/ProjectsContainer";
import { SlSocialSteam } from "react-icons/sl";
import { IoIosAdd, IoIosHelpCircle } from "react-icons/io";
import { CgInbox } from "react-icons/cg";
import { Tooltip, Col, Row } from "antd";
import SuperAdminDashboard from ".";
import CreateProject from "../../../components/Projects/CreateProject/CreateProject";

export default function SuperAdminProjectPanel() {
  const [isCreateProject, setIsCreateProject] = useState(false);
  return (
    <SuperAdminDashboard>
      <div className="Project-panel ml-[calc(4.5rem+16rem)]">
        <header className="flex flex-row items-center justify-between border-b-2 border-b-gray-900 px-4 py-2">
          <div className="flex flex-row items-center">
            <div className="project-panel-icon mr-3">
              <SlSocialSteam size={26} />
            </div>
            <h1 className="text-lg font-bold">Project Panel</h1>
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
        <div className="Search-projects-section px-4 my-4">
          <SearchModule
            title="SEARCH PROJECTS"
            description="Take a dive in to the project and its attributes. Find anything you are looking for in this project"
          />
        </div>

        <TabDevider color="bg-gray-900" width="w-full" opacity="opacity-1" />
        <div className="All-projects-stack mt-4 px-4">
          <div className="">
            <h1 className="font-bold text-xl">ALL PROJECTS</h1>
            <p className="text-sm opacity-60 mt-1">
              A complete list of all the projects in Projectorate.
            </p>
          </div>
          <div className="Projects py-4">
            <Row>
              <Col xs={24} md={10} lg={8} xl={6} xxl={4}>
                <ProjectsContainer CompanyName="Mavarik Corp" />
              </Col>
              <Col xs={24} md={10} lg={8} xl={6} xxl={4}>
                <ProjectsContainer CompanyName="Subvision LTD" />
              </Col>
              <Col xs={24} md={10} lg={8} xl={6} xxl={4}>
                <ProjectsContainer CompanyName="Vyro.ai" />
              </Col>
              <Col xs={24} md={10} lg={8} xl={6} xxl={4}>
                <ProjectsContainer CompanyName="Always Remembered" />
              </Col>
              <Col xs={24} md={10} lg={8} xl={6} xxl={4}>
                <ProjectsContainer CompanyName="Farevet" />
              </Col>
              <Col xs={24} md={10} lg={8} xl={6} xxl={4}>
                <ProjectsContainer CompanyName="Gemmo LTC" />
              </Col>
            </Row>
          </div>
        </div>
        {/* render create project component if required */}
        {isCreateProject ? <CreateProject /> : <></>}
      </div>
    </SuperAdminDashboard>
  );
}
