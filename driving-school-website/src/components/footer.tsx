import {businessInfo, missionStatement} from "@/config/businessInfo";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 mt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* BBB Seal */}
          <div className="relative w-full overflow-hidden rounded-xl shadow-md">
            <iframe 
              src={businessInfo.bbbSealUrl}
              title="Better Business Bureau Seal"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
              />
          </div>

          {/* Mission Statement */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Our Mission</h2>
            <p className="text-gray-700 dark:text-gray-300">
              {missionStatement}
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 text-gray-700 dark:text-gray-200">
            <div className="flex items-center gap-8 mb-4">
              <a href={businessInfo.facebookUrl} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <img src="./FacebookIcon.svg" alt="Facebook" className="h-6 w-6 hover:opacity-80 transition-opacity"/>
              </a>
              <a href={businessInfo.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <img src="./InstagramIcon.svg" alt="Instagram" className="h-6 w-6 hover:opacity-80 transition-opacity"/>
              </a>
              <a href={businessInfo.googleMapsUrl} target="_blank" rel="noopener noreferrer" aria-label="Google Maps">
                <img src="./GoogleMapsIcon.svg" alt="Google Maps" className="h-6 w-6 hover:opacity-80 transition-opacity"/>
              </a>
            </div>
            <div className="flex items-start gap-3">
              <EnvelopeIcon className="h-6 w-6" />
              <a href={`mailto:${businessInfo.email}`} className="hover:underline">
                {businessInfo.email}
              </a>
            </div>
            <div className="flex items-start gap-3">
              <PhoneIcon className="h-6 w-6" />
              <a href={`tel:${businessInfo.phone}`} className="hover:underline">
                {businessInfo.phone}
              </a>
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