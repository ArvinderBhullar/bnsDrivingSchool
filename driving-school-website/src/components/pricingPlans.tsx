import { CheckIcon } from "@heroicons/react/24/solid";
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

const PricingPlans = () => {
    return (
        <section className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 sm:mt-20 lg:max-w-4xl lg:grid-cols-3">
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
      </section>
    );
};

export default PricingPlans;