import { FiHome } from "react-icons/fi";
import { AiOutlineFileDone } from "react-icons/ai";
import { RxLapTimer } from "react-icons/rx";

export default function SubPanel() {
  return (
    <div className="Sub-panel-dahboard ml-20 w-60 h-screen bg-gray-800">
      <div className="bg-gray-700 p-4 rounded-b-xl">
        <h1 className=" font-semibold mb-2">Projects Panel</h1>
        <input
          className="h-8 w-full bg-gray-900 rounded-sm text-xs border-black px-3"
          placeholder="Search from all the projects..."
          type="text"
        />
      </div>
      <div className="sub-panels-tabs flex flex-col my-3">
        <div className="hover:bg-gray-700 opacity-40 hover:opacity-100 rounded-sm py-2 px-2 mx-4 flex flex-row ">
          <div className="mr-2">
            <FiHome size={22} />
          </div>
          <h1 className="text-md">Project Home</h1>
        </div>
        <div className="hover:bg-gray-700 opacity-40 hover:opacity-100 rounded-sm py-2 px-2 mx-4  flex flex-row ">
          <div className="mr-2">
            <AiOutlineFileDone size={22} />
          </div>
          <h1 className="text-md">Completed</h1>
        </div>
        <div className="hover:bg-gray-700 opacity-40 hover:opacity-100 rounded-sm py-2 px-2 mx-4  flex flex-row ">
          <div className="mr-2">
            <RxLapTimer size={22} />
          </div>
          <h1 className="text-md">In-progress</h1>
        </div>
      </div>
    </div>
  );
}
