import { useState, useEffect } from "react";

export default function SearchModule({
  type = "projects",
  title = "SEARCH",
  description = "Take a dive in to the project and its attributes. Find anything you are looking for in this project",
  data = [],
  setFilteredData = [],
}) {
  function handleSearch(val) {
    const value = val.target.value;
    if (type == "projects") {
      setFilteredData(
        data.filter((e) => {
          return e.project_name.toLowerCase().includes(value.toLowerCase());
        })
      );
    }
    if (type == "teams") {
      setFilteredData(
        data.filter((e) => {
          return e.team_name.toLowerCase().includes(value.toLowerCase());
        })
      );
    } else if (type === "employees") {
      setFilteredData(
        data.filter((e) => {
          return (
            e.first_name.toLowerCase().includes(value.toLowerCase()) ||
            e.last_name.toLowerCase().includes(value.toLowerCase())
          );
        })
      );
    }
  }
  return (
    <div className="Search-module">
      <div className="Search-contents">
        <h1 className="font-semibold text-xl opacity-80">{title}</h1>
        <p className="text-sm opacity-60 mt-1">{description}</p>
      </div>
      <div className="Search-bar bg-gray-900 py-2 border-2 border-black rounded-md flex flex-row justify-between items-center px-4 mt-4">
        <input
          placeholder={`Search ${type}...`}
          type="text"
          className="bg-transparent md:w-4/6 sm:w-[8rem] w-[6rem] focus:outline-0"
          onChange={handleSearch}
        />
        <button className="bg-primary py-2 px-3 rounded-md">
          Find in “{type}”
        </button>
      </div>
    </div>
  );
}
