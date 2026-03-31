import { sidebarNav } from "@/data/dashboardData";
import { HelpCircle } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-[200px] min-h-screen bg-sidebar flex flex-col justify-between text-sidebar-foreground">
      <div>
        {/* Logo */}
        <div className="px-5 py-5 flex items-center gap-2">
          <div className="w-7 h-7 rounded-md bg-primary-foreground/20 flex items-center justify-center text-primary-foreground font-bold text-sm">im</div>
          <span className="text-primary-foreground font-semibold text-sm tracking-wide">improvado</span>
        </div>

        {/* Nav */}
        <div className="px-3 mt-2">
          <p className="text-xs uppercase tracking-wider text-sidebar-foreground/50 px-2 mb-2">Marketing Insights</p>
          {sidebarNav.marketingInsights.map((item) => (
            <div key={item.label}>
              <div className="px-2 py-1.5 text-sm text-sidebar-foreground/80 hover:bg-sidebar-hover rounded cursor-pointer">
                {item.label}
              </div>
              {item.children.length > 0 && (
                <div className="ml-3">
                  {item.children.map((child) => (
                    <div
                      key={child}
                      className={`px-2 py-1.5 text-xs rounded cursor-pointer ${
                        child === "Executive Summary"
                          ? "text-primary-foreground bg-sidebar-active border-l-2 border-danger"
                          : "text-sidebar-foreground/60 hover:bg-sidebar-hover"
                      }`}
                    >
                      {child}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Help Section */}
      <div className="px-5 py-6 text-center">
        <div className="w-10 h-10 rounded-full bg-primary mx-auto flex items-center justify-center mb-2">
          <HelpCircle className="w-5 h-5 text-primary-foreground" />
        </div>
        <p className="text-sm font-medium text-primary-foreground mb-2">Need Help?</p>
        <div className="space-y-1 text-xs text-sidebar-foreground/60">
          <p className="hover:text-primary-foreground cursor-pointer">Contact Improvado</p>
          <p className="hover:text-primary-foreground cursor-pointer">Data Source Dictionary</p>
          <p className="hover:text-primary-foreground cursor-pointer">MCDM Dictionary</p>
          <p className="hover:text-primary-foreground cursor-pointer">Improvado? Ask AI</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
