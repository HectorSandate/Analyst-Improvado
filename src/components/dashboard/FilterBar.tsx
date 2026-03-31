import { filterOptions } from "@/data/dashboardData";
import { Database, Layout, Search, Filter, Calendar, ChevronDown } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  database: <Database className="w-3.5 h-3.5" />,
  layout: <Layout className="w-3.5 h-3.5" />,
  search: <Search className="w-3.5 h-3.5" />,
  filter: <Filter className="w-3.5 h-3.5" />,
  calendar: <Calendar className="w-3.5 h-3.5" />,
};

const FilterBar = () => (
  <div className="flex items-center gap-3 px-6 py-3 bg-card border-b border-border">
    {filterOptions.map((f) => (
      <button
        key={f.label}
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-secondary-foreground text-xs font-medium hover:bg-accent transition-colors"
      >
        {iconMap[f.icon]}
        <span>{f.label}</span>
        <ChevronDown className="w-3 h-3 text-muted-foreground" />
      </button>
    ))}
  </div>
);

export default FilterBar;
