import { ReactNode } from "react";

type FeatureCardProps = {
    icon: ReactNode;
    title: string;
    description: string;
    className?: string;
  };
  
  const FeatureCard = ({ icon, title, description, className ="" }: FeatureCardProps) => {
    return (
      <div className={`relative ${className}`}>
        <div className="absolute inset-px rounded-lg bg-white" />
        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
          <div className="px-8 pt-8 sm:px-10 sm:pt-10">
            <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
              {title}
            </p>
            <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
              {description}
            </p>
          </div>
          <div className="px-8 sm:px-10 pb-8 sm:pb-10 mt-3 py-4 lg:py-2 flex items-end justify-center ">
            {icon}
          </div>
        </div>
        <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5" />
      </div>
    );
  };
  
  export default FeatureCard;