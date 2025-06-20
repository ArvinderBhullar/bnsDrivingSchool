import { businessInfo } from "@/config/businessInfo";
import { PhoneArrowUpRightIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const Hero = () => {
    return (
        <section className="relative isolate min-h-screen px-6 pt-14 lg:px-8">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr
                 from-slate-800 to-slate-900 dark:from-slate-100 dark:to-slate-400
                  opacity-40 sm:left-[calc(50%-30rem)] sm:w-288.75"
            />
          </div>


          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-5xl font-semibold tracking-tight text-balance sm:text-7xl">
                Training tomorrow’s safe drivers
              </h1>
              <p className="mt-8 text-lg font-medium text-pretty text-gray-700 dark:text-gray-200 sm:text-xl/8">
                Your journey to safe and confident driving starts here. Master the roads with expert driving lessons in Surrey.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-y-10">
                
                <div className="flex flex-col items-center gap-10 lg:gap-10 lg:flex-row lg:justify-center">
                  {/* Email */}
                  <a
                    href={businessInfo.emailUrl}
                    className="flex items-center gap-2 rounded-md bg-blue-600 
                      px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs 
                      hover:bg-blue-500 focus-visible:outline-2 
                      focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    <EnvelopeIcon className="h-5 w-5" />
                    Email Us
                  </a>
                  
                  {/* Call */}
                  <a
                    href={businessInfo.phoneUrl}
                    className="flex items-center gap-2 rounded-md bg-teal-600
                    px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs 
                    hover:bg-teal-500 focus-visible:outline-2 
                    focus-visible:outline-offset-2 focus-visible:outline-teal-600"
                  >
                    <PhoneArrowUpRightIcon className="h-5 w-5" />
                    Give Us a Call
                  </a>
                  
                </div>

                {/* WhatsApp Button */}
                <a href={businessInfo.whatsappUrl} target="_blank" rel="noopener noreferrer">
                  {/* Light mode image */}
                  <Image
                    src="/WhatsAppButtonGreen.svg"
                    alt="Chat with us on WhatsApp"
                    width={200}
                    height={42}
                    className="block dark:hidden"
                  />
                  {/* Dark mode image */}
                  <Image
                    src="/WhatsAppButtonWhite.svg"
                    alt="Chat with us on WhatsApp"
                    width={200}
                    height={42}
                    className="hidden dark:block"
                  />
                </a>
                
              </div>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr 
                from-slate-800 to-slate-900 dark:from-slate-100 dark:to-slate-400
                opacity-40 sm:left-[calc(50%+36rem)] sm:w-288.75"
            />
          </div>
        </section>
    );
};

export default Hero;