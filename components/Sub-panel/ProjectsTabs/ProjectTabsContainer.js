import Image from "next/image";
import Temp from "../../../public/Uploads/temp.png";

export default function ProjectsTabContainer() {
  return (
    <div className="w-full h-20 bg-gray-700 p-4">
      <div className="flex flex-row">
        <div className="Project-Image">
          <Image src={Temp} width={50} height={50} className="rounded-lg" />
        </div>
        <div>
          <h4>Company Name</h4>
        </div>
      </div>
    </div>
  );
}
