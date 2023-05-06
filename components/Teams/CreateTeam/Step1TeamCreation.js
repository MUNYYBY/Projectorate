import React from "react";
import { Form, Input, InputNumber, Select, message } from "antd";
import { useState, useEffect } from "react";

export default function Step1TeamCreation(props) {
  const [form] = Form.useForm();
  function onFinish(values) {
    props.setTeamName(values.team_name);
    props.setProjectSelected(values.team_project);
    props.setCreationPhase(1);
  }
  return (
    <div className="w-full">
      <Form
        form={form}
        layout="vertical"
        name="create team - part 1"
        onFinish={onFinish}
        style={{
          width: "100%",
        }}
        scrollToFirstError
      >
        <Form.Item
          name="team_name"
          label="Team's Name"
          rules={[
            {
              required: true,
              message: "Please enter valid Team name",
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
          <Input placeholder="Enter a Team name" value={props.teamName} />
        </Form.Item>
        <Form.Item
          name="team_project"
          label="Team's Project"
          rules={[
            {
              required: true,
              message: "Please select a Team project!",
            },
          ]}
        >
          <Select placeholder="Select a project for the team">
            {props.projects.map((item) => {
              return (
                <Select.Option key={item.id} value={item.id}>
                  {item.project_name}
                </Select.Option>
              );
            })}
          </Select>
        </Form.Item>
        <button
          className="bg-primary h-12 p-2 rounded-md flex flex-row justify-center items-center w-full text-lg font-semibold mt-4 disabled:opacity-50"
          disabled={props.loading}
        >
          <p>Next</p>
        </button>
      </Form>
    </div>
  );
}
