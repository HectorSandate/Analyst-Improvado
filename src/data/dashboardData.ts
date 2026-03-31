// Realistic marketing dummy data for the dashboard

export const kpiCards = [
  {
    label: "Spend",
    value: "$36.00M",
    change: "$491.79K",
    changeDirection: "up" as const,
    sparkline: [8, 12, 9, 15, 11, 18, 14, 20, 16, 22, 19, 25, 21, 28, 24, 30, 27, 15, 20, 35, 22, 18, 29, 33],
  },
  {
    label: "CPM",
    value: "$405K",
    change: "$1.28K",
    changeDirection: "up" as const,
    sparkline: [20, 18, 22, 19, 25, 23, 28, 26, 30, 27, 32, 29, 35, 31, 20, 28, 33, 25, 30, 22, 27, 35, 30, 28],
  },
  {
    label: "CTR",
    value: "10.5%",
    change: "0.08%",
    changeDirection: "up" as const,
    sparkline: [5, 8, 6, 10, 7, 12, 9, 14, 11, 8, 13, 10, 15, 12, 9, 11, 14, 10, 13, 8, 12, 15, 11, 14],
  },
  {
    label: "CPC",
    value: "$4K",
    change: "$-18.34",
    changeDirection: "down" as const,
    sparkline: [30, 28, 32, 26, 34, 24, 36, 22, 38, 20, 35, 25, 30, 28, 33, 27, 31, 29, 34, 26, 32, 24, 30, 28],
  },
];

export const kpiCardsRow2 = [
  {
    label: "Video Views",
    value: "93K",
    change: "993.0",
    changeDirection: "up" as const,
    sparkline: [10, 15, 12, 18, 14, 20, 16, 22, 19, 25, 21, 28, 24, 15, 20, 30, 25, 18, 22, 28, 20, 15, 25, 30],
  },
  {
    label: "Impressions",
    value: "89.0K",
    change: "937.0",
    changeDirection: "up" as const,
    sparkline: [20, 25, 22, 28, 24, 30, 26, 32, 29, 35, 31, 25, 28, 33, 27, 31, 35, 29, 33, 26, 30, 34, 28, 32],
  },
  {
    label: "Conversions",
    value: "791",
    change: "36.0",
    changeDirection: "up" as const,
    sparkline: [5, 8, 6, 10, 7, 12, 9, 14, 11, 16, 13, 10, 15, 12, 18, 14, 11, 16, 13, 9, 14, 17, 12, 15],
  },
  {
    label: "Conversion Rate",
    value: "9.8%",
    change: "0.27%",
    changeDirection: "up" as const,
    sparkline: [12, 14, 11, 16, 13, 18, 15, 20, 17, 14, 19, 16, 21, 18, 15, 20, 17, 22, 19, 16, 21, 18, 23, 20],
  },
];

export const channelPerformance = [
  { channel: "Programmatic", impressions: "34.7K", changePct: "-4.2%", changeDir: "down" as const, ctr: "10.44%", ctrChange: "1.5%", ctrDir: "up" as const },
  { channel: "Paid Search", impressions: "31.4K", changePct: "30.7%", changeDir: "up" as const, ctr: "10.57%", ctrChange: "3.1%", ctrDir: "up" as const },
  { channel: "Paid Social", impressions: "11.4K", changePct: "-25.6%", changeDir: "down" as const, ctr: "10.28%", ctrChange: "-4.1%", ctrDir: "down" as const },
  { channel: "Organic", impressions: "11.5K", changePct: "-8.0%", changeDir: "down" as const, ctr: "10.6%", ctrChange: "-0.4%", ctrDir: "down" as const },
];

