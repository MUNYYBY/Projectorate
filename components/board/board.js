import React from "react";

function TicketContainer() {
  return (
    <div className="ticket bg-gray-800 bg-opacity-90 border-[1.5px] border-gray-600 hover:border-primary transition-all cursor-pointer p-3 rounded-md w-full">
      <header className="ticket0-header flex flex-row justify-between items-center">
        <div className="flex items-center">
          <div className="team-name text-sm opacity-75">
            Projectorate team #id
          </div>
        </div>
        <div className="h-8 w-8 flex justify-center items-center rounded-full bg-white bg-opacity-10">
          M
        </div>
      </header>
      <main className="ticket-decription my-1 text-sm">
        werftuagyihujfwc jfojfo er feri
      </main>
      <footer className="mt-2">
        <div className="inline-flex">
          <div className="text-white text-opacity-60 px-2 mt-1 mr-1 py-1 border-[1.5px] bg-gray-800 border-gray-500 border-opacity-50 rounded-full text-xs ">
            Normal
          </div>
          <div className="text-white text-opacity-60 px-2 mt-1 mr-1 py-1 border-[1.5px] bg-gray-800 border-gray-500 border-opacity-50 rounded-full text-xs ">
            Normal
          </div>
        </div>
        <div className="inline-flex">
          <div className="text-white text-opacity-60 px-2 mt-1 mr-1 py-1 border-[1.5px] bg-gray-800 border-gray-500 border-opacity-50 rounded-full text-xs ">
            project_name/team_name
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function BoardC({ data }) {
  function StatusColor() {
    const item = data;
    return item.title == "Todo"
      ? "bg-green-600"
      : item.title == "In-progress"
      ? "bg-yellow-600"
      : item.title == "Done"
      ? "bg-purple-600"
      : item.title == "Resolved"
      ? "bg-orange-600"
      : item.title == "Tested but not resolved"
      ? "bg-pink-700"
      : "bg-blue-600";
  }
  return (
    <div className="mx-1 !h-full !w-80 border-2 border-gray-600 border-opacity-60 rounded-md flex flex-shrink-0 bg-gray-900 bg-opacity-75 hover:bg-opacity-100 transition-all p-2 relative">
      <header className="flex flex-col w-full p-2 fixed">
        <div className="flex items-center">
          <div className={`h-4 w-4 mr-2 ${StatusColor()} rounded-full`}></div>
          <h1 className="text-base font-semibold opacity-80">{data.title}</h1>
        </div>
        <p className="text-sm mt-1 opacity-50">{data.description}</p>
      </header>
      <main className="mt-16 w-full">
        <TicketContainer />
      </main>
    </div>
  );
}
