import React from "react";
import { Form, Input, Select } from "antd";
import { useState, useEffect } from "react";

export default function Step2TeamCreation(props) {
  const [form] = Form.useForm();
  function onFinish(values) {
    props.setTeamDetails(values.team_description);
    props.setTeamDomainSelected(values.team_domain);
    props.setIsSubmitted(true);
  }
  return (
    <div className="w-full">
      <Form
        form={form}
        layout="vertical"
        name="create Team - part 2"
        onFinish={onFinish}
        style={{
          width: "100%",
        }}
        scrollToFirstError
        disabled={props.loading}
      >
        <Form.Item
          name="team_domain"
          label="Team Domain"
          rules={[
            {
              required: true,
              message: "Please select a Team Domain!",
            },
          ]}
        >
          <Select placeholder="Select your a domain for the team">
            {props.teamDomains.map((item) => {
              return (
                <Select.Option key={item.id} value={item.id}>
                  {item.title}
                </Select.Option>
              );
            })}
          </Select>
        </Form.Item>
        <Form.Item
          name="team_description"
          label="Team Description"
          rules={[
            {
              required: true,
              message: "Please enter valid Team description",
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
          <Input placeholder="Enter a Team description" />
        </Form.Item>
        <button
          className="bg-primary h-12 p-2 rounded-md flex flex-row justify-center items-center w-full text-lg font-semibold mt-4 disabled:opacity-50"
          disabled={props.loading}
        >
          {props.loading ? (
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
            <p>Create Team</p>
          )}
        </button>
      </Form>
    </div>
  );
}
