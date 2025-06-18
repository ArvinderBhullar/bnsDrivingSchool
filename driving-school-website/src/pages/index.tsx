import Image from "next/image";
import { useState } from 'react';
import { Bars3Icon, XMarkIcon, EnvelopeIcon, PhoneIcon, MapPinIcon} from '@heroicons/react/24/outline';
import { CheckIcon, AcademicCapIcon, ClipboardDocumentCheckIcon, 
  AdjustmentsHorizontalIcon, UserPlusIcon, ShieldCheckIcon, ArrowTrendingUpIcon,
  CalendarDaysIcon, UserGroupIcon, CheckBadgeIcon } from '@heroicons/react/20/solid'

const tiers = [
  {
    name: 'Beginner Driving Lessons',
    id: 'tier-beginner',
    href: '#',
    priceHourly: '$70',
    description: "Perfect for new drivers looking to build essential skills and confidence on the road.",
    features: ['5 lessons at $325', '10 lessons at $600'],
  },
  {
    name: 'Advanced Driving Lessons',
    id: 'tier-advanced',
    href: '#',
    priceHourly: '$99',
    description: 'For experienced drivers who need fine tuning or preparation for the ICBC road test.',
    features: ['15 lessons at $875', '20 lessons at $1100'],
  },
  {
    name: 'ICBC Road Test Package',
    id: 'tier-icbc',
    href: '#',
    priceHourly: '$150',
    description: 'Includes car rental, a 30-minute warm-up session, and pick-up/drop-off service.',
    features: ['Non-students require a 1-hour skills assessment at $70/hr'],
  },
]

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


