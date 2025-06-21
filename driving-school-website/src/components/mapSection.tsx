import {businessInfo} from "@/config/businessInfo";

const MapSection = () => {
    return (
        <section className="py-16 border-t border-gray-200 dark:border-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-center text-gray-900 dark:text-white mb-16">Visit Us</h2>
            <div className="relative w-full h-[450px] overflow-hidden rounded-xl shadow-md">
              <iframe
                src={businessInfo.googleBusinessUrl}
                title="Google Maps location of BNS Driving School"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
        </div>
      </section>
    );
  };
  
  export default MapSection;