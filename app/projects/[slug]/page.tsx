import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Tag from "@/components/Tag";
import CompanyLogo from "@/components/CompanyLogo";
import { getProjectBySlug, getAdjacentProjects, projects, siteConfig } from "@/content/data";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return {
    title: `${project.title} — ${siteConfig.name}`,
    description: project.description,
  };
}

/* ── Shared image placeholder ───────────────────────────────── */
function ImagePlaceholder({ note }: { note: string }) {
  return (
    <div className="my-6 flex w-full items-center justify-center rounded-2xl border border-dashed border-border bg-surface-card py-14">
      {/* ← Update: replace with <Image src="..." alt="..." /> */}
      <span className="px-10 text-center text-xs leading-relaxed text-ink-muted">{note}</span>
    </div>
  );
}

export default function ProjectPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(params.slug);

  return (
    <div className="min-h-screen bg-white">
      {/* ── Page top bar ───────────────────────────────────────── */}
      <header className="px-6 md:px-10 pt-5 flex items-center justify-between">
        <Link
          href="/"
          className="text-xs text-ink-secondary hover:text-ink transition-colors flex items-center gap-1"
        >
          ← Back to homepage
        </Link>
        <span className="text-xs text-ink-secondary">
          {siteConfig.name} ©{siteConfig.year}
        </span>
      </header>

      {/* ── Title block ────────────────────────────────────────── */}
      <section className="px-6 md:px-16 lg:px-32 pt-10 pb-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-ink mb-2">{project.title}</h1>
        {project.dateRange && (
          <p className="text-sm text-ink-secondary mb-4">{project.dateRange}</p>
        )}
        <div className="flex flex-wrap justify-center gap-2">
          {project.tags.map((tag) => (
            <Tag key={tag.label} label={tag.label} color={tag.color} size="md" />
          ))}
        </div>
      </section>

      {/* ── Hero image ─────────────────────────────────────────── */}
      <div className="px-6 md:px-10 mb-10">
        {project.heroImage ? (
          <div className="relative w-full overflow-hidden rounded-2xl" style={{ aspectRatio: "16/7" }}>
            <Image
              src={project.heroImage}
              alt={project.title}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>
        ) : (
          /* ← Update: add hero image at /public/images/<slug>-card.png */
          <ImagePlaceholder
            note={`Hero image — add at /public/images/${project.slug}-card.png`}
          />
        )}
      </div>

      {/* ── Info table ─────────────────────────────────────────── */}
      {project.infoTable && (
        <div className="px-6 md:px-10 mb-12 overflow-x-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:flex lg:flex-wrap gap-8 border-t border-b border-border py-6">
            {project.infoTable.map((row) => (
              <div key={row.label} className="min-w-[80px]">
                {/* Client: show logo if available */}
                {row.label === "Client" && project.logoKey ? (
                  <>
                    <p className="text-[10px] font-semibold text-ink-muted uppercase tracking-wider mb-2">
                      {row.label}
                    </p>
                    <CompanyLogo logoKey={project.logoKey} />
                  </>
                ) : (
                  <>
                    <p className="text-[10px] font-semibold text-ink-muted uppercase tracking-wider mb-2">
                      {row.label}
                    </p>
                    <ul className="space-y-0.5">
                      {row.items.map((item) => (
                        <li key={item} className="text-xs text-ink leading-snug">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Body content ───────────────────────────────────────── */}
      <article className="px-6 md:px-16 lg:px-32 max-w-4xl mx-auto pb-16">
        {/* Project goal */}
        {project.goal && (
          <section className="mb-12">
            <h2 className="text-xl font-bold text-ink mb-4">Project goal</h2>
            <p className="text-ink-secondary text-sm leading-relaxed whitespace-pre-line">
              {project.goal}
            </p>
          </section>
        )}

        {/* Process sections */}
        {project.processSections && project.processSections.length > 0 && (
          <section className="mb-12">
            <h2 className="text-xl font-bold text-ink mb-8">Process</h2>
            <div className="space-y-12">
              {project.processSections.map((section) => (
                <div key={section.heading}>
                  <h3 className="text-base font-semibold text-ink mb-3">
                    {section.heading}
                  </h3>
                  <p className="text-ink-secondary text-sm leading-relaxed whitespace-pre-line mb-4">
                    {section.body}
                  </p>
                  {section.image ? (
                    <div className="relative mt-4 w-full overflow-hidden rounded-2xl">
                      <Image
                        src={section.image}
                        alt={section.imageAlt ?? section.heading}
                        width={900}
                        height={500}
                        className="h-auto w-full object-cover"
                        sizes="(max-width: 768px) 100vw, 800px"
                      />
                    </div>
                  ) : (
                    /* ← Update: add process image at /public/images/<slug>/ */
                    <ImagePlaceholder
                      note={`Process image for "${section.heading}" — add path to image field in content/data.ts`}
                    />
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Final solution */}
        {project.finalSolution && project.finalSolution.length > 0 && (
          <section className="mb-12">
            <h2 className="text-xl font-bold text-ink mb-8">Final solution</h2>
            <div className="space-y-10">
              {project.finalSolution.map((item) => (
                <div key={item.number}>
                  {item.image ? (
                    <div className="relative mb-3 w-full overflow-hidden rounded-2xl">
                      <Image
                        src={item.image}
                        alt={item.caption}
                        width={900}
                        height={560}
                        className="h-auto w-full"
                        sizes="(max-width: 768px) 100vw, 800px"
                      />
                    </div>
                  ) : (
                    /* ← Update: add solution image at /public/images/<slug>/ */
                    <ImagePlaceholder
                      note={`Solution image ${item.number} — add path to image field in content/data.ts`}
                    />
                  )}
                  <p className="text-xs text-ink-secondary italic leading-relaxed">
                    <span className="not-italic font-semibold text-ink">{item.number}</span>
                    {" "}— {item.caption}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Outcome */}
        {(project.outcome || project.outcomeItems) && (
          <section className="mb-12">
            <h2 className="text-xl font-bold text-ink mb-4">Outcome</h2>
            {project.outcome && (
              <p className="text-ink-secondary text-sm leading-relaxed mb-4">
                {project.outcome}
              </p>
            )}
            {project.outcomeItems && project.outcomeItems.length > 0 && (
              <ul className="space-y-2">
                {project.outcomeItems.map((item) => (
                  <li key={item} className="text-sm text-ink-secondary flex items-start gap-2">
                    <span className="text-accent mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </section>
        )}
      </article>

      {/* ── Footer navigation ───────────────────────────────────── */}
      <footer className="border-t border-border px-6 md:px-10 py-6 flex items-center justify-between">
        {prev ? (
          <Link
            href={`/projects/${prev.slug}`}
            className="text-xs text-ink-secondary hover:text-ink transition-colors"
          >
            ← Previous project
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={`/projects/${next.slug}`}
            className="text-xs text-ink-secondary hover:text-ink transition-colors"
          >
            Next project →
          </Link>
        ) : (
          <Link
            href="/"
            className="text-xs text-ink-secondary hover:text-ink transition-colors"
          >
            Back to homepage →
          </Link>
        )}
      </footer>
    </div>
  );
}
