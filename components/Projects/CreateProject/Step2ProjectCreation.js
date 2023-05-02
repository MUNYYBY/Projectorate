import React from "react";
import { Form, Input, Select } from "antd";
import { useState, useEffect } from "react";

export default function Step2ProjectCreation(props) {
  const [form] = Form.useForm();
  function onFinish(values) {
    props.setProjectDetails(values.project_description);
    props.setProjectDomainSelected(values.project_domain);
    props.setIsSubmitted(true);
  }
  return (
    <div className="w-full">
      <Form
        form={form}
        layout="vertical"
        name="create project - part 2"
        onFinish={onFinish}
        style={{
          width: "100%",
        }}
        scrollToFirstError
        disabled={props.loading}
      >
        <Form.Item
          name="project_domain"
          label="Project Domain"
          rules={[
            {
              required: true,
              message: "Please select a Project Domain!",
            },
          ]}
        >
          <Select placeholder="Select your a domain for the project">
            {props.projectDomains.map((item) => {
              return (
                <Select.Option key={item.id} value={item.id}>
                  {item.title}
                </Select.Option>
              );
            })}
          </Select>
        </Form.Item>
        <Form.Item
          name="project_description"
          label="Project Description"
          rules={[
            {
              required: true,
              message: "Please enter valid project description",
            },
            {
              min: 5,
              message: "Project description must be atleast 5 characters long!",
            },
            {
              whitespace: true,
              message:
                "Project description must be atleast 1 non-whitespace character!",
            },
          ]}
        >
          <Input placeholder="Enter a project description" />
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
            <p>Create Project</p>
          )}
        </button>
      </Form>
    </div>
  );
}
