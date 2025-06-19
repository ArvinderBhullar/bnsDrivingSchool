import {CalendarDaysIcon, UserGroupIcon, CheckBadgeIcon } from '@heroicons/react/20/solid';

const features = [
  {
    name: 'Book Your Lessons',
    description:
      'Choose a lesson package that fits your needs and schedule. We offer flexible timings and free pick-up/drop-off in Surrey.',
    icon: CalendarDaysIcon,
  },
  {
    name: 'Learn from Certified Instructors',
    description: 'Gain hands-on experience with our expert driving instructors, covering everything from basic skills to advanced road test preparation.',
    icon: UserGroupIcon,
  },
  {
    name: 'Pass Your Road Test with Confidence',
    description: 'Use our car rental and warm-up session to ace your ICBC road test and earn your driver’s license hassle-free!',
    icon: CheckBadgeIcon,
  },
]


const StepsToLicense = () => {
    return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0 dark:bg-gray-950">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute top-0 left-[max(50%,25rem)] h-256 w-512 -translate-x-1/2 mask-[radial-gradient(64rem_64rem_at_top,white,transparent)] stroke-gray-200 dark:stroke-gray-800"
        >
          <defs>
            <pattern
              id="pattern"
              x="50%"
              y={-1}
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50 dark:fill-gray-900">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect fill="url(#pattern)" width="100%" height="100%" strokeWidth={0} />
        </svg>
      </div>

      {/* Main Grid */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2 lg:items-start lg:px-8">
        
        {/* Text Content */}
        <div className="lg:pr-8">
          <div className="lg:max-w-lg">
            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              Steps to Get your Driving Licence with us
            </p>
            <p className="mt-6 text-lg/8 text-gray-600">
              We make learning to drive simple. Our three-step process guides you from lesson booking to road test success.
            </p>

            {/* Feature List */}
            <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <feature.icon className="absolute left-0 top-1 h-6 w-6 text-stone-600 dark:text-stone-300" />
                    <dt className="inline font-semibold text-gray-900">
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
          </div>
        </div>

        {/* Image */}
        <div className="lg:sticky lg:top-4 lg:row-span-2">
          <img
            alt="Driving session screenshot"
            src="/rearView.jpeg"
            className="w-full max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 dark:ring-gray-700 sm:w-[36rem]"
          />
        </div>
      </div>
    </section>
    );
  };
  
  export default StepsToLicense;