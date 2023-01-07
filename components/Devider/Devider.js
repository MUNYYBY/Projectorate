export default function TabDevider({ width = "w-8", opacity = "opacity-20" }) {
  const classString =
    "Tab-Devider h-0.5 rounded-sm bg-gray-100 " + width + " " + opacity;
  return <div className={classString}></div>;
}
