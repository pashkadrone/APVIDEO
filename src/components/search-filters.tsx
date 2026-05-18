"use client";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function SearchFilters({
  categories,
  query,
  activeCategory,
  onQueryChange,
  onCategoryChange
}: {
  categories: readonly string[];
  query: string;
  activeCategory: string;
  onQueryChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
}) {
  return (
    <div className="space-y-5">
      <Input
        aria-label="Поиск проектов"
        placeholder="Поиск проектов"
        value={query}
        onChange={(event) => onQueryChange(event.target.value)}
      />
      <div className="flex flex-wrap gap-2">
        <button
          className={cn(
            "rounded-full border px-4 py-2 text-sm transition",
            !activeCategory
              ? "border-white/30 bg-white text-black"
              : "border-white/12 bg-white/5 text-white/70 hover:bg-white/10"
          )}
          onClick={() => onCategoryChange("")}
          type="button"
        >
          Все
        </button>
        {categories.map((category) => (
          <button
            key={category}
            className={cn(
              "rounded-full border px-4 py-2 text-sm transition",
              activeCategory === category
                ? "border-white/30 bg-white text-black"
                : "border-white/12 bg-white/5 text-white/70 hover:bg-white/10"
            )}
            onClick={() => onCategoryChange(category)}
            type="button"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
