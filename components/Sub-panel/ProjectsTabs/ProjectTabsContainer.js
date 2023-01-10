import Image from "next/image";
import InformationTag from "../../InformationTag/InformationTag";
import Temp from "../../../public/Uploads/temp.png";

export default function ProjectsTabContainer({ CompanyName = "Company Name" }) {
  return (
    <div className="w-full h-16 bg-gray-700 px-4 mt-2 flex flex-col justify-center">
      <div className="flex flex-row items-center">
        <div className="Project-Image">
          <Image src={Temp} width={45} height={45} className="rounded-lg" />
        </div>
        <div className="projects-container-info ml-3">
          <h4 className="">{CompanyName}</h4>
          <p className="text-pOrange text-xs">@companySocial</p>
          {/* <div className="project-tags flex flex-row">
            <InformationTag title="web Dev" type="pOrange" />
            <InformationTag title="Mobile Dev" type="secondry" />
          </div> */}
        </div>
      </div>
    </div>
  );
}
