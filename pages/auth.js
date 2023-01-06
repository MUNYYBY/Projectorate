import Image from "next/image";
import BG_IMAGE from "../public/Assets/login_bg_image.png";

export default function Auth() {
  return (
    <div className="h-screen bg-primary">
      <div className="secondry-section absolute bottom-0">
        <Image
          src={BG_IMAGE}
          alt="Projectorate welcome image bottom-0"
          sizes="cover"
        />
      </div>
      <div className="primary-section">Hello world</div>
    </div>
  );
}
