import { XMarkIcon } from "@heroicons/react/24/outline";

interface mobileMenuProps {
    open: boolean;
    onClose: () => void;
  }

export default function MobileMenu({ open, onClose }: mobileMenuProps) {
    if (!open) return null;

  return (
    <div className="lg:hidden fixed inset-0 z-50 bg-white dark:bg-gray-950 p-6
                    text-gray-700 dark:text-gray-200">
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold">Menu</div>
        <button
          type="button"
          className="p-2"
          aria-label="Close menu"
          onClick={onClose}
        >
          <XMarkIcon className="h-6 w-6" />
        </button>
      </div>
      <nav className="mt-6 space-y-4  font-medium">
        <a href="#" className="block">Features</a>
        <a href="#" className="block">Pricing</a>
        <a href="#" className="block">Contact</a>
      </nav>
    </div>
  );
}