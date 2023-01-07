import Image from "next/image";
import InformationTag from "../../InformationTag/InformationTag";
import Temp from "../../../public/Uploads/temp.png";

export default function ProjectsTabContainer({ CompanyName = "Company Name" }) {
  return (
    <div className="w-full h-20 bg-gray-700 px-4 mt-2 flex flex-col justify-center">
      <div className="flex flex-row">
        <div className="Project-Image">
          <Image src={Temp} width={55} height={55} className="rounded-lg" />
        </div>
        <div className="projects-container-info ml-3">
          <h4 className="pb-1">{CompanyName}</h4>
          <div className="project-tags flex flex-row">
            <InformationTag title="web Dev" type="pOrange" />
            <InformationTag title="Mobile Dev" type="secondry" />
          </div>
        </div>
      </div>
    </div>
  );
}
