import Link from "next/link";
import { FaDragon } from "react-icons/fa";

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
      <div className="loading-app-icon flex justify-center items-center">
        <div className="p-4 bg-gradient-to-r from-primary to-intermediate text-gray-300 rounded-3xl shadow-2xl ">
          <FaDragon size={18} />
        </div>
        <h1 className="text-[1.6rem] font-extrabold leading-tight tracking-tighter text-white ml-3">
          Projectorate
        </h1>
      </div>
    </Link>
  );
}
