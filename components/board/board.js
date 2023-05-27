import { Empty, Tooltip } from "antd";
import moment from "moment/moment";
import React from "react";
import { IoMdGitNetwork } from "react-icons/io";

function StatusColor(title) {
  return title == "Todo"
    ? "#16A34A"
    : title == "In-progress"
    ? "#CA8A04"
    : title == "Done"
    ? "#7C3AED"
    : title == "Resolved"
    ? "#D97706"
    : title == "Tested but not resolved"
    ? "#BE185D"
    : "#2563ED";
}

function TicketContainer({ ticket, setIsTicketInfo }) {
  return (
    <div
      className="ticket bg-gray-800 bg-opacity-90 border-[1.5px] border-gray-600 hover:border-primary transition-all cursor-pointer p-3 rounded-md w-full mb-2"
      onClick={() => setIsTicketInfo({ id: ticket.id })}
    >
      <header className="ticket0-header flex flex-row justify-between items-center">
        <div className="flex items-center">
          <div
            className={`h-5 w-5 rounded-full border-[1.5px] border-opacity-50 mr-2 flex justify-center items-center`}
            style={{
              borderColor: StatusColor(ticket.TicketStatus.title),
            }}
          >
            <div
              className={`h-[4px] w-[4px] rounded-full`}
              style={{
                backgroundColor: StatusColor(ticket.TicketStatus.title),
              }}
            ></div>
          </div>
          <div className="team-name text-sm opacity-75">
            {ticket.team.team_name} #{ticket.id}
          </div>
        </div>
        <Tooltip
          placement="top"
          title={ticket.employee.first_name + " " + ticket.employee.last_name}
          mouseEnterDelay={0.05}
        >
          <div className="h-8 w-8 flex justify-center items-center rounded-full border-[1.5px] border-secondry border-opacity-20 hover:border-opacity-30 bg-secondry bg-opacity-10 text-secondry text-opacity-50 hover:bg-opacity-20 hover:text-opacity-100 transition-all">
            {ticket.employee.first_name[0]}
          </div>
        </Tooltip>
      </header>
      <main className="ticket-decription my-1 text-sm">{ticket.title}</main>
      <footer className="mt-2">
        <div className="inline-flex">
          <div className="text-white text-opacity-60 px-2 mt-1 mr-1 py-1 border-[1.5px] bg-gray-800 border-gray-500 border-opacity-50 rounded-full text-xs ">
            {ticket.TicketPiority.title}
          </div>
          <div className="text-white text-opacity-60 px-2 mt-1 mr-1 py-1 border-[1.5px] bg-gray-800 border-gray-500 border-opacity-50 rounded-full text-xs ">
            {moment(ticket.createdAt).format("DD/MM/YY")}
          </div>
        </div>
        <div className="inline-flex">
          <div className="flex items-center text-white text-opacity-60 px-2 mt-1 mr-1 py-1 border-[1.5px] bg-gray-800 border-gray-500 border-opacity-50 rounded-full text-xs ">
            <span className="mr-1">
              <IoMdGitNetwork />
            </span>
            {ticket.project.project_name} / {ticket.team.team_name}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function BoardC({ data, tickets, setIsTicketInfo }) {
  return (
    <div className="mx-1 !h-full !w-80 border-2 border-gray-600 border-opacity-60 rounded-md flex flex-col flex-shrink-0 bg-gray-900 bg-opacity-75 hover:bg-opacity-100 transition-all p-2 relative">
      <header className="flex flex-col w-full p-2">
        <div className="flex items-center">
          <div
            className={`h-4 w-4 mr-2  rounded-full`}
            style={{
              backgroundColor: StatusColor(data.title),
            }}
          ></div>
          <h1 className="text-base font-semibold opacity-80">{data.title}</h1>
        </div>
        <p className="text-sm mt-1 opacity-50">{data.description}</p>
      </header>
      <main className="mt-3 w-full">
        {tickets.map((ticket, index) => {
          return (
            <div key={index} className="">
              <TicketContainer
                ticket={ticket}
                setIsTicketInfo={setIsTicketInfo}
              />
            </div>
          );
        })}
        {tickets.length == 0 ? (
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description={`No tickets in ${data.title}`}
          />
        ) : (
          <></>
        )}
      </main>
    </div>
  );
}
