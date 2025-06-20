import { businessInfo } from "@/config/businessInfo";

export default function DesktopNav() {
    return (
      <nav className="hidden lg:flex space-x-20
                    text-gray-700 dark:text-gray-200 font-medium">
        <a href={businessInfo.phoneUrl}>Call</a>
        <a href={businessInfo.emailUrl}>Email</a>
        <a href={businessInfo.whatsappUrl} target="_blank" rel="noopener noreferrer">
          Whatsapp
        </a>
      </nav>
    );
  }