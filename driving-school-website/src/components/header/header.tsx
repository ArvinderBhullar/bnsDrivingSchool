import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import DesktopNav from "./desktopNav";
import MobileMenu from "./mobileMenu";
import {businessInfo} from "@/config/businessInfo";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="backdrop-blur-md bg-white/70 dark:bg-gray-950/70 shadow-md fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">{businessInfo.name}</div>

        <DesktopNav />
      {/*
        <button
          type="button"
          className="lg:hidden p-2 text-gray-700 dark:text-gray-200"
          aria-label="Open menu"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Bars3Icon className="h-6 w-6" />
        </button>
      */}
      </div>

      <MobileMenu open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  );
}