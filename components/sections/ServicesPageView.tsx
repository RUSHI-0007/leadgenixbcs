"use client";

import React, { useState } from "react";
import { servicesList, ServiceItem } from "@/data/services";
import { SegmentedTabs, TabOption } from "@/components/ui/SegmentedTabs";
import { WindowFrame } from "@/components/ui/WindowFrame";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import {
  CalendarCheck,
  Target,
  Ticket,
  Layers,
  Database,
  Handshake,
  Workflow,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

type ServiceCategory = "all" | "demand" | "sales";

const tabs: TabOption<ServiceCategory>[] = [
  { id: "all", label: "All services", badge: 8 },
  { id: "demand", label: "Generate demand", badge: 5 },
  { id: "sales", label: "Sell & automate", badge: 3 },
];

const demandIds = ["appointment-setting", "lead-generation", "event-marketing", "account-based-marketing", "database-building"];
const salesIds = ["sales-outsourcing", "marketing-automation", "digital-marketing"];

export function ServicesPageView() {
  const [activeTab, setActiveTab] = useState<ServiceCategory>("all");
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const filteredServices = servicesList.filter((s) => {
    if (activeTab === "demand") return demandIds.includes(s.id);
    if (activeTab === "sales") return salesIds.includes(s.id);
    return true;
  });

  const renderIcon = (iconName: string) => {
    const props = { className: "w-7 h-7 text-indigo stroke-[1.5]", "aria-hidden": "true" as const };
    switch (iconName) {
      case "calendar-check":
        return <CalendarCheck {...props} />;
      case "target":
        return <Target {...props} />;
      case "ticket":
        return <Ticket {...props} />;
      case "layers":
        return <Layers {...props} />;
      case "database":
        return <Database {...props} />;
      case "handshake":
        return <Handshake {...props} />;
      case "workflow":
        return <Workflow {...props} />;
      case "trending-up":
        return <TrendingUp {...props} />;
      default:
        return <Target {...props} />;
    }
  };

  return (
    <div className="w-full space-y-12">
      {/* SegmentedTabs */}
      <div className="flex justify-center">
        <SegmentedTabs
          options={tabs}
          activeTab={activeTab}
          onChange={(tab) => setActiveTab(tab)}
          tone="indigo"
        />
      </div>

      {/* Grid of 8 Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredServices.map((service) => (
          <div
            key={service.id}
            id={service.id}
            onClick={() => setActiveModalService(service)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setActiveModalService(service);
              }
            }}
            role="button"
            tabIndex={0}
            className="rounded-card border border-line bg-white p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:border-indigo/50 hover:shadow-card cursor-pointer group text-left"
            aria-label={`View deliverables for ${service.title}`}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="mb-1">
                  {renderIcon(service.iconName)}
                </div>
                <span className="text-xs font-mono font-bold text-ink-muted">
                  {service.number}
                </span>
              </div>

              <h3 className="font-heading font-bold text-xl text-ink group-hover:text-indigo transition-colors">
                {service.title}
              </h3>

              <p className="text-sm text-ink-soft leading-relaxed">
                {service.shortDescription}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-line/60 flex items-center justify-between text-xs font-bold text-indigo group-hover:underline">
              <span>View deliverables ({service.deliverables.length})</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </div>
          </div>
        ))}
      </div>

      {/* WindowFrame Modal Listing Key Deliverables */}
      {activeModalService && (
        <Modal
          isOpen={Boolean(activeModalService)}
          onClose={() => setActiveModalService(null)}
          title={activeModalService.title}
        >
          <div className="space-y-6">
            <p className="text-sm text-ink-soft leading-relaxed">
              {activeModalService.shortDescription}
            </p>

            <WindowFrame title={`${activeModalService.title} deliverables`} className="shadow-none border border-line">
              <div className="divide-y divide-line/70">
                {activeModalService.deliverables.map((item, idx) => (
                  <div
                    key={item}
                    className="flex items-center justify-between py-2.5 px-2 hover:bg-mist transition-colors rounded"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-indigo shrink-0" aria-hidden="true" />
                      <span className="text-xs sm:text-sm font-medium text-ink">
                        {item}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-ink-muted">
                      0{idx + 1}
                    </span>
                  </div>
                ))}
              </div>
            </WindowFrame>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-ink-muted font-mono">
                Monthly cycle • Managed execution
              </span>
              <Button href="/contact" variant="indigo" size="md">
                Inquire about this service →
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
