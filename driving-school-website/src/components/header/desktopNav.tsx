import { businessInfo } from "@/config/businessInfo";
import Image from "next/image";

export default function DesktopNav() {
    return (
      <nav className="hidden lg:flex space-x-20">
        {/* Facebook */}
      <a
        href={businessInfo.facebookUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="transition-transform hover:scale-110"
      >
        <Image
          src="./FacebookIcon.svg"
          alt="Facebook"
          width={24}
          height={24}
          className="w-6 h-6"
        />
      </a>

      {/* Instagram */}
      <a
        href={businessInfo.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="transition-transform hover:scale-110"
      >
        <Image
          src="./InstagramIcon.svg"
          alt="Instagram"
          width={24}
          height={24}
          className="w-6 h-6"
        />
      </a>

      {/* Google Maps */}
      <a
        href={businessInfo.googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Google Maps"
        className="transition-transform hover:scale-110"
      >
        <Image
          src="./GoogleMapsIcon.svg"
          alt="Google Maps"
          width={24}
          height={24}
          className="w-6 h-6"
        />
      </a>
      </nav>
    );
  }