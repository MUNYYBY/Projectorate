export default function ProjectTab({ icon, title = "Home" }) {
  return (
    <div className="hover:bg-gray-700 opacity-40 hover:opacity-100 rounded-sm py-2 px-2 mx-4 flex flex-row ">
      <div className="mr-2">{icon}</div>
      <h1 className="text-md">{title}</h1>
    </div>
  );
}
