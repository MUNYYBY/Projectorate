import { Table, Segmented, message, Popconfirm } from "antd";
import { useEffect, useState } from "react";
import {
  DeleteEmployeeFromProject,
  DeleteTeam,
  deleteEmployee,
  getEmployees,
  getProjectTeams,
  getProjectTickets,
  getTeamTickets,
} from "../../../client/requests";
import moment from "moment/moment";
import InformationTag from "../../InformationTag/InformationTag";

export default function AllTickets({
  projectId = null,
  teamId = null,
  isNewEmployee,
  setisNewEmployee,
}) {
  const [ticketsData, setTicketsData] = useState([]);
  const [loading, setLoading] = useState(false);

  const columns = [
    {
      title: "Title",
      width: 150,
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Description",
      dataIndex: "description",
      width: 300,
      key: "description",
    },
    {
      title: "Project",
      render: (_, { project }) => (
        <InformationTag
          title={project.project_name}
          type="secondry"
          size="md"
        />
      ),
      key: "projectId",
    },
    {
      title: "Team",
      render: (_, { team }) => (
        <InformationTag title={team.team_name} type="pOrange" size="md" />
      ),
      key: "teamId",
    },
    {
      title: "Assigned to",
      render: (_, { employee }) => (
        <InformationTag
          title={employee.first_name + " " + employee.last_name}
          type="base"
          size="md"
        />
      ),
      key: "AssignedTo",
    },
    {
      title: "Status",
      render: (_, { TicketStatus }) => <h1>{TicketStatus.title}</h1>,
      key: "TicketStatus",
    },
    {
      title: "Piority",
      render: (_, { TicketPiority }) => <h1>{TicketPiority.title}</h1>,
      key: "TicketStatus",
    },
    {
      title: "Deadline",
      render: (_, { deadline }) => (
        <h1>{moment(deadline).format("MMMM Do YYYY")}</h1>
      ),
      key: "Deadline",
    },
  ];

  //This function get the new employees when
  //CheckforNewEmployees gets true
  const getTicktsData = async () => {
    setLoading(true);
    if (projectId) {
      const res = await getProjectTickets(projectId).then((res) => {
        if (res.data) {
          setLoading(false);
          setTicketsData(res.data.result);
        } else {
          console.log(res);
          setLoading(false);
          message.error("Error while fetching project tickets!");
        }
      });
    } else if (teamId) {
      const res = await getTeamTickets(teamId).then((res) => {
        if (res.data) {
          setLoading(false);
          setTicketsData(res.data.result);
        } else {
          console.log(res);
          setLoading(false);
          message.error("Error while fetching team tickets!");
        }
      });
    }
  };

  const confirm = (id) => {
    console.log(id);
    DeleteTeam(id).then((res) => {
      console.log(res);
      if (!res.error) {
        //if employees is sucessfully deleted reload all employees and show message
        getTicktsData();
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
      getTicktsData();
      setisNewEmployee(false);
    }
  }, [isNewEmployee]);

  //Call the getNewEmployees function when needed
  useEffect(() => {
    getTicktsData();
  }, []);
  return (
    <div className="flex flex-col justify-center items-center -mt-4">
      <div className="project_employees_data_table w-full">
        <Table
          columns={columns}
          dataSource={ticketsData}
          scroll={{
            x: 1000,
          }}
          className="rounded-none"
          style={{ borderRadius: "0 !impotant" }}
          loading={loading}
        />
      </div>
    </div>
  );
}
