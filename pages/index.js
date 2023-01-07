import Working from "../public/Assets/working.svg";
import Image from "next/image";
import Link from "next/link";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-primary flex flex-col justify-center items-center">
      <div>
        {/* <Image
          src={Working}
          alt="projectorate under construction"
          width={400}
          height={400}
        /> */}
        <Player
          autoplay
          loop
          src="https://assets6.lottiefiles.com/private_files/lf30_tfozcvfo.json"
          style={{ height: "300px", width: "300px" }}
        ></Player>
      </div>
      <div className="w-2/4 flex flex-col justify-center items-center">
        <h1 className="font-demo text-4xl mb-2">Under Construction</h1>
        <h2 className="text-2xl text-center">
          We are working day and night to make this project a sucess. Kindly be
          Patient!
        </h2>
      </div>
      <div>
        <Link href="/auth">
          <button
            type="button"
            className="bg-secondry px-5 py-3 rounded-lg border-none my-5"
          >
            Go to Authentication Page
          </button>
        </Link>
      </div>
    </div>
  );
}
