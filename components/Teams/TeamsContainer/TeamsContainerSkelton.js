export default function TeamsContainerSkelton() {
  return (
    <div className="animate-pulse h-44 w-full md:w-96 bg-gray-700 rounded-md shadow-sm p-6 flex flex-col justify-between">
      <div className="flex flex-row">
        <div className="rounded-lg w-14 h-14 bg-gray-600 flex justify-center items-center"></div>
        <div className="teams-container-main-info ml-3">
          <h4 className="pb-1 text-xl font-semibold h-6 w-32 rounded-md bg-gray-600"></h4>
          <div className="teams-tags flex flex-row">
            <h4 className="mt-4 text-xl font-semibold h-4 w-24 rounded-md bg-gray-600"></h4>
          </div>
        </div>
      </div>
      <div className="projects-attributes flex flex-row justify-between">
        <div className="flex flex-col items-center">
          <div className="rounded-lg w-20 h-10 bg-gray-600 flex justify-center items-center"></div>
        </div>
        <div className="flex flex-col items-center">
          <div className="rounded-lg w-20 h-10 bg-gray-600 flex justify-center items-center"></div>
        </div>
        <div className="flex flex-col items-center">
          <div className="rounded-lg w-20 h-10 bg-gray-600 flex justify-center items-center"></div>
        </div>
      </div>
    </div>
  );
}
