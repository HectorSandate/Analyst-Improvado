import Sidebar from "@/components/dashboard/Sidebar";
import FilterBar from "@/components/dashboard/FilterBar";
import KpiCard from "@/components/dashboard/KpiCard";
import PerformanceTable from "@/components/dashboard/PerformanceTable";
import TrendChart from "@/components/dashboard/TrendChart";
import {
  kpiCards,
  kpiCardsRow2,
  channelPerformance,
  dataSourcePerformance,
  campaignPerformance,
} from "@/data/dashboardData";
import { Globe, Database, Megaphone } from "lucide-react";

const Index = () => {
  const channelRows = channelPerformance.map((c) => ({
    name: c.channel,
    impressions: c.impressions,
    changePct: c.changePct,
    changeDir: c.changeDir,
    ctr: c.ctr,
    ctrChange: c.ctrChange,
    ctrDir: c.ctrDir,
  }));

  const sourceRows = dataSourcePerformance.map((s) => ({
    name: s.source,
    impressions: s.impressions,
    changePct: s.changePct,
    changeDir: s.changeDir,
    ctr: s.ctr,
    ctrChange: s.ctrChange,
    ctrDir: s.ctrDir,
  }));

  const campaignRows = campaignPerformance.map((c) => ({
    name: c.campaign,
    impressions: c.impressions,
    changePct: c.changePct,
    changeDir: "neutral" as const,
    ctr: c.ctr,
    ctrChange: c.ctrChange,
  }));

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <FilterBar />
        <div className="flex-1 p-6 overflow-auto">
          <div className="flex gap-6">
            {/* Left column - KPIs + Chart */}
            <div className="flex-1 min-w-0 space-y-4">
              {/* KPI Row 1 */}
              <div className="grid grid-cols-4 gap-3">
                {kpiCards.map((kpi) => (
                  <KpiCard key={kpi.label} {...kpi} />
                ))}
              </div>
              {/* KPI Row 2 */}
              <div className="grid grid-cols-4 gap-3">
                {kpiCardsRow2.map((kpi) => (
                  <KpiCard key={kpi.label} {...kpi} />
                ))}
              </div>
              {/* Trend Chart */}
              <TrendChart />
            </div>

            {/* Right column - Tables */}
            <div className="w-[420px] flex-shrink-0 space-y-4">
              <PerformanceTable
                title="Channel Performance"
                icon={<Globe className="w-5 h-5 text-primary" />}
                nameHeader="Channel"
                rows={channelRows}
              />
              <PerformanceTable
                title="Data Source Performance"
                icon={<Database className="w-5 h-5 text-primary" />}
                nameHeader="Source"
                rows={sourceRows}
              />
              <PerformanceTable
                title="Campaign Performance"
                icon={<Megaphone className="w-5 h-5 text-primary" />}
                nameHeader="Campaign"
                rows={campaignRows}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
