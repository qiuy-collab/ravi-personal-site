"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

interface NavItem {
  label: string;
  href: string;
}

interface MobileNavProps {
  navItems?: NavItem[];
}

const defaultNavItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" }
];

export default function MobileNav({ navItems = defaultNavItems }: MobileNavProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Close drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Toggle Button */}
      <button
        className={`mobile-nav-toggle ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        <div className="flex flex-col items-center justify-center">
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </div>
      </button>

      {/* Overlay */}
      <div
        className={`mobile-nav-overlay ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className={`mobile-nav-drawer ${isOpen ? "open" : ""}`}>
        <nav>
          <ul>
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={isActive ? "active" : ""}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mobile-nav-drawer-footer">
            <p className="muted-text text-center">
              © {new Date().getFullYear()} Ravi
            </p>
          </div>
        </nav>
      </div>
    </>
  );
}