export const dataSourcePerformance = [
  { source: "Amazon Ad Server (Sizme...)", impressions: "5.8K", changePct: "201.0%", changeDir: "up" as const, ctr: "10.17%", ctrChange: "-10.0%", ctrDir: "down" as const },
  { source: "StackAdapt", impressions: "4.8K", changePct: "68.7%", changeDir: "up" as const, ctr: "10%", ctrChange: "-7.3%", ctrDir: "down" as const },
  { source: "LinkedIn Ads", impressions: "5.8K", changePct: "-", changeDir: "neutral" as const, ctr: "10.05%", ctrChange: "-", ctrDir: "neutral" as const },
  { source: "Facebook", impressions: "5.7K", changePct: "99.0%", changeDir: "up" as const, ctr: "10.82%", ctrChange: "14.3%", ctrDir: "up" as const },
  { source: "Google Display & Video 360", impressions: "4.7K", changePct: "65.2%", changeDir: "up" as const, ctr: "10.28%", ctrChange: "-5.8%", ctrDir: "down" as const },
  { source: "Bing Ads (Microsoft Advert...)", impressions: "4.8K", changePct: "3.7%", changeDir: "up" as const, ctr: "10.7%", ctrChange: "-1.8%", ctrDir: "down" as const },
  { source: "Google Search Ads 360", impressions: "5.8K", changePct: "-23.6%", changeDir: "down" as const, ctr: "10.97%", ctrChange: "11.0%", ctrDir: "up" as const },
];

export const campaignPerformance = [
  { campaign: "Business-focused zero tolerance arch...", impressions: "931", changePct: "-", ctr: "10.42%", ctrChange: "-" },
  { campaign: "Persistent 24/7 attitude", impressions: "1K", changePct: "-", ctr: "9.71%", ctrChange: "-" },
  { campaign: "Integrated dedicated contingency", impressions: "950", changePct: "-", ctr: "9.58%", ctrChange: "-" },
  { campaign: "Profound intangible policy", impressions: "978", changePct: "-", ctr: "8.69%", ctrChange: "-" },
  { campaign: "Centralized modular throughput", impressions: "955", changePct: "-", ctr: "9.42%", ctrChange: "-" },
  { campaign: "Automated uniform software", impressions: "952", changePct: "-", ctr: "10.19%", ctrChange: "-" },
  { campaign: "Cross-platform static hierarchy", impressions: "946", changePct: "-", ctr: "9.3%", ctrChange: "-" },
  { campaign: "Networked value-added time-frame", impressions: "953", changePct: "-", ctr: "11.54%", ctrChange: "-" },
];

export const timeSeriesData = [
  { month: "Jan 2023", programmatic: 2500000, paidSearch: 2000000, paidSocial: 1800000, organic: 1500000 },
  { month: "Feb 2023", programmatic: 3200000, paidSearch: 2800000, paidSocial: 2200000, organic: 2000000 },
  { month: "Mar 2023", programmatic: 4500000, paidSearch: 3800000, paidSocial: 3000000, organic: 2500000 },
  { month: "Apr 2023", programmatic: 5200000, paidSearch: 4500000, paidSocial: 3500000, organic: 3000000 },
  { month: "May 2023", programmatic: 6800000, paidSearch: 5500000, paidSocial: 4800000, organic: 4000000 },
  { month: "Jun 2023", programmatic: 5500000, paidSearch: 4800000, paidSocial: 5200000, organic: 4500000 },
  { month: "Jul 2023", programmatic: 7200000, paidSearch: 6000000, paidSocial: 5000000, organic: 4200000 },
  { month: "Aug 2023", programmatic: 10500000, paidSearch: 8500000, paidSocial: 7000000, organic: 5500000 },
  { month: "Sep 2023", programmatic: 11000000, paidSearch: 9000000, paidSocial: 6500000, organic: 5000000 },
  { month: "Oct 2023", programmatic: 8500000, paidSearch: 7000000, paidSocial: 5500000, organic: 4800000 },
  { month: "Nov 2023", programmatic: 9500000, paidSearch: 7500000, paidSocial: 6000000, organic: 5200000 },
  { month: "Dec 2023", programmatic: 7800000, paidSearch: 6500000, paidSocial: 5800000, organic: 4500000 },
];

export const sidebarNav = {
  marketingInsights: [
    { label: "Cross Channel", children: ["Executive Summary", "Channel Performance", "Channel Segments & Trends"] },
    { label: "Paid Ads x Google Analytics", children: [] },
    { label: "Paid Search", children: [] },
    { label: "Paid Social", children: [] },
    { label: "Search Engine Opt.", children: [] },
    { label: "Organic Social", children: [] },
    { label: "Programmatic", children: [] },
    { label: "eCommerce", children: [] },
  ],
};

export const filterOptions = [
  { label: "Data Source", icon: "database" },
  { label: "Channel", icon: "layout" },
  { label: "Campaign", icon: "search" },
  { label: "Ad Set", icon: "filter" },
  { label: "Jan 1, 2023 - Mar 31, 2023", icon: "calendar" },
];
