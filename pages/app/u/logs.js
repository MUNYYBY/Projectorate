import React, { useState, useEffect } from "react";
import { CgInbox } from "react-icons/cg";
import { HiOutlineViewBoards } from "react-icons/hi";
import { IoIosHelpCircle } from "react-icons/io";
import { RiFolderHistoryLine } from "react-icons/ri";
import { getAllLogs } from "../../../client/requests";
import moment from "moment/moment";
import LogContainer from "../../../components/Logs/LogContainer";

export default function Logs({ logsData }) {
  const [logs, setLogs] = useState([]);

  //** Initial fetching */
  async function handleFetching() {
    const logsResponse = await getAllLogs();
    const l = logsResponse.data;
    setLogs(l);
  }
  useEffect(() => {
    handleFetching();
  }, []);
  return (
    <div className="logs-panel">
      <header className="flex flex-row items-center justify-between border-b-2 border-b-gray-900 px-4 py-2 relative">
        <div className="flex flex-row items-center">
          <div className="teams-panel-icon mr-3">
            <RiFolderHistoryLine size={26} />
          </div>
          <h1 className="text-lg font-bold">Logs Panel</h1>
        </div>
        <div className="flex flex-row items-center">
          {/* <div className="help-icon px-2">
            <CgInbox size={24} />
          </div>
          <div className="inbox-icon px-2">
            <IoIosHelpCircle size={26} />
          </div> */}
        </div>
      </header>
      <div className="container px-4">
        <div className="my-4">
          <h1 className="font-bold text-2xl">System Wide Logs</h1>
          <p className="opacity-50">
            This panel shows all the main actions performed in the system{" "}
          </p>
        </div>

        <header className="sticky z-50 top-0 px-6 h-14 bg-gray-600 bg-opacity-50 flex flex-row justify-between items-center w-full rounded-t-lg backdrop-blur-sm">
          <h1>All logs</h1>
          <h1 className="sm:flex hidden">
            <span className="opacity-40 mr-2">As of </span>
            {moment().format("MMMM Do YYYY h:mm A")}
          </h1>
        </header>
        <div className="flex flex-col justify-center items-center overflow-x-hidden">
          <div className="log-container inline-flex flex-row justify-center w-full overflow-x-scroll">
            <div className="flex flex-col w-full">
              {logs.map((log, index) => {
                return (
                  <div className="log" key={index}>
                    <LogContainer log={log} index={index} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
