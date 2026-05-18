"use client";

import { useEffect, useState } from "react";

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
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setDebouncedQuery(query.trim().toLowerCase());
    }, 220);

    return () => window.clearTimeout(timeout);
  }, [query]);

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      !activeCategory || project.category === activeCategory;
    const haystack = `${project.title} ${project.description}`.toLowerCase();
    const matchesQuery = !debouncedQuery || haystack.includes(debouncedQuery);

    return matchesCategory && matchesQuery;
  });

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8" id="portfolio">
      <div className="grid gap-10 lg:grid-cols-[0.34fr_0.66fr]">
        <div className="space-y-5">
          <p className="text-xs uppercase tracking-[0.3em] text-white/42">
            Избранные работы
          </p>
          <h2 className="max-w-sm font-serif text-4xl text-white md:text-5xl">
            Портфолио без лишней нагрузки и без хранения видео на сайте.
          </h2>
          <p className="max-w-sm text-sm leading-7 text-white/60">
            Все видео открываются через YouTube и Instagram embeds, а сайт
            остается быстрым, легким и визуально чистым.
          </p>
          <SearchFilters
            activeCategory={activeCategory}
            categories={categories}
            onCategoryChange={setActiveCategory}
            onQueryChange={setQuery}
            query={query}
          />
        </div>

        <div className="space-y-8">
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
      </div>
    </section>
  );
}
