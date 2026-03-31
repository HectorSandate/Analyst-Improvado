import { BarChart3, Filter, MoreVertical } from "lucide-react";

interface TableRow {
  name: string;
  impressions: string;
  changePct: string;
  changeDir: "up" | "down" | "neutral";
  ctr: string;
  ctrChange: string;
  ctrDir?: "up" | "down" | "neutral";
}

interface PerformanceTableProps {
  title: string;
  icon: React.ReactNode;
  nameHeader: string;
  rows: TableRow[];
}

const PerformanceTable = ({ title, icon, nameHeader, rows }: PerformanceTableProps) => (
  <div className="bg-card rounded-xl shadow-sm border border-border">
    <div className="flex items-center justify-between px-4 pt-4 pb-2">
      <div className="flex items-center gap-2">
        {icon}
        <h3 className="font-semibold text-sm text-card-foreground">{title}</h3>
      </div>
      <div className="flex items-center gap-1 text-muted-foreground">
        <BarChart3 className="w-4 h-4 cursor-pointer hover:text-foreground" />
        <Filter className="w-4 h-4 cursor-pointer hover:text-foreground" />
        <MoreVertical className="w-4 h-4 cursor-pointer hover:text-foreground" />
      </div>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full text-xs">
        <thead>
          <tr className="border-b border-border text-muted-foreground">
            <th className="text-left px-4 py-2 font-medium">{nameHeader}</th>
            <th className="text-right px-3 py-2 font-medium">Impressions</th>
            <th className="text-right px-3 py-2 font-medium">% Δ</th>
            <th className="text-right px-3 py-2 font-medium">CTR</th>
            <th className="text-right px-3 py-2 font-medium">% Δ</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-b border-border last:border-0 hover:bg-muted/50">
              <td className="px-4 py-2 text-card-foreground font-medium truncate max-w-[180px]">{r.name}</td>
              <td className="text-right px-3 py-2 text-card-foreground">{r.impressions}</td>
              <td className={`text-right px-3 py-2 font-medium ${r.changeDir === "up" ? "text-success" : r.changeDir === "down" ? "text-danger" : "text-muted-foreground"}`}>
                {r.changePct !== "-" && r.changeDir !== "neutral" ? (r.changeDir === "up" ? "↑" : "↓") : ""} {r.changePct}
              </td>
              <td className="text-right px-3 py-2 text-card-foreground">{r.ctr}</td>
              <td className={`text-right px-3 py-2 font-medium ${r.ctrDir === "up" ? "text-success" : r.ctrDir === "down" ? "text-danger" : "text-muted-foreground"}`}>
                {r.ctrChange !== "-" && r.ctrDir && r.ctrDir !== "neutral" ? (r.ctrDir === "up" ? "↑" : "↓") : ""} {r.ctrChange}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default PerformanceTable;
