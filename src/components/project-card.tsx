"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

import type { ProjectPlatform } from "@/content/site-data";

type Project = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  platform: ProjectPlatform;
  category: string;
};

const ProjectModal = dynamic(
  () => import("@/components/project-modal").then((mod) => mod.ProjectModal),
  { ssr: false }
);

export function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] text-left transition hover:-translate-y-0.5 hover:border-white/18 hover:bg-white/[0.05]"
        onClick={() => setOpen(true)}
        type="button"
      >
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            alt={project.title}
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            src={project.thumbnail}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
        </div>
        <div className="space-y-2 px-5 py-5">
          <p className="text-[11px] uppercase tracking-[0.24em] text-white/46">
            {project.category}
          </p>
          <h3 className="font-serif text-2xl text-white">{project.title}</h3>
          <p className="line-clamp-2 text-sm leading-6 text-white/58">
            {project.description}
          </p>
        </div>
      </button>
      <ProjectModal open={open} onClose={() => setOpen(false)} project={project} />
    </>
  );
}
