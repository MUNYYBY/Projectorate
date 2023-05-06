import React, { useState, useEffect } from "react";
import {
  getAllProjects,
  getAllTeams,
  getEmployees,
} from "../../client/requests";

export default function CreateTicketModel({
  projectsData = [],
  teamsData = [],
}) {
  //** States */
  const { data: session, status } = useSession();
  const [projects, setProjects] = useState(projectsData);
  const [teams, setTeams] = useState(teamsData);
  const [employees, setEmployees] = useState([]);
  const [ticketStatus, setTicketStatus] = useState([]);
  const [ticketPiority, setTicketPiority] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);

  //** Check which among states are empty and fetch those */
  useEffect(() => {
    if (projects.length == 0) {
      getAllProjects().then((res) => {
        setProjects(res.data);
      });
    }
    if (teams.length == 0) {
      getAllTeams().then((res) => {
        setTeams(res.data);
      });
    }
    if (employees.length == 0) {
      getEmployees().then((res) => {
        setEmployees(res.data);
      });
    }
  }, []);
  return <div>CreateTicketModel</div>;
}
