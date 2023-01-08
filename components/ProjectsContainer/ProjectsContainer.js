import Image from "next/image";
import InformationTag from "../InformationTag/InformationTag";
import Temp from "../../public/Uploads/temp.png";

export default function ProjectsContainer({ CompanyName = "Company Name" }) {
  return (
    <div className="h-40 w-80 bg-gray-900 rounded-md shadow-sm p-4 flex flex-col justify-between">
      <div className="flex flex-row">
        <div className="Project-main-Image">
          <Image src={Temp} width={55} height={55} className="rounded-lg" />
        </div>
        <div className="projects-container-main-info ml-3">
          <h4 className="pb-1">{CompanyName}</h4>
          <div className="project-tags flex flex-row">
            <InformationTag title="web Dev" type="intermediate" />
            <InformationTag title="Mobile Dev" type="primary" />
          </div>
        </div>
      </div>
      <div className="projects-attributes flex flex-row justify-between">
        <div className="flex flex-col items-center">
          <h1 className="text-secondry font-bold text-2xl">46</h1>
          <p className="text-sm opacity-80">Members</p>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-pOrange font-bold text-2xl">46</h1>
          <p className="text-sm opacity-80">Teams</p>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-intermediate font-bold text-2xl">46</h1>
          <p className="text-sm opacity-80">Tickets</p>
        </div>
      </div>
    </div>
  );
}
