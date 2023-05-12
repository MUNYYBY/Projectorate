import React, { useEffect, useState } from "react";
import { CgInbox } from "react-icons/cg";
import { IoIosHelpCircle } from "react-icons/io";
import { HiOutlineViewBoards } from "react-icons/hi";
import { getALlTickets, getTicketsStatus } from "../../../client/requests";
import BoardC from "../../../components/board/board";

export default function Board() {
  //**States */
  const [allTickets, setAllTickets] = useState([]);
  const [ticketsStatus, setTicketsStatus] = useState([]);

  async function handleFetching() {
    const allTickets = await getALlTickets();
    const status = await getTicketsStatus();
    setAllTickets(allTickets.data);
    setTicketsStatus(status.data);
  }
  useEffect(() => {
    handleFetching();
  }, []);
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
          <BoardC />
        </div>
      </div>
    </>
  );
}
