import Link from "next/link";
import Image from "next/image";
import Tag from "@/components/Tag";
import CompanyLogo from "@/components/CompanyLogo";
import {
  siteConfig,
  heroCopy,
  projects,
  comingSoonProjects,
} from "@/content/data";

const cardImages: Record<string, string> = {
  "master-material-library": "/images/ikea-card.png",
  "insights-app": "/images/suitsupply-card.png",
  "plantdesigner-web": "/images/sandvik-card.png",
  "lock-installation-apps": "/images/assa-abloy-card.png",
  "sustainable-grocery-app": "/images/grocery-card.png",
};

function getProjectImage(project: any) {
  const title = String(project.title || "").toLowerCase();

  if (title.includes("master material")) {
    return "/images/ikea-card.png";
  }

  if (title.includes("insights")) {
    return "/images/suitsupply-card.png";
  }

  if (title.includes("plantdesigner")) {
    return "/images/sandvik-card.png";
  }

  if (title.includes("lock")) {
    return "/images/assa-abloy-card.png";
  }

  if (title.includes("grocery")) {
    return "/images/grocery-card.png";
  }

  return cardImages[project.slug] || project.cardImage || "/images/ikea-card.png";
}

function ProjectLogo({ project }: { project: any }) {
  const title = String(project.title || "").toLowerCase();
  const logoKey = String(project.logoKey || "").toLowerCase();

  let logoSrc = "";

  if (title.includes("master material") || logoKey.includes("ikea")) {
    logoSrc = "/Logos/IKEA-Logo.png";
  } else if (title.includes("insights") || logoKey.includes("suitsupply")) {
    logoSrc = "/Logos/suitsupply-logo.png";
  } else if (title.includes("plantdesigner") || logoKey.includes("sandvik")) {
    logoSrc = "/Logos/sandvik-logo.png";
  } else if (title.includes("lock") || logoKey.includes("assa")) {
    logoSrc = "/Logos/Assa-abloy-logo.png";
  }

  if (logoSrc) {
    return (
      <div className="mb-5 flex h-8 items-center">
        <img
          src={logoSrc}
          alt={`${project.title} logo`}
          className="max-h-8 max-w-[160px] object-contain"
        />
      </div>
    );
  }

  if (project.logoKey) {
    return (
      <div className="mb-5">
        <CompanyLogo logoKey={project.logoKey} />
      </div>
    );
  }

  return null;
}