export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white dark:bg-gray-950 text-black dark:text-white font-sans min-h-screen flex flex-col">
      <header className="backdrop-blur-md bg-white/70 dark:bg-gray-950/70 shadow-md fixed top-0 inset-x-0 z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-xl font-bold">Bobby & Sons Driving School</div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex space-x-6">
            <a href="#" className="text-gray-700 dark:text-gray-200 font-medium">Features</a>
            <a href="#" className="text-gray-700 dark:text-gray-200 font-medium">Pricing</a>
            <a href="#" className="text-gray-700 dark:text-gray-200 font-medium">Contact</a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 text-gray-700 dark:text-gray-200"
            aria-label="Open menu"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-white dark:bg-gray-950 p-6">
            <div className="flex justify-between items-center">
              <div className="text-xl font-bold">Menu</div>
              <button
                type="button"
                className="p-2 text-gray-700 dark:text-gray-200"
                aria-label="Close menu"
                onClick={() => setMobileMenuOpen(false)}
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            <nav className="mt-6 space-y-4">
              <a href="#" className="block text-gray-700 dark:text-gray-200 font-medium">Features</a>
              <a href="#" className="block text-gray-700 dark:text-gray-200 font-medium">Pricing</a>
              <a href="#" className="block text-gray-700 dark:text-gray-200 font-medium">Contact</a>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/*Hero Section*/}
        <div className="relative isolate min-h-screen px-6 pt-14 lg:px-8">
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
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-stone-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-stone-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-600"
                >
                  Book Now
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
        </div>

        {/*Images */}
        <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
            {/* Top fade: blends into bg-white / dark:bg-gray-950 */}
            <div className="absolute top-0 left-0 right-0 h-32 z-10 bg-gradient-to-b from-white dark:from-gray-950 to-transparent" />

            {/* Bottom fade: blends into bg-white / dark:bg-gray-950 */}
            <div className="absolute bottom-0 left-0 right-0 h-32 z-10 bg-gradient-to-t from-white dark:from-gray-950 to-transparent" />

          <img
            alt="Side view of car used for training"
            src="/sideView.jpeg"
            loading="lazy"
            className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
          />
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">Learn with us</h2>
              <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
                We go beyond just passing the test—we equip you with real-world driving skills, confidence, and the knowledge to navigate any road safely.
              </p>
            </div>
          </div>
        </div>

        {/*Bento Grids*/}
          <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
              <h2 className="text-center text-base/7 font-semibold text-stone-600">Learn better</h2>
              <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl">
                Everything you need to become a safe and confident driver
              </p>
              <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
                
                <div className="relative max-lg:row-start-1">
                  <div className="absolute inset-px rounded-lg bg-white"></div>
                  <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                    <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                      <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center"> ICBC-Certified Instructors</p>
                      <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                        Learn from ICBC-certified professionals with years of teaching experience.
                      </p>
                    </div>
                    <div className="mt-3 flex items-end justify-center px-8 sm:px-10 py-4 lg:py-2">
                      <AcademicCapIcon className="h-20 w-20 text-stone-600" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5"></div>
                </div>

                <div className="relative max-lg:row-start-2 lg:col-start-1 lg:row-start-2">
                  <div className="absolute inset-px rounded-lg bg-white"></div>
                  <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                    <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                      <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Flexible Lesson Packages</p>
                      <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                        Customized driving lessons tailored to your schedule, goals, and current skill level.
                      </p>
                    </div>
                    <div className="mt-3 flex items-end justify-center px-8 sm:px-10 py-4 lg:py-2">
                      <AdjustmentsHorizontalIcon className="h-20 w-20 text-stone-600" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5"></div>
                </div>

                <div className="relative max-lg:row-start-3">
                  <div className="absolute inset-px rounded-lg bg-white  "></div>
                  <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]  ">
                    <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                      <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center"> Road Test Preparation</p>
                      <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                        Get expert guidance and a car rental option to pass your ICBC road test with confidence.
                      </p>
                    </div>
                    <div className="mt-3 flex items-end justify-center px-8 sm:px-10 py-4 lg:py-2">
                      <ClipboardDocumentCheckIcon className="h-20 w-20 text-stone-600" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5  "></div>
                </div>

                <div className="relative max-lg:row-start-4 lg:col-start-2 lg:row-start-2">
                  <div className="absolute inset-px rounded-lg bg-white"></div>
                  <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                    <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                      <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Personalized Learning</p>
                      <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                        Lessons designed to match your skill level, from beginners to advanced drivers.
                      </p>
                    </div>
                    <div className="mt-3 flex items-end justify-center px-8 sm:px-10 py-4 lg:py-2">
                      <UserPlusIcon className="h-20 w-20 text-stone-600" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5"></div>
                </div>

                <div className="relative max-lg:row-start-5">
                  <div className="absolute inset-px rounded-lg bg-white  "></div>
                  <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]  ">
                    <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                      <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center"> Safe & Modern Vehicles</p>
                      <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                        Train in a Toyota Corolla or a Tesla — choose between traditional or electric driving.
                      </p>
                    </div>
                    <div className="mt-3 flex items-end justify-center px-8 sm:px-10 py-4 lg:py-2">
                      <ShieldCheckIcon className="h-20 w-20 text-stone-600" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5  "></div>
                </div>

                <div className="relative max-lg:row-start-6 lg:col-start-3 lg:row-start-2">
                  <div className="absolute inset-px rounded-lg bg-white"></div>
                  <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                    <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                      <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">High Road Test Success Rate</p>
                      <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                        Proven teaching methods designed to help you pass your ICBC road test with ease.
                      </p>
                    </div>
                    <div className="mt-3 flex items-end justify-center px-8 sm:px-10 py-4 lg:py-2">
                      <ArrowTrendingUpIcon className="h-20 w-20 text-stone-600" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5"></div>
                </div>
                
              </div>
            </div>
          </div>
        
        {/*Steps to pass the test */}
        {/* <div className="overflow-hidden bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pt-4 lg:pr-8">
                <div className="lg:max-w-lg">
                  <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                    Steps to Get your Driving Licence with us
                  </p>
                  <p className="mt-6 text-lg/8 text-gray-600">
                    Your journey to safe and confident driving starts here!
                  </p>
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
              <img
                alt="Instructor car used for teaching"
                src="/rearView.jpeg"
                width={2432}
                height={1442}
                className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:-ml-0"
              />
            </div>
          </div>
        </div> */}

        <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0 dark:bg-gray-950">
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
        </div>

        {/*Testimonials */}
        <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-stone-100),white)] opacity-20" />
          <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl ring-1 shadow-stone-600/10 ring-stone-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <figure className="mt-10">
              <blockquote className="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
                <p>
                  “Mohit is a very good instructor. I passed my driving test first time. He teaches you properly and is very nice.”
                </p>
              </blockquote>
              <figcaption className="mt-10">
                <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                  <div className="font-semibold text-gray-900">Shivam Arora</div>
                  <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-gray-900">
                    <circle r={1} cx={1} cy={1} />
                  </svg>
                  <div className="text-gray-600">Client</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Pricing Section */}
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 sm:mt-20 lg:max-w-4xl lg:grid-cols-3">
          {tiers.map((tier) => (
          <div
            key={tier.id}
            className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900"
          >
            <h3 id={tier.id} className="text-lg font-semibold leading-8 text-gray-900 dark:text-white">
              {tier.name}
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              {tier.priceHourly}
              <span className="text-base font-medium text-gray-500 dark:text-gray-400">/hour</span>
            </p>
            <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-300">
              {tier.description}
            </p>
            <ul role="list" className="mt-6 space-y-3 text-sm text-gray-600 dark:text-gray-300">
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon className="h-5 w-5 text-stone-500" aria-hidden="true" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <a
              href={tier.href}
              aria-describedby={tier.id}
              className="mt-8 block w-full rounded-md bg-stone-600 px-4 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-stone-500"
            >
              Get started today
            </a>
          </div>
          ))}
        </div>

        {/*Contact Form */}

        {/*Map */}
        <section className="bg-white dark:bg-gray-950 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Visit Us</h2>
              <div className="relative w-full h-[450px] overflow-hidden rounded-xl shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2608.6746274345323!2d-122.83829262297546!3d49.168783871375894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60bcc992892e3801%3A0x8539a7e4d8f4beea!2sBobby%20%26%20Sons%20Driving%20School%20Inc.!5e0!3m2!1sen!2sca!4v1750201306867!5m2!1sen!2sca"
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
        

      </main>

      <footer className="border-t border-gray-200 dark:border-gray-800 mt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Mission Statement */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Our Mission</h2>
            <p className="text-gray-700 dark:text-gray-300">
              At Bobby &amp; Sons Driving School, we’re dedicated to helping Surrey drivers become safe, confident, and skilled through expert instruction and personalized lessons.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <EnvelopeIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
              <span className="text-gray-700 dark:text-gray-200">bnsdrivingschool@gmail.com</span>
            </div>
            <div className="flex items-start gap-3">
              <PhoneIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
              <span className="text-gray-700 dark:text-gray-200">778-556-2328</span>
            </div>
            <div className="flex items-start gap-3">
              <MapPinIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
              <span className="text-gray-700 dark:text-gray-200">Serving all of Surrey, BC</span>
            </div>
          </div>
          
        </div>
      </footer>
    </div>
      
  );
}
