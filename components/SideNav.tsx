"use client";

interface NavItem {
  label: string;
  href: string;
}

interface SideNavProps {
  name: string;
  role: string;
  intro: string;
  navItems: NavItem[];
  activeTab: string;
  onTabChange: (href: string) => void;
}

export default function SideNav({
  name,
  role,
  intro,
  navItems,
  activeTab,
  onTabChange
}: SideNavProps) {
  return (
    <aside className="side-nav">
      <div className="side-nav-shell">
        <div className="side-nav-brand">
          <p className="side-nav-name">{name}</p>
          <p className="side-nav-role">{role}</p>
          <p className="side-nav-intro">{intro}</p>
        </div>

        <nav className="side-nav-tabs" aria-label="Primary">
          {navItems.map((item, index) => {
            const isActive = activeTab === item.href;
            return (
              <button
                key={item.href}
                type="button"
                className={`side-tab ${isActive ? "active" : ""}`}
                onClick={() => onTabChange(item.href)}
              >
                <span className="side-tab-index">0{index + 1}</span>
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="side-nav-footer">
          <span>Available for selected remote work.</span>
          <span>© {new Date().getFullYear()} Ravi</span>
        </div>
      </div>
    </aside>
  );
}
