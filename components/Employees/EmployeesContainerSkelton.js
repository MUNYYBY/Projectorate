import Image from "next/image";
import Temp from "../../public/Uploads/temp.png";
import InformationTag from "../InformationTag/InformationTag";
import { HiOutlineTicket } from "react-icons/hi";

export default function EmployeesContainerSkelton() {
  return (
    <div className="Employees-container bg-gray-700 h-20 w-full px-4 mt-2 rounded-md shadow-sm flex flex-row justify-between items-center animate-pulse">
      <div className="flex flex-row justify-between items-center ">
        <div
          className="Employee-Image flex flex-row items-center bg-gray-600 rounded-full"
          style={{ height: 50, width: 50 }}
        ></div>
        <div className="Employee-information pl-4 lg:w-80 md:w-52">
          <h1 className="bg-gray-600" style={{ height: 16, width: 150 }}></h1>
          <p
            className="mt-2 rounded-2 bg-gray-600"
            style={{ height: 10, width: 100 }}
          ></p>
        </div>
      </div>
      <div
        className="Employee-work-info-tag bg-gray-600 rounded-2xl"
        style={{ height: 30, width: 200 }}
      ></div>
      <div className="Employee-tickets-stat flex flex-row justify-center items-center">
        {/* <HiOutlineTicket size={32} className="opacity-80 mr-2" /> */}
        <p className="text-xl text-gray-600">xx / xx</p>
      </div>
    </div>
  );
}
