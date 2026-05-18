"use client";

import { useState } from "react";

import type { ProjectItem } from "@/content/site-data";
import { ProjectCard } from "@/components/project-card";
import { SearchFilters } from "@/components/search-filters";

export function PortfolioSection({
  categories,
  projects
}: {
  categories: readonly string[];
  projects: ProjectItem[];
}) {
  const [activeCategory, setActiveCategory] = useState("");

  const filteredProjects = projects.filter((project) => {
    return !activeCategory || project.category === activeCategory;
  });

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8" id="portfolio">
      <div className="space-y-10">
        <div className="flex flex-col gap-6 border-b border-white/8 pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-white/42">
              Избранные работы
            </p>
            <h2 className="mt-4 font-serif text-4xl text-white md:text-5xl">
              Портфолио
            </h2>
          </div>
          <div className="w-full lg:w-auto">
            <SearchFilters
              activeCategory={activeCategory}
              categories={categories}
              onCategoryChange={setActiveCategory}
              onQueryChange={() => {}}
              query=""
            />
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        {filteredProjects.length === 0 ? (
          <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-8 text-white/60">
            По текущим фильтрам ничего не найдено.
          </div>
        ) : null}
      </div>
    </section>
  );
}
