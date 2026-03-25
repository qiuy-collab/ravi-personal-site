"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  label: string;
  href: string;
  icon?: string;
}

interface SideNavProps {
  navItems?: NavItem[];
}

const defaultNavItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" }
];

export default function SideNav({ navItems = defaultNavItems }: SideNavProps) {
  const pathname = usePathname();

  return (
    <aside className="side-nav">
      <nav className="flex flex-col h-full">
        {/* Navigation Links */}
        <ul className="flex flex-col gap-1 px-4 py-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`
                    flex items-center px-4 py-3 rounded-badge
                    transition-all duration-200
                    ${
                      isActive
                        ? "bg-accent/10 text-accent font-medium"
                        : "text-muted hover:text-text hover:bg-line/50"
                    }
                  `}
                >
                  {item.icon && <span className="mr-3">{item.icon}</span>}
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Footer */}
        <div className="mt-auto px-6 py-4 border-t border-line">
          <p className="muted-text text-center">
            © {new Date().getFullYear()} Ravi
          </p>
        </div>
      </nav>
    </aside>
  );
}
