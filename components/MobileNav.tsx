"use client";

import { useEffect, useState } from "react";

interface NavItem {
  label: string;
  href: string;
}

interface MobileNavProps {
  name: string;
  navItems: NavItem[];
  activeTab: string;
  onTabChange: (href: string) => void;
}

export default function MobileNav({
  name,
  navItems,
  activeTab,
  onTabChange
}: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [activeTab]);

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

      <div
        className={`mobile-nav-overlay ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      <div className={`mobile-nav-drawer ${isOpen ? "open" : ""}`}>
        <div className="mobile-nav-drawer-head">
          <p className="side-nav-name">{name}</p>
        </div>
        <nav>
          <ul>
            {navItems.map((item, index) => {
              const isActive = activeTab === item.href;
              return (
                <li key={item.href}>
                  <button
                    type="button"
                    className={isActive ? "active" : ""}
                    onClick={() => onTabChange(item.href)}
                  >
                    <span className="side-tab-index">0{index + 1}</span>
                    <span>{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="mobile-nav-drawer-footer">
            <p className="muted-text">Single-page profile navigation</p>
          </div>
        </nav>
      </div>
    </>
  );
}
