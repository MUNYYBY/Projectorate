import React from "react";
import { FaDragon } from "react-icons/fa";

export default function Loading() {
  return (
    <div className="App">
      <div className="loading h-screen w-screen absolute top-0">
        <div className="w-full h-full flex flex-row justify-center items-center">
          <div className="loading-app-icon">
            <div className="p-4 bg-primary text-gray-300 rounded-3xl shadow-2xl animate-pulse animate-bounce ">
              <FaDragon size={50} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
