import { XMarkIcon } from "@heroicons/react/24/outline";
import { businessInfo } from "@/config/businessInfo";


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
        <a href={businessInfo.phoneUrl} className="block">
          Call
        </a>
        <a href={businessInfo.emailUrl} className="block">
          Email
        </a>
        <a href={businessInfo.whatsappUrl} className="block" target="_blank" rel="noopener noreferrer">
          Whatsapp
        </a>
      </nav>
    </div>
  );
}