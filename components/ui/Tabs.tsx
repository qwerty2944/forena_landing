'use client';

interface Tab {
  id: string;
  label: string;
}

interface TabsProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (id: string) => void;
}

export default function Tabs({ tabs, activeTab, onTabChange }: TabsProps) {
  return (
    <div className="border-b border-border overflow-x-auto scrollbar-none">
      <nav className="flex min-w-max" role="tablist">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab;

          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={isActive}
              aria-controls={`tabpanel-${tab.id}`}
              onClick={() => onTabChange(tab.id)}
              className={`
                relative px-6 py-4 text-sm tracking-wide whitespace-nowrap
                transition-colors duration-200
                md:px-8 md:text-base
                ${
                  isActive
                    ? 'text-primary-navy font-semibold border-b-2 border-primary-navy'
                    : 'text-text-medium hover:text-text-dark'
                }
              `}
            >
              {tab.label}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
