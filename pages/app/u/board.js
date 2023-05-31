import React, { useEffect, useState } from "react";
import { CgInbox } from "react-icons/cg";
import { IoIosHelpCircle } from "react-icons/io";
import { HiOutlineViewBoards } from "react-icons/hi";
import {
  GetUserTickets,
  getALlTickets,
  getTicketsStatus,
} from "../../../client/requests";
import BoardC from "../../../components/board/board";
import { BoardHeadMeta } from "../../../Meta/Heads";
import { useSession } from "next-auth/react";
import AuthorityCheck from "../../../Permissions/AuthorityCheck";
import CreateTicketModel from "../../../components/Tickets/CreateTicketModel";
import CreateTicketBtn from "../../../components/Tickets/CreateTicketBtn";
import TicketInfo from "../../../components/Tickets/TicketInfo/TicketInfo";

export default function Board() {
  //** Session */
  const { data: session, status } = useSession();
  //**States */
  const [allTickets, setAllTickets] = useState([]);
  const [ticketsStatus, setTicketsStatus] = useState([]);
  const [isCreateTicket, setIsCreateTicket] = useState(false);
  const [isTicketInfo, setIsTicketInfo] = useState(false);

  async function handleFetching() {
    const allTickets = await GetUserTickets(session.user.id);
    const status = await getTicketsStatus();
    setAllTickets(allTickets.data.result);
    setTicketsStatus(status.data.data);
  }
  useEffect(() => {
    if (session?.user.id) handleFetching();
  }, [session]);

  return (
    <>
      <BoardHeadMeta />
      {ticketsStatus.length > 0 ? (
        <TicketInfo
          isTicketInfo={isTicketInfo}
          setIsTicketInfo={setIsTicketInfo}
        />
      ) : (
        <></>
      )}
      <AuthorityCheck grantPermissionFor="manage_tickets">
        <div className="absolute z-[999] bottom-4 right-4 flex flex-col items-end">
          {isCreateTicket ? (
            <CreateTicketModel setIsCreateTicket={setIsCreateTicket} />
          ) : (
            <></>
          )}

          <div
            className="Create-ticket"
            onClick={() => setIsCreateTicket(true)}
          >
            <CreateTicketBtn />
          </div>
        </div>
      </AuthorityCheck>
      <div className="board h-full w-full overflow-hidden">
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
            <p className="opacity-50">
              This board shows all the tickets assigned to you
            </p>
          </div>
        </div>
        <div className={`board-penel flex h-[82vh] overflow-x-scroll`}>
          {ticketsStatus.map((status, index) => {
            const tickets = allTickets.filter((e) => {
              return e.ticketStatusId == status.id;
            });
            return (
              <div key={index} className="tickets-container-by-status">
                <BoardC
                  data={status}
                  tickets={tickets}
                  setIsTicketInfo={setIsTicketInfo}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
