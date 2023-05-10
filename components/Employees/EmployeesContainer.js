import Image from "next/image";
import Temp from "../../public/Uploads/temp.png";
import InformationTag from "../InformationTag/InformationTag";
import { HiOutlineTicket } from "react-icons/hi";
import { BiTrash } from "react-icons/bi";

export default function EmployeesContainer({
  employeeName = "Employee Name",
  designation = "Designation Name",
  informationTag = "Web Dev",
  role,
}) {
  return (
    <div className="Employees-container bg-gray-700 h-20 w-full px-4 mt-2 rounded-md shadow-sm flex flex-row justify-between items-center ">
      <div className="flex flex-row justify-between items-center ">
        <div className="Employee-Image flex flex-row items-center justify-center h-12 w-12 bg-white bg-opacity-10 rounded-xl">
          <p className="text-xl font-bold">{employeeName[0]}</p>
        </div>
        <div className="Employee-information pl-4 lg:w-72 md:w-52">
          <h1 className="">{employeeName}</h1>
          <p className="text-pOrange text-sm">{designation}</p>
        </div>
      </div>
      <div className="Employee-work-info-tag sm:flex hidden">
        <InformationTag title={informationTag} type="intermediate" size="md" />
      </div>
      <div className="Employee-work-info-tag sm:flex hidden">
        <InformationTag title={role} type="base" size="md" />
      </div>
    </div>
  );
}
