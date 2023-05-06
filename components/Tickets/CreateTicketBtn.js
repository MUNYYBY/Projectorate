import React from "react";
import { IoIosAdd } from "react-icons/io";

export default function CreateTicketBtn() {
  return (
    <button className="bg-intermediate bg-opacity-70 hover:bg-opacity-100 transition-all py-2 px-4 rounded-md flex flex-row justify-center items-center drop-shadow-2xl">
      <IoIosAdd size={26} /> <p>Create Ticket</p>
    </button>
  );
}
