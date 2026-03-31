import { LineChart, Line, ResponsiveContainer } from "recharts";

interface KpiCardProps {
  label: string;
  value: string;
  change: string;
  changeDirection: "up" | "down";
  sparkline: number[];
}

const KpiCard = ({ label, value, change, changeDirection, sparkline }: KpiCardProps) => {
  const data = sparkline.map((v, i) => ({ v, i }));
  const isUp = changeDirection === "up";

  return (
    <div className="bg-card rounded-xl p-4 shadow-sm border border-border flex-1 min-w-0">
      <p className="text-xs text-muted-foreground mb-1">{label}</p>
      <p className="text-2xl font-bold text-card-foreground">{value}</p>
      <div className="flex items-center gap-1 mt-0.5">
        <span className={`text-xs font-medium ${isUp ? "text-success" : "text-danger"}`}>
          {isUp ? "↑" : "↓"} {change}
        </span>
      </div>
      <div className="h-10 mt-2">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <Line
              type="monotone"
              dataKey="v"
              stroke="hsl(262, 60%, 50%)"
              strokeWidth={1.5}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default KpiCard;
