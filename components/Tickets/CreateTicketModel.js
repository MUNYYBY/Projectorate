import React, { useState, useEffect } from "react";
import {
  CreateTicket,
  getAllTeams,
  getEmployees,
  getTicketsPiority,
  getTicketsStatus,
} from "../../client/requests";
import { useSession } from "next-auth/react";
import { DatePicker, Select, message } from "antd";
import { RxCross1 } from "react-icons/rx";
import { BsWindowDock } from "react-icons/bs";
import { FaFlag } from "react-icons/fa";
import { Cascader, Steps, Form, Input } from "antd";
import TabDevider from "../Devider/Devider";
import moment from "moment";
import { motion } from "framer-motion";

export default function CreateTicketModel({
  teamsData = [],
  setIsCreateTicket,
}) {
  //** States */
  const { data: session, status } = useSession();
  const [teams, setTeams] = useState(teamsData);
  const [employees, setEmployees] = useState([]);
  const [ticketStatus, setTicketStatus] = useState([]);
  const [ticketPiority, setTicketPiority] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState(false);

  //** Ant Design */
  const { TextArea } = Input;

  //** Form initialitzation */
  const [form] = Form.useForm();

  //** Form submission */
  function onFinish(values) {
    const payload = {
      title: values.title,
      description: values.description,
      deadline: values.deadline,
      userId: session.user.id,
      teamId: values.team,
      employeeId: values.employee,
      ticketStatusId: values.ticket_status,
      ticketPiorityId: values.ticket_piority,
    };
    CreateTicket(payload).then((res) => {
      setLoading(true);
      if (!res.error) {
        setLoading(false);
        message.success(`Created and assigned a ticket to an employee!`);
        setIsCreateTicket(false);
      } else {
        message.error(
          `Error while Creating and assigning a ticket to an employee!`
        );
        setLoading(false);
      }
    });
  }

  //** Check which among states are empty and fetch those */

  async function handleFetching() {
    if (teams.length == 0) {
      setLoading(true);
      await getAllTeams().then((res) => {
        if (!res.error) {
          setTeams(res.data);
          setLoading(false);
        } else {
          message.error("Error while getting all teams!");
        }
      });
    }
    if (employees.length == 0) {
      setLoading(true);
      await getEmployees().then((res) => {
        if (!res.error) {
          setEmployees(res.data);
          setLoading(false);
        } else {
          message.error("Error while getting all employees!");
        }
      });
    }
    if (ticketStatus.length == 0) {
      setLoading(true);
      await getTicketsStatus().then((res) => {
        if (!res.error) {
          setTicketStatus(res.data.data);
          setLoading(false);
        } else {
          message.error("Error while getting tickets status!");
        }
      });
    }
    if (ticketPiority.length == 0) {
      setLoading(true);
      await getTicketsPiority().then((res) => {
        if (!res.error) {
          setTicketPiority(res.data.data);
          setLoading(false);
        } else {
          message.error("Error while getting tickets piority!");
        }
      });
    }
  }
  useEffect(() => {
    handleFetching();
  }, []);

  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.15, ease: "easeIn" }}
      className="flex flex-col items-center z-10 w-full"
    >
      <div className="create-ticket-model mb-4">
        <div className="bg-gray-900 p-4 rounded-md drop-shadow-lg flex flex-col justify-between items-center w-[22rem] sm:w-[35rem]">
          <header className="flex flex-row justify-between items-center w-full">
            <div className="flex justify-center items-center">
              <BsWindowDock size={24} />
              <h1 className="ml-2 font-semibold text-lg">Create Ticket</h1>
            </div>
            <button
              className="cancel-btn opacity-60 hover:opacity-100"
              onClick={() => setIsCreateTicket(false)}
            >
              <RxCross1 size={24} />
            </button>
          </header>
          <div className="my-4 w-full">
            <TabDevider
              color="bg-gray-800"
              width="w-full"
              opacity="opacity-1"
            />
          </div>
          <Form
            form={form}
            layout="vertical"
            name="create project - part 1"
            onFinish={onFinish}
            style={{
              width: "100%",
            }}
            scrollToFirstError
            disabled={loading}
          >
            <Form.Item
              name="title"
              label="Title"
              rules={[
                {
                  required: true,
                  message: "Ticket title is required!",
                },
                {
                  min: 5,
                  message: "Ticket title must be atleast 5 characters long!",
                },
                {
                  whitespace: true,
                  message:
                    "Ticket title must be atleast 1 non-whitespace character!",
                },
              ]}
            >
              <Input
                placeholder="Enter a ticket title"
                //   value={props.projectName}
              />
            </Form.Item>
            <Form.Item
              name="description"
              label="Description"
              rules={[
                {
                  required: true,
                  message: "Description title is required!",
                },
                {
                  min: 5,
                  message:
                    "Ticket Description must be atleast 5 characters long!",
                },
                {
                  whitespace: true,
                  message:
                    "Ticket Description must be atleast 1 non-whitespace character!",
                },
              ]}
            >
              <TextArea
                rows={4}
                placeholder="Enter a description"
                //   value={props.projectName}
              />
            </Form.Item>
            <div className="flex flex-row justify-between">
              <Form.Item
                name="team"
                label="Team"
                rules={[
                  {
                    required: true,
                    message: "Please select a team!",
                  },
                ]}
                className="w-full"
              >
                <Select
                  placeholder="Select team"
                  onChange={(item) => {
                    console.log(item);
                    setSelectedTeam(item);
                  }}
                >
                  {teams.map((item) => {
                    return (
                      <Select.Option key={item.id} value={item.id}>
                        {item.team_name}
                      </Select.Option>
                    );
                  })}
                </Select>
              </Form.Item>
              <Form.Item
                name="employee"
                label="Assignee Employee"
                rules={[
                  {
                    required: true,
                    message: "Please select a Assignee Employee!",
                  },
                ]}
                className="w-full ml-2"
              >
                <Select disabled={!selectedTeam} placeholder="Select employee">
                  {employees.map((item) => {
                    if (
                      item.UserTeams.find(
                        (team) => team.team_id == selectedTeam
                      )
                    ) {
                      return (
                        <Select.Option key={item.id} value={item.id}>
                          {item.first_name} {item.last_name}
                        </Select.Option>
                      );
                    }
                  })}
                </Select>
              </Form.Item>
            </div>
            <div className="flex flex-row justify-between">
              <Form.Item
                name="ticket_status"
                label="Ticket status"
                rules={[
                  {
                    required: true,
                    message: "Please select a ticket status!",
                  },
                ]}
                className="w-full"
              >
                <Select placeholder="Select a status">
                  {ticketStatus.map((item) => {
                    const color =
                      item.title == "Todo"
                        ? "green"
                        : item.title == "In-progress"
                        ? "orange"
                        : item.title == "Done"
                        ? "purple"
                        : item.title == "Resolved"
                        ? "blue"
                        : item.title == "Tested but not resolved"
                        ? "red"
                        : "white";
                    return (
                      <Select.Option key={item.id} value={item.id}>
                        <div className="flex justify-start items-center -mb-7">
                          <div
                            className="h-3 w-3 rounded-full opacity-30 mr-2"
                            style={{ backgroundColor: color }}
                          ></div>
                          {item.title}
                        </div>
                      </Select.Option>
                    );
                  })}
                </Select>
              </Form.Item>
              <Form.Item
                name="ticket_piority"
                label="Ticket piority"
                rules={[
                  {
                    required: true,
                    message: "Please give a ticket piority!",
                  },
                ]}
                className="w-full ml-2"
              >
                <Select placeholder="Select a piority">
                  {ticketPiority.map((item) => {
                    const color =
                      item.title == "Urgent"
                        ? "red"
                        : item.title == "High"
                        ? "yellow"
                        : item.title == "Normal"
                        ? "green"
                        : "white";
                    return (
                      <Select.Option key={item.id} value={item.id}>
                        <div className="flex justify-start items-center -mb-7">
                          <FaFlag color={color} className="mr-2" />
                          {item.title}
                        </div>
                      </Select.Option>
                    );
                  })}
                </Select>
              </Form.Item>
            </div>
            <Form.Item
              name="deadline"
              label="Ticket Deadline"
              rules={[
                {
                  required: true,
                  message: "Ticket Deadline is required!",
                },
              ]}
            >
              <DatePicker
                className="w-full"
                disabledDate={(current) => {
                  return (
                    moment().add(-1, "days") >= current ||
                    moment().add(1, "month") <= current
                  );
                }}
              />
            </Form.Item>

            <button
              className="bg-primary h-12 p-2 rounded-md flex flex-row justify-center items-center w-full text-lg font-semibold mt-4 disabled:opacity-50"
              disabled={loading}
            >
              {loading ? (
                <svg
                  class="animate-spin -ml-1 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  ></circle>
                  <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                <p>Create</p>
              )}
            </button>
          </Form>
        </div>
      </div>
    </motion.div>
  );
}
