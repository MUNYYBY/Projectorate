import Image from "next/image";
import Temp from "../../public/Uploads/temp.png";
import InformationTag from "../InformationTag/InformationTag";
import { HiOutlineTicket } from "react-icons/hi";
import { BiTrash } from "react-icons/bi";

export default function EmployeesContainer({
  employeeName = "Employee Name",
  designation = "Designation Name",
  informationTag = "Web Dev",
  deleteEmployeeClient,
  employeeId,
}) {
  return (
    <div className="Employees-container bg-gray-700 h-20 w-full px-4 mt-2 rounded-md shadow-sm flex flex-row justify-between items-center ">
      <div className="flex flex-row justify-between items-center ">
        <div className="Employee-Image flex flex-row items-center">
          <Image src={Temp} width={50} height={50} className="rounded-full" />
        </div>
        <div className="Employee-information pl-4 w-80">
          <h1 className="">{employeeName}</h1>
          <p className="text-pOrange text-sm">{designation}</p>
        </div>
      </div>
      <div className="Employee-work-info-tag">
        <InformationTag title={informationTag} type="intermediate" size="md" />
      </div>
      <div className="Employee-tickets-stat flex flex-row justify-center items-center">
        <button
          onClick={(e) => {
            e.preventDefault();
            deleteEmployeeClient(employeeId);
          }}
        >
          <div className="bg-red-900 p-3 rounded-2xl bg-opacity-30">
            <BiTrash size={26} className="text-red-400" />
          </div>
        </button>
      </div>
    </div>
  );
}
