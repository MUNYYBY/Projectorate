import moment from "moment";
import React from "react";

export default function LogContainer({ log, index }) {
  const handleLogOperation = (op) => {
    let BG_COLOR = "bg-white";
    let FG_COLOR = "text-white";
    if (op.title.toLowerCase().includes("created")) {
      BG_COLOR = "bg-secondry";
      FG_COLOR = "text-secondry";
    } else if (op.title.toLowerCase().includes("updated")) {
      BG_COLOR = "bg-pOrange";
      FG_COLOR = "text-pOrange";
    } else if (op.title.toLowerCase().includes("assigned")) {
      BG_COLOR = "bg-intermediate";
      FG_COLOR = "text-intermediate";
    } else if (op.title.toLowerCase().includes("removed")) {
      BG_COLOR = "bg-cyan-500";
      FG_COLOR = "text-cyan-500";
    } else if (op.title.toLowerCase().includes("deleted")) {
      BG_COLOR = "bg-red-500";
      FG_COLOR = "text-red-500";
    }
    return (
      <div
        className={`text-sm font-thin p-2 rounded-lg ${BG_COLOR} bg-opacity-10 ${FG_COLOR}`}
      >
        {op.title}
      </div>
    );
  };

  const handleLogRepresentative = (log) => {
    let placeholder = log.description;
    if (log.LogsOperations.title.toLowerCase().includes("project")) {
      placeholder = log.project_name;
    } else if (log.LogsOperations.title.toLowerCase().includes("team")) {
      placeholder = log.team_name;
    } else if (log.LogsOperations.title.toLowerCase().includes("employee")) {
      placeholder = log.employee_name;
    } else if (log.LogsOperations.title.toLowerCase().includes("ticket")) {
      placeholder = log.ticket_name;
    }
    return <div className={`text-md italic `}>{placeholder}</div>;
  };
  return (
    <header className="px-6 h-20 bg-gray-700 bg-opacity-75 flex flex-row justify-between items-center w-full mb-[1.5px] min-w-max">
      <div className="flex flex-row justify-center items-center">
        <h1 className="font-bold mr-4 opacity-50 w-6">{index + 1}</h1>
        <div className="h-8 w-8 mr-3 rounded-lg flex justify-center items-center bg-gray-500 bg-opacity-20 sm:flex hidden">
          <p className="font-medium text-sm">
            {log.user
              ? log.user.employee.first_name[0] + log.user.employee.last_name[0]
              : "XX"}
          </p>
        </div>
        <h1 className="font-semibold mr-4 min-w-fit">
          {log.user
            ? log.user.employee.first_name + " " + log.user.employee.last_name
            : "Deleted User"}
        </h1>
        <div className="font-semibold mr-2 min-w-fit">
          {handleLogOperation(log.LogsOperations)}
        </div>
        <div className="mr-2">{handleLogRepresentative(log)}</div>
      </div>
      <h1 className="text-sm opacity-50">{moment(log.createdAt).fromNow()}</h1>
    </header>
  );
}
