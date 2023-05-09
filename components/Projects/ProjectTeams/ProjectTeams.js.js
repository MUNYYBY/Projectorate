import { Table, Segmented, message, Popconfirm } from "antd";
import { useEffect, useState } from "react";
import {
  DeleteEmployeeFromProject,
  DeleteTeam,
  deleteEmployee,
  getEmployees,
  getProjectTeams,
} from "../../../client/requests";
import moment from "moment/moment";
import { getProjectEmployees } from "../../../client/requests";
import InformationTag from "../../InformationTag/InformationTag";
import Link from "next/link";

export default function ProjectTeams({
  projectId,
  isNewEmployee,
  setisNewEmployee,
}) {
  const [teamsData, setTeamsData] = useState();
  const [loading, setLoading] = useState(false);

  const columns = [
    {
      title: "Team Name",
      width: 150,
      render: (_, { team_name, id }) => (
        <Link href={`/app/u/teams?teamId=${id}&teamName=${team_name}`}>
          <h1 className="cursor-pointer underline">{team_name}</h1>
        </Link>
      ),
      key: "team_name",
      fixed: "left",
    },
    {
      title: "Description",
      dataIndex: "description",
      width: 400,
      key: "description",
    },
    {
      title: "Project",
      render: (_, { project }) => (
        <InformationTag
          title={project.project_name}
          type="secondry"
          size="lg"
        />
      ),
      key: "projectId",
    },
    {
      title: "Team Domain",
      render: (_, { TeamDomains }) => (
        <InformationTag title={TeamDomains.title} type="pOrange" size="lg" />
      ),
      key: "teamDomainsId",
    },
    {
      title: "Action",
      key: "id",
      fixed: "right",
      width: 100,
      render: (_, { id }) => (
        <Popconfirm
          title={`Remove Team from project`}
          description="Are you sure to remove this team from project?"
          onConfirm={() => {
            confirm(id);
          }}
          onCancel={cancel}
          okText="Confirm"
          cancelText="No"
          placement="topLeft"
        >
          <button className="p-2 bg-red-500 rounded-md text-sm text-white">
            Remove
          </button>
        </Popconfirm>
      ),
    },
  ];

  //This function get the new employees when
  //CheckforNewEmployees gets true
  const getTeamsData = async () => {
    setLoading(true);
    const res = await getProjectTeams(projectId).then((res) => {
      if (res.data) {
        setLoading(false);
        setTeamsData(res.data);
      } else {
        message.error("Error while fetching project teams!");
      }
    });
  };

  const confirm = (id) => {
    console.log(id);
    DeleteTeam(id).then((res) => {
      console.log(res);
      if (!res.error) {
        //if employees is sucessfully deleted reload all employees and show message
        getTeamsData();
        message.success(`Sucessfully removed team from project!`);
      } else {
        message.error(`Error while removing team from project!`);
      }
    });
  };
  const cancel = (e) => {};

  //fetch employee if a new employee has been added
  useEffect(() => {
    if (isNewEmployee) {
      getTeamsData();
      setisNewEmployee(false);
    }
  }, [isNewEmployee]);

  //Call the getNewEmployees function when needed
  useEffect(() => {
    getTeamsData();
  }, []);
  return (
    <div className="flex flex-col justify-center items-center -mt-4">
      <div className="project_employees_data_table w-full">
        <Table
          columns={columns}
          dataSource={teamsData}
          scroll={{
            x: 1000,
          }}
          className="rounded-none"
          style={{ borderRadius: "0 !impotant" }}
          loading={loading}
          rowClassName={() => "team-employees"}
        />
      </div>
    </div>
  );
}
