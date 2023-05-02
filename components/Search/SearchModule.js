export default function SearchModule({
  type = "Projects",
  title = "SEARCH",
  description = "Take a dive in to the project and its attributes. Find anything you are looking for in this project",
}) {
  return (
    <div className="Search-module">
      <div className="Search-contents">
        <h1 className="font-semibold text-xl opacity-80">{title}</h1>
        <p className="text-sm opacity-60 mt-1">{description}</p>
      </div>
      <div className="Search-bar bg-gray-900 h-14 border-2 border-black rounded-md flex flex-row justify-between items-center px-4 mt-4">
        <input
          placeholder={`Type attributes for ${type}...`}
          type="text"
          className="bg-transparent w-4/6 focus:outline-0"
        />
        <button className="bg-primary py-2 px-3 rounded-md">
          Find in “{type}”
        </button>
      </div>
    </div>
  );
}
