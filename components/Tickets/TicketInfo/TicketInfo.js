import { Drawer, Popconfirm, Tooltip, Skeleton, Select } from "antd";
import { message } from "antd";
import { useEffect, useState } from "react";
import React from "react";
import TabDevider from "../../Devider/Devider";
import {
  ChangeTicketStatus,
  DeleteTicket,
  GetTicketInfo,
  getTicketsStatus,
} from "../../../client/requests";
import { BiTask } from "react-icons/bi";
import moment from "moment";
import { FaFlag } from "react-icons/fa";
import { FiTrash2 } from "react-icons/fi";

import { RiAccountCircleFill } from "react-icons/ri";

export default function TicketInfo(props) {
  const [loading, setLoading] = useState(true);
  const [ticketInfo, setTicketInfo] = useState(null);
  const [ticketStatus, setTicketStatus] = useState([]);
  function AssignEmployeeConfirm(employeeId) {}
  function OnAssignEmployeeCancel() {}

  //** Fetch all avaible employees */

  function handleTicketFetching() {
    if (props.isTicketInfo.id) {
      setLoading(true);
      GetTicketInfo(props.isTicketInfo.id).then((res) => {
        if (!res.error) {
          setTicketInfo(res.data.data);
          setLoading(false);
          console.log(res.data.data);
        } else {
          setLoading(false);
          message.error(
            "Some error occoured while fetching project employees!"
          );
        }
      });
      getTicketsStatus().then((res) => {
        if (!res.error) {
          setTicketStatus(res.data.data);
        } else {
          message.error(
            "Some error occoured while fetching project employees!"
          );
        }
      });
    }
  }
  useEffect(() => {
    handleTicketFetching();
  }, [props.isTicketInfo.id]);

  //** Handle when ticket status changes */
  function handleStatusChange(id) {
    ChangeTicketStatus(ticketInfo.id, id).then((res) => {
      if (!res.error) {
        message.success("Ticket status has been changed!");
        handleTicketFetching();
      } else {
        message.error("Error while changing status of ticket!");
      }
    });
  }

  //** Handle Ticket Delete */
  function handleTicketDelete() {
    setLoading(true);
    DeleteTicket(ticketInfo.id).then((res) => {
      if (!res.error) {
        message.success("Ticket status has been deleted!");
        props.setIsTicketInfo({ id: null });
      } else {
        message.error("Error while changing status of ticket!");
        setLoading(false);
      }
    });
  }

  //** check for ticket status */
  const TicketStatus = (status) => {
    let color = "orange";

    // if (status == "In-progress") {
    //   color = "orange";
    // } else if (status == "Todo") {
    //   color = "green";
    // }else if(status == "")
    return (
      <div className={`rounded-full text-lg bg-opacity-25`}>
        <h1 style={{ color: color }}>{status}</h1>
      </div>
    );
  };

  return (
    <Drawer
      title="Ticket"
      onClose={() => props.setIsTicketInfo({ id: null })}
      open={props.isTicketInfo.id}
      bodyStyle={{ paddingBottom: 80 }}
      width="55%"
    >
      {loading || !ticketInfo ? (
        <>
          <Skeleton active />
          <div className="mt-4">
            <Skeleton active />
          </div>
          <div className="mt-56">
            <Skeleton active />
          </div>
        </>
      ) : (
        <>
          <div className="tickets-info">
            <header className="flex flex-row justify-between">
              <div className="flex flex-col w-full">
                <div className="flex flex-row justify-between items-center w-full">
                  <div className="flex flex-row items-center opacity-75">
                    <BiTask size={32} />
                    <h1 className="text-4xl font-semibold ml-2">
                      {ticketInfo.title}
                    </h1>
                  </div>
                  <h1>
                    <Select
                      defaultValue={() => {
                        const compute = ticketStatus.find(
                          (status) => status.id == ticketInfo.ticketStatusId
                        );
                        console.log(compute);
                        return compute.title;
                      }}
                      style={{
                        width: 200,
                      }}
                      onChange={(id) => handleStatusChange(id)}
                    >
                      {ticketStatus.map((item) => {
                        return (
                          <Select.Option key={item.id} value={item.id}>
                            {item.title}
                          </Select.Option>
                        );
                      })}
                    </Select>
                  </h1>
                </div>
                <div className="text-lg flex flex-row items-center">
                  {TicketStatus(ticketInfo.TicketStatus.title)}
                  <p className="ml-2">
                    {ticketInfo.user.employee.first_name}{" "}
                    {ticketInfo.user.employee.last_name}
                  </p>
                  <p className="opacity-50 ml-2">
                    Opened on{" "}
                    {moment(ticketInfo.createdAt).format("MMMM Do YYYY")}
                  </p>
                </div>
              </div>
            </header>
            <div className="tabdevider h-[1.5px] my-4 bg-opacity-10 bg-white w-full rounded-lg"></div>
            <div className="border-2 border-gray-600 rounded-lg p-4 h-full">
              <div className="h-[20rem]">
                <p className="italic mb-4 font-bold opacity-30">Description</p>
                <div>{ticketInfo.description}</div>
              </div>
            </div>
            <div className="tabdevider h-[1.5px] my-4 bg-opacity-10 bg-white w-full rounded-lg"></div>
            <div className="flex flex-row justify-between w-full h-full">
              <div className="flex flex-col w-1/2">
                <div className="flex justify-between w-full text-base mb-4">
                  <h1 className="opacity-50">Assigned to</h1>
                  <div className="flex items-center">
                    <RiAccountCircleFill size={22} className="mr-2" />
                    <h1 className="">
                      {ticketInfo.employee.first_name}{" "}
                      {ticketInfo.employee.last_name}
                    </h1>
                  </div>
                </div>
                <div className="flex justify-between w-full text-base mb-4">
                  <h1 className="opacity-50">Project</h1>
                  <h1 className="">{ticketInfo.project.project_name}</h1>
                </div>
                <div className="flex justify-between w-full text-base mb-4">
                  <h1 className="opacity-50">Team</h1>
                  <h1 className="">{ticketInfo.team.team_name}</h1>
                </div>
                <div className="flex justify-between w-full text-base mb-4">
                  <h1 className="opacity-50">Deadline</h1>
                  <h1 className="">
                    {moment(ticketInfo.deadline).format("MMMM Do YYYY")}
                  </h1>
                </div>
                <div className="flex justify-between w-full text-base mb-4">
                  <h1 className="opacity-50">Piority</h1>
                  <div className="flex items-center">
                    <FaFlag className="mr-2" />
                    <h1 className="">{ticketInfo.TicketPiority.title}</h1>
                  </div>
                </div>
              </div>
              <div className="tabdevider w-[1.5px] h-[10rem] mx-4 bg-opacity-10 bg-white rounded-lg"></div>
              <div className="w-1/2 flex flex-col">
                <Popconfirm
                  title={`Are you sure you want to delete this ticket?`}
                  onConfirm={() => {
                    handleTicketDelete();
                  }}
                  //   onCancel={cancel}
                  okText="Confirm"
                  cancelText="No"
                  placement="top"
                >
                  <button className="py-2 bg-red-600 bg-opacity-20 hover:bg-opacity-30 transition-all w-full rounded-lg flex flex-row justify-center items-center">
                    <FiTrash2 color="red" size={20} />
                    <p className="text-red-600 tex-xl font-bold ml-2">
                      Delete Ticket
                    </p>
                  </button>
                </Popconfirm>
              </div>
            </div>
          </div>
        </>
      )}
    </Drawer>
  );
}
