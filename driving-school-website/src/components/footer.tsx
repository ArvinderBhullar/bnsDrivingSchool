import {businessInfo, missionStatement} from "@/config/businessInfo";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 mt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Mission Statement */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Our Mission</h2>
            <p className="text-gray-700 dark:text-gray-300">
              {missionStatement}
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 text-gray-700 dark:text-gray-200">
            <div className="flex items-start gap-3">
              <EnvelopeIcon className="h-6 w-6" />
              <span>{businessInfo.email}</span>
            </div>
            <div className="flex items-start gap-3">
              <PhoneIcon className="h-6 w-6" />
              <span>{businessInfo.phone}</span>
            </div>
            <div className="flex items-start gap-3">
              <MapPinIcon className="h-6 w-6" />
              <span>Serving Surrey and Vancouver, BC</span>
            </div>
          </div>
          
        </div>
      </footer>
    );
};

export default Footer;