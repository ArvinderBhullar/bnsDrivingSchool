import {businessInfo} from "@/config/businessInfo";

const MapSection = () => {
    return (
        <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Visit Us</h2>
            <div className="relative w-full h-[450px] overflow-hidden rounded-xl shadow-md">
              <iframe
                src={businessInfo.googleBusinessUrl}
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