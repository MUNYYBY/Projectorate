import React from "react";
import { CgInbox } from "react-icons/cg";
import { IoIosHelpCircle } from "react-icons/io";
import { HiOutlineViewBoards } from "react-icons/hi";
import { getALlTickets, getTicketsStatus } from "../../../client/requests";
import Board from "../../../components/board/board";

export default function board({ tickets, ticketsStatus }) {
  console.log(tickets);
  console.log(ticketsStatus);
  return (
    <>
      <div className="board h-screen overflow-hidden">
        <header className="flex flex-row items-center justify-between border-b-2 border-b-gray-900 px-4 py-2 relative">
          <div className="flex flex-row items-center">
            <div className="teams-panel-icon mr-3">
              <HiOutlineViewBoards size={26} />
            </div>
            <h1 className="text-lg font-bold">Board Panel</h1>
          </div>
          <div className="flex flex-row items-center">
            <div className="help-icon px-2">
              <CgInbox size={24} />
            </div>
            <div className="inbox-icon px-2">
              <IoIosHelpCircle size={26} />
            </div>
          </div>
        </header>
        <div className="mx-4 my-4">
          <div className="flex flex-col">
            <h1 className="font-bold text-2xl">Tickets</h1>
            <p className="opacity-50">This board shows all the tickets</p>
          </div>
        </div>
        <div className="board-penel h-full w-screen flex flex-row overflow-x-auto">
          <Board />
          <Board />
          <Board />
          <Board />
          <Board />
          <Board />
          <Board />
          <Board />
          <Board />
          <Board />
          <Board />
        </div>
      </div>
    </>
  );
}

// This gets called on every server-side render
export async function getServerSideProps() {
  // Fetch data from external API
  let tickets = null;
  let ticketsStatus = null;
  //get all the projects
  try {
    const allTickets = await getALlTickets();
    const status = await getTicketsStatus();
    tickets = allTickets.data;
    ticketsStatus = status.data;
  } catch (error) {
    console.log("Error at server-side for all tickets: ", error);
  }
  // Pass data to the page via props
  return {
    props: { tickets: tickets.data, ticketsStatus: ticketsStatus.data },
  };
}
