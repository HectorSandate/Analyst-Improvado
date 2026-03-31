import { timeSeriesData } from "@/data/dashboardData";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { ArrowUp, ArrowDown, BarChart3, Filter, MoreVertical } from "lucide-react";

const formatYAxis = (val: number) => {
  if (val >= 1000000) return `${(val / 1000000).toFixed(1)}M`;
  if (val >= 1000) return `${(val / 1000).toFixed(0)}K`;
  return val.toString();
};

const TrendChart = () => (
  <div className="bg-card rounded-xl shadow-sm border border-border p-4">
    <div className="flex items-center justify-end gap-1 mb-3 text-muted-foreground">
      <ArrowUp className="w-4 h-4 cursor-pointer hover:text-foreground" />
      <ArrowDown className="w-4 h-4 cursor-pointer hover:text-foreground" />
      <BarChart3 className="w-4 h-4 cursor-pointer hover:text-foreground" />
      <Filter className="w-4 h-4 cursor-pointer hover:text-foreground" />
      <MoreVertical className="w-4 h-4 cursor-pointer hover:text-foreground" />
    </div>
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={timeSeriesData}>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(250, 20%, 90%)" />
        <XAxis dataKey="month" tick={{ fontSize: 11, fill: "hsl(250, 10%, 50%)" }} />
        <YAxis tickFormatter={formatYAxis} tick={{ fontSize: 11, fill: "hsl(250, 10%, 50%)" }} />
        <Tooltip
          formatter={(value: number) => formatYAxis(value)}
          contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid hsl(250, 20%, 90%)" }}
        />
        <Legend
          iconType="plainline"
          wrapperStyle={{ fontSize: 12, paddingTop: 8 }}
        />
        <Line type="monotone" dataKey="programmatic" name="Programmatic" stroke="hsl(262, 60%, 50%)" strokeWidth={2} dot={{ r: 3 }} />
        <Line type="monotone" dataKey="paidSearch" name="Paid Search" stroke="hsl(330, 70%, 55%)" strokeWidth={2} dot={{ r: 3 }} />
        <Line type="monotone" dataKey="paidSocial" name="Paid Social" stroke="hsl(180, 50%, 55%)" strokeWidth={2} dot={{ r: 3 }} />
        <Line type="monotone" dataKey="organic" name="Organic" stroke="hsl(30, 80%, 55%)" strokeWidth={2} dot={{ r: 3 }} />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default TrendChart;
