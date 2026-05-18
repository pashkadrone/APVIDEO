"use client";

import { cn } from "@/lib/utils";

const visibleFilters = ["", "Reels"] as const;

export function SearchFilters({
  activeCategory,
  onCategoryChange
}: {
  categories: readonly string[];
  query: string;
  activeCategory: string;
  onQueryChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2 md:justify-end">
      {visibleFilters.map((category) => {
        const label = category === "" ? "Все" : category;

        return (
          <button
            key={label}
            className={cn(
              "rounded-full border px-4 py-2 text-sm transition",
              activeCategory === category
                ? "border-white/30 bg-white text-black"
                : "border-white/12 bg-white/5 text-white/70 hover:bg-white/10"
            )}
            onClick={() => onCategoryChange(category)}
            type="button"
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
