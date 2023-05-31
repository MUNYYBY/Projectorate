import React from "react";
import { useState, useEffect } from "react";
import { RxCross1 } from "react-icons/rx";
import TabDevider from "../../Devider/Devider";
import { Form, Select, message } from "antd";
import {
  ChangeProjectStatus,
  ChangeTeamStatus,
  createProject,
  getProjectDomains,
  getProjectStatus,
  getTeamStatus,
} from "../../../client/requests";
import { useSession } from "next-auth/react";
import { motion } from "framer-motion";
export default function ChangeStatus(props) {
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [teamStatus, setTeamStatus] = useState([]);

  const [form] = Form.useForm();

  function onFinish(values) {
    createProjectCall(values.status);
  }

  const createProjectCall = (statusId) => {
    setLoading(true);
    ChangeTeamStatus(props.team.id, statusId).then((res) => {
      if (res?.error) {
        message.error("Team Update failed!");
        setLoading(false);
      } else {
        message.success("Team Updated successfully!");
        props.setIsChangeTeamStatus(false);
      }
    });
  };

  //get all the project status on component mount
  useEffect(() => {
    setLoading(true);
    getTeamStatus().then((res) => {
      setTeamStatus(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="create-project-container h-full w-full fixed overflow-hidden top-0 left-0 z-[999] flex justify-center items-start">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.15 }}
        className="flex flex-col items-center z-10 w-full"
      >
        <div className="w-11/12 md:w-[25rem] lg:w-[35rem] mt-20 ">
          <div className="flex flex-col items-center p-6 bg-gray-900 rounded-md">
            <div className="create-project-header flex flex-row justify-between w-full mb-6">
              <h1 className="font-bold text-lg"></h1>
              <button
                className="cancel-btn opacity-60 hover:opacity-100"
                onClick={() => props.setIsChangeTeamStatus(false)}
              >
                <RxCross1 size={24} />
              </button>
            </div>
            <div className="flex flex-col justify-center items-center">
              <svg width="123" height="97" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fill-rule="evenodd">
                  <circle fill="#7B67EE" cx="61.5" cy="56.5" r="39.5"></circle>
                  <path
                    d="M54.57 17.6A39.5 39.5 0 0 0 88.44 85.4 39.5 39.5 0 1 1 54.56 17.6z"
                    fill="#6C5AD4"
                  ></path>
                  <path
                    d="M22.25 49.42a39.89 39.89 0 0 0-.54 10.1c-2.55 2.88-3.67 5.68-3.01 8.16 2.2 8.19 23.14 9.7 46.77 3.36 23.64-6.34 41.02-18.11 38.83-26.3-.73-2.74-3.57-4.73-7.9-5.93a39.65 39.65 0 0 0-5.3-7.98c17.32-.7 29.74 2.67 31.64 9.76 3.04 11.32-21.92 27.84-55.75 36.9C33.17 86.57 3.3 84.74.26 73.42c-1.88-7 6.96-16 21.99-24z"
                    fill="#C1B6FF"
                    opacity=".4"
                  ></path>
                  <path
                    d="M22 50.97a39.7 39.7 0 0 0-.2 1.54C12.4 58.61 7.24 65.1 8.66 70.37c2.7 10.11 28.57 11.97 57.76 4.15 29.19-7.82 50.65-22.36 47.94-32.47-1.46-5.45-9.64-8.5-21.45-8.94-.26-.36-.54-.72-.82-1.08 15.21-.26 25.97 2.95 27.68 9.36 2.89 10.77-20.86 26.49-53.03 35.11-32.18 8.62-60.6 6.88-63.5-3.89C1.55 66.3 9.04 58.26 22 50.97zm-.32 3.13c-.05.72-.07 1.45-.08 2.18-5.35 4.38-8.05 8.78-7.05 12.5 2.4 9 25.38 10.64 51.3 3.7 25.94-6.95 45.01-19.87 42.6-28.85-1.05-3.94-6.05-6.47-13.52-7.48-.36-.6-.74-1.2-1.13-1.77 9.9.72 16.67 3.57 17.95 8.36 2.58 9.62-17.83 23.44-45.58 30.88-27.76 7.44-52.35 5.67-54.92-3.95-1.24-4.6 2.81-10.19 10.43-15.57z"
                    fill="#C1B6FF"
                    opacity=".4"
                  ></path>
                  <circle fill="#B4A7FF" cx="34.5" cy="29.5" r="12.5"></circle>
                  <path
                    d="M29.45 18.06a12.5 12.5 0 0 0 15.1 18.88 12.5 12.5 0 1 1-15.1-18.88z"
                    fill="#9A8CED"
                  ></path>
                  <path
                    d="M104.72 6.72l1.84-5.24a1 1 0 0 1 1.88 0l1.84 5.24 5.24 1.84a1 1 0 0 1 0 1.88l-5.24 1.84-1.84 5.24a1 1 0 0 1-1.88 0l-1.84-5.24-5.24-1.84a1 1 0 0 1 0-1.88l5.24-1.84zM75.93 4.93l.63-1.8a1 1 0 0 1 1.88 0l.63 1.8 1.8.63a1 1 0 0 1 0 1.88l-1.8.63-.63 1.8a1 1 0 0 1-1.88 0l-.63-1.8-1.8-.63a1 1 0 0 1 0-1.88l1.8-.63zM17.78 92.78l.28-.8a1 1 0 0 1 1.88 0l.28.8.8.28a1 1 0 0 1 0 1.88l-.8.28-.28.8a1 1 0 0 1-1.88 0l-.28-.8-.8-.28a1 1 0 0 1 0-1.88l.8-.28z"
                    fill="#E6E2FF"
                  ></path>
                </g>
              </svg>
              <h1 className="font-bold text-xl my-4">
                Change status of {props.team.team_name}
              </h1>
            </div>
            <TabDevider width="w-full" />
            <div className="w-full my-4">
              <Form
                form={form}
                layout="vertical"
                name="update project"
                onFinish={onFinish}
                style={{
                  width: "100%",
                }}
                scrollToFirstError
                // disabled={loading}
              >
                <Form.Item
                  name="status"
                  label="Project Status"
                  rules={[
                    {
                      required: true,
                      message: "Please select a Project Status!",
                    },
                  ]}
                >
                  <Select placeholder="Select status for the project">
                    {teamStatus.map((item) => {
                      return (
                        <Select.Option key={item.id} value={item.id}>
                          {item.title}
                        </Select.Option>
                      );
                    })}
                  </Select>
                </Form.Item>
                <button
                  className="bg-primary h-12 p-2 rounded-md flex flex-row justify-center items-center w-full text-lg font-semibold mt-4 disabled:opacity-50"
                  disabled={loading}
                  type="submit"
                >
                  <p>Save</p>
                </button>
              </Form>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="h-full w-full bg-black bg-opacity-75 absolute top-0 left-0 z-0"
      ></motion.div>
    </div>
  );
}
