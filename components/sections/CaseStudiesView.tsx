"use client";

import React, { useState, useMemo } from "react";
import {
  caseStudiesHeader,
  caseStudyCategories,
  caseStudiesList,
  CaseStudyCategory,
  CaseStudyData,
} from "@/data/case-studies";
import { SegmentedTabs, TabOption } from "@/components/ui/SegmentedTabs";
import { CaseStudyCard } from "@/components/sections/CaseStudyCard";
import { CaseStudyModal } from "@/components/sections/CaseStudyModal";

export function CaseStudiesView() {
  const [selectedCategory, setSelectedCategory] = useState<CaseStudyCategory>("All");
  const [activeModalStudy, setActiveModalStudy] = useState<CaseStudyData | null>(null);

  const tabs: TabOption<CaseStudyCategory>[] = caseStudyCategories.map((cat) => ({
    id: cat,
    label: cat,
    badge: cat === "All" ? caseStudiesList.length : caseStudiesList.filter((s) => s.category === cat).length,
  }));

  const filteredStudies = useMemo(() => {
    if (selectedCategory === "All") {
      return caseStudiesList;
    }
    return caseStudiesList.filter((study) => study.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="w-full space-y-12">
      {/* Category Filter via SegmentedTabs */}
      <div className="flex justify-center overflow-x-auto pb-2">
        <SegmentedTabs
          options={tabs}
          activeTab={selectedCategory}
          onChange={(tab) => setSelectedCategory(tab)}
        />
      </div>

      {/* Grid of 7 Result Cards in Results-Strip Style */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredStudies.map((study) => (
          <CaseStudyCard
            key={study.id}
            caseStudy={study}
            onOpenDetails={(selected) => setActiveModalStudy(selected)}
          />
        ))}
      </div>

      {/* Footnote */}
      <div className="pt-8 text-center">
        <p className="text-xs font-mono text-ink-muted">
          * {caseStudiesHeader.footnote}
        </p>
      </div>

      {/* Detail Modal */}
      <CaseStudyModal
        isOpen={Boolean(activeModalStudy)}
        caseStudy={activeModalStudy}
        onClose={() => setActiveModalStudy(null)}
      />
    </div>
  );
}
