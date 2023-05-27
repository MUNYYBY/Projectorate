import React from "react";

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
    <div className="mx-1 !h-full !w-72 border-2 border-gray-600 border-opacity-60 rounded-md flex flex-shrink-0 bg-gray-900 p-2">
      <header className="flex flex-col w-full p-2">
        <div className="flex items-center">
          <div className={`h-4 w-4 mr-2 ${StatusColor()} rounded-full`}></div>
          <h1 className="text-base font-semibold opacity-80">{data.title}</h1>
        </div>
        <p className="text-sm mt-1 opacity-50">{data.description}</p>
      </header>
    </div>
  );
}
