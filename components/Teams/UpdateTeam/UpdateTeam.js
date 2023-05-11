import React from "react";
import { Form, Input, message, Select } from "antd";
import { useState, useEffect } from "react";
import { UpdateTeamAPI, getTeamDomains } from "../../../client/requests";
import { useSession } from "next-auth/react";
export default function UpdateTeam({ teamInformation, setIsUpdateTeam }) {
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(false);
  const [teamDomains, setTeamDomains] = useState([]);
  const [form] = Form.useForm();
  function onFinish(values) {
    setLoading(true);
    const payload = {
      ...values,
      id: teamInformation.id,
      user_id: session.user.id,
    };
    UpdateTeamAPI(payload).then((res) => {
      console.log(res);
      if (res.data) {
        message.success("Team updated Sucessfully!");
        setIsUpdateTeam(false);
        setLoading(false);
      } else {
        message.error("Team update Failed!");
        setLoading(false);
      }
    });
  }

  //get all the team domains on component mount
  useEffect(() => {
    setLoading(true);
    getTeamDomains().then((res) => {
      setTeamDomains(res.data);
      setLoading(false);
    });
  }, []);
  return (
    <div className="md:ml-4">
      <Form
        form={form}
        layout="vertical"
        name="create team"
        onFinish={onFinish}
        style={{
          width: "100%",
        }}
        scrollToFirstError
        disabled={loading}
      >
        <Form.Item
          name="team_name"
          rules={[
            {
              required: true,
              message: "Please enter valid team name",
            },
            {
              min: 5,
              message: "Team name must be atleast 5 characters long!",
            },
            {
              whitespace: true,
              message: "Team name must be atleast 1 non-whitespace character!",
            },
          ]}
        >
          <Input
            placeholder="Enter a team name"
            defaultValue={teamInformation.team_name}
          />
        </Form.Item>
        <Form.Item
          name="team_domain_id"
          rules={[
            {
              required: true,
              message: "Please select a team Domain!",
            },
          ]}
        >
          <Select placeholder="Select your a domain for the team">
            {teamDomains.map((item) => {
              return (
                <Select.Option key={item.id} value={item.id}>
                  {item.title}
                </Select.Option>
              );
            })}
          </Select>
        </Form.Item>
        <Form.Item
          name="description"
          rules={[
            {
              required: true,
              message: "Please enter valid team description",
            },
            {
              min: 5,
              message: "Team description must be atleast 5 characters long!",
            },
            {
              whitespace: true,
              message:
                "Team description must be atleast 1 non-whitespace character!",
            },
          ]}
        >
          <Input
            placeholder="Enter a Team description"
            defaultValue={teamInformation.description}
          />
        </Form.Item>
        <div className="flex">
          <button
            className="bg-white bg-opacity-10 hover:bg-opacity-20 transition-all w-24 h-10 p-2 mr-2 rounded-md flex flex-row justify-center items-center text-lg font-semibold mt-4 disabled:opacity-50"
            onClick={() => setIsUpdateTeam(false)}
          >
            <p>Cancel</p>
          </button>
          <button
            className="bg-primary w-24 h-10 p-2 rounded-md flex flex-row justify-center items-center text-lg font-semibold mt-4 disabled:opacity-50"
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
              <p>Update</p>
            )}
          </button>
        </div>
      </Form>
    </div>
  );
}
