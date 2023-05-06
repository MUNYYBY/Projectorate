import React, { useState, useEffect } from "react";
import {
  getAllProjects,
  getAllTeams,
  getEmployees,
  getTicketsPiority,
  getTicketsStatus,
} from "../../client/requests";

export default function CreateTicketModel({ teamsData = [] }) {
  //** States */
  const { data: session, status } = useSession();
  const [teams, setTeams] = useState(teamsData);
  const [employees, setEmployees] = useState([]);
  const [ticketStatus, setTicketStatus] = useState([]);
  const [ticketPiority, setTicketPiority] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);

  //** Check which among states are empty and fetch those */
  useEffect(() => {
    if (teams.length == 0) {
      setLoading(true);
      getAllTeams().then((res) => {
        setTeams(res.data);
        setLoading(false);
      });
    }
    if (employees.length == 0) {
      setLoading(true);
      getEmployees().then((res) => {
        setEmployees(res.data);
        setLoading(false);
      });
    }
    if (ticketStatus.length == 0) {
      setLoading(true);
      getTicketsStatus.then((res) => {
        setTicketStatus(res.data);
        setLoading(false);
      });
    }
    if (ticketPiority.length == 0) {
      setLoading(true);
      getTicketsPiority.then((res) => {
        setTicketPiority(res.data);
        setLoading(false);
      });
    }
  }, []);
  return <div>CreateTicketModel</div>;
}
