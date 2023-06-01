import { Drawer, message } from "antd";
import React, { useRef, useState } from "react";
import { BiCloudDownload } from "react-icons/bi";
import { DownloadWork } from "../../../client/requests";

export default function WorkSubmission(props) {
  function downloadResource(url) {
    DownloadWork(url).then((res) => {
      if (!res.data) {
        message.error("Error while downloading work submission!");
      } else {
        message.success("Work submission download started!");
      }
    });
  }
  return (
    <Drawer
      title="Work Submission"
      onClose={() => props.setIsWorkSubmission(false)}
      open={props.isWorkSubmission}
      bodyStyle={{ paddingBottom: 80 }}
    >
      <div className="flex flex-col">
        <h1 className="text-lg font-semibold">Previous submissions</h1>
        <p className="text-sm">
          Following are all the work submitted against ticket
        </p>
        {props.work.map((w, index) => {
          return (
            <div
              className="p-4 mt-2 border-[1.5px] border-gray-500 bg-gray-800 rounded-md flex flex-col"
              key={index}
            >
              <p>Submission Id: {index + 1}</p>
              <button
                className="bg-gray-400 rounded-sm py-2 mt-2 flex justify-center"
                onClick={() => downloadResource(w.url)}
              >
                <BiCloudDownload size={20} color="black" />
                <p className="text-black ml-2 font-semibold">
                  Download Submitted Work
                </p>
              </button>
            </div>
          );
        })}
      </div>
    </Drawer>
  );
}