function ComingSoonLogo({ item }: { item: any }) {
  const text = `${item.logoText || ""} ${item.description || ""} ${item.title || ""}`
    .toLowerCase()
    .replace(/\s+/g, "");

  let logoSrc = "";

  if (text.includes("arjo") || text.includes("ario")) {
    logoSrc = "/Logos/Arjo-Logo.png";
  } else if (
    text.includes("lagkagehuset") ||
    text.includes("lagkage") ||
    text.includes("lagkagehuset")
  ) {
    logoSrc = "/Logos/Lagkagehuset-logo.png";
  }

  if (logoSrc) {
    return (
      <div className="flex h-6 min-w-[140px] items-center">
        <img
          src={logoSrc}
          alt={`${item.logoText} logo`}
          className="max-h-6 max-w-[140px] object-contain"
        />
      </div>
    );
  }

  return (
    <span
      className={`font-bold text-ink ${
        item.logoStyle === "ario"
          ? "text-base tracking-tight"
          : "text-xs uppercase tracking-[0.15em]"
      }`}
    >
      {item.logoText}
    </span>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-ink">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-10">
        {/* Header */}
        <header className="pt-5 pb-10 sm:pb-14">
          <span className="text-xs text-ink-secondary">
            {siteConfig.name} ©{siteConfig.year}
          </span>
        </header>

        {/* Hero */}
        <section className="pb-16 sm:pb-20 lg:pb-24">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_auto] md:items-start md:gap-14 lg:gap-20">
            <div className="max-w-3xl">
              <h1 className="font-bold tracking-tight leading-[1.02] text-[38px] sm:text-[48px] lg:text-[64px]">
                <span className="block text-accent">Hi!</span>
                <span className="block text-ink">I&apos;m Valeria, and</span>
                <span className="block text-ink">
                  I&apos;m a{" "}
                  <span className="text-accent">
                    Senior Digital Product Designer.
                  </span>
                </span>
              </h1>

              <div className="mt-8 max-w-2xl space-y-4 text-base leading-relaxed text-ink-secondary sm:text-lg">
                <p>{heroCopy.bio1}</p>
                <p>{heroCopy.bio2}</p>
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-2">
                <span className="mr-1 text-sm font-semibold text-ink">
                  Core skills:
                </span>

                {heroCopy.coreSkills.map((skill) => (
                  <Tag key={skill.label} label={skill.label} color={skill.color} />
                ))}
              </div>
            </div>

            {/* Profile photo */}
            <div className="flex justify-start md:justify-end">
              <div className="h-36 w-36 overflow-hidden rounded-full border border-border bg-surface-card sm:h-44 sm:w-44 md:h-48 md:w-48 lg:h-56 lg:w-56">
                {heroCopy.photo ? (
                  <Image
                    src={heroCopy.photo}
                    alt="Valeria Iezzi"
                    width={224}
                    height={224}
                    className="h-full w-full object-cover"
                    priority
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center px-4 text-center text-xs leading-tight text-ink-muted">
                    Add photo
                    <br />
                    /public/photo.jpg
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Selected works */}
        <section className="pb-20 sm:pb-24">
          <h2 className="mb-8 text-4xl italic text-ink sm:mb-10 sm:text-5xl">
            Selected works
          </h2>

          <div className="grid grid-cols-1 gap-6">
            {projects
              .filter((project) => project.featured)
              .map((project) => {
                const imageSrc = getProjectImage(project);

                return (
                  <article
                    key={project.slug}
                    className="overflow-hidden rounded-3xl bg-surface-card"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1.15fr]">
                      {/* Text column */}
                      <div className="flex min-h-[330px] flex-col justify-between p-6 sm:p-8 lg:p-10">
                        <div>
                          <ProjectLogo project={project} />

                          <h3 className="mb-5 max-w-2xl text-2xl font-bold leading-tight text-ink sm:text-3xl">
                            {project.title}
                          </h3>

                          <div className="mb-5 flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                              <Tag
                                key={tag.label}
                                label={tag.label}
                                color={tag.color}
                              />
                            ))}
                          </div>

                          <p className="max-w-2xl text-base leading-relaxed text-ink-secondary">
                            {project.description}
                          </p>
                        </div>

                        <div className="mt-8">
                          <Link
                            href={`/projects/${project.slug}`}
                            className="inline-flex items-center gap-1 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent"
                          >
                            View project →
                          </Link>
                        </div>
                      </div>

                      {/* Image column */}
                      <div className="relative min-h-[280px] overflow-hidden bg-[#eeeeee] sm:min-h-[340px] md:min-h-full">
                        <Image
                          src={imageSrc}
                          alt={`${project.title} preview`}
                          fill
                          sizes="(max-width: 768px) 100vw, 55vw"
                          className="object-cover object-center"
                        />
                      </div>
                    </div>
                  </article>
                );
              })}
          </div>
        </section>

        {/* Coming soon */}
        <section className="border-t border-border py-10 sm:py-12">
          <div className="space-y-4">
            {comingSoonProjects.map((item) => (
              <div
                key={item.logoText}
                className="flex flex-wrap items-center gap-x-4 gap-y-2"
              >
                <span className="whitespace-nowrap rounded-full border border-border bg-surface-card px-2.5 py-0.5 text-[10px] font-medium text-ink-secondary">
                  Coming soon
                </span>

                <ComingSoonLogo item={item} />

                <span className="text-xs text-ink-muted">{item.year}</span>

                <span className="text-xs text-ink-secondary">
                  {item.description}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="flex flex-col items-center gap-8 pb-8 pt-8 sm:flex-row sm:justify-between">
          <a
            href="#"
            className="rounded-full border border-border px-4 py-1.5 text-xs text-ink-secondary transition-colors hover:border-ink hover:text-ink"
          >
            Top ↑
          </a>

          <span className="text-xs text-ink-secondary">
            {siteConfig.name} ©{siteConfig.year}
          </span>
        </footer>
      </div>
    </main>
  );
}
