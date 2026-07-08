import Link from "next/link";
import Image from "next/image";
import { projects } from "@/content/data";

const projectImages: Record<string, string> = {
  "ikea-master-material-library": "/images/ikea-card.png",
  "suitsupply-insights-app": "/images/suitsupply-card.png",
  "sandvik-plantdesigner-web": "/images/sandvik-card.png",
  "assa-abloy-lock-installation": "/images/assa-abloy-card.png",
  "sustainable-grocery-app": "/images/grocery-card.png",
};

function AsteriskLogo() {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-9 h-9"
      aria-hidden="true"
    >
      <line x1="20" y1="3" x2="20" y2="37" stroke="#2F2A2A" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="3" y1="20" x2="37" y2="20" stroke="#2F2A2A" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="7.39" y1="7.39" x2="32.61" y2="32.61" stroke="#2F2A2A" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="32.61" y1="7.39" x2="7.39" y2="32.61" stroke="#2F2A2A" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF6EE]">

      {/* ── Navigation ─────────────────────────────────────── */}
      <nav className="flex items-center justify-between px-6 sm:px-10 h-[66px]">
        <AsteriskLogo />
        <div className="flex items-center gap-12 sm:gap-[72px] font-display italic text-[24px] sm:text-[32px] text-[#2F2A2A] leading-none">
          <Link href="#work" className="underline underline-offset-4">Work</Link>
          <Link href="#me">Me</Link>
        </div>
      </nav>

      {/* ── Hero ───────────────────────────────────────────── */}
      <section id="me" className="px-6 sm:px-10 pt-8 pb-16 lg:pb-24">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 lg:gap-20">

          {/* Text */}
          <div className="flex flex-col gap-6 max-w-[848px]">
            <h1 className="font-sans font-bold text-[38px] sm:text-[42px] leading-[1.3] text-[#2F2A2A]">
              Ciao! I&apos;m Valeria and<br />
              I&apos;m a Digital Product Designer
            </h1>
            <div className="flex flex-col gap-4 text-[#615476] font-medium text-base sm:text-[20px] leading-[32px] tracking-[-0.42px]">
              <p>
                With 5+ years of experience, I design digital products across internal
                tools, e-commerce, retail, analytics and complex platforms.
              </p>
              <p>
                My work combines UX research, product discovery, interaction design and
                polished UI execution. I help teams turn complex workflows and user needs
                into clear, scalable and innovative product experiences.
              </p>
            </div>
          </div>

          {/* Profile photo */}
          <div className="flex-shrink-0 w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] lg:w-[313px] lg:h-[313px] rounded-full overflow-hidden shadow-[2px_2px_20px_rgba(208,208,208,0.3)]">
            <Image
              src="/photo.png"
              alt="Valeria Iezzi"
              width={313}
              height={313}
              className="w-full h-full object-cover object-top"
              priority
            />
          </div>

        </div>
      </section>

      {/* ── Selected works ─────────────────────────────────── */}
      <section id="work" className="pb-16">

        <div className="px-6 sm:px-10 mb-8">
          <h2 className="font-display italic text-[42px] sm:text-[52px] leading-[1.2] text-[#2F2A2A]">
            Selected works
          </h2>
        </div>

        {/* Horizontal scrolling card row */}
        <div className="flex gap-6 sm:gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-6 sm:px-10 pb-6">
          {projects
            .filter((p) => p.featured)
            .map((project) => {
              const imageSrc = projectImages[project.slug] ?? project.cardImage ?? "";
              return (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className="relative flex-shrink-0 w-[82vw] sm:w-[480px] lg:w-[560px] h-[560px] sm:h-[600px] lg:h-[640px] rounded-[22px] overflow-hidden snap-start block group"
                >
                  {/* Background image */}
                  {imageSrc && (
                    <Image
                      src={imageSrc}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 82vw, (max-width: 1024px) 480px, 560px"
                    />
                  )}

                  {/* Dark gradient overlay — matches Figma */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent from-[17%] to-[rgba(2,60,120,0.65)]" />

                  {/* Card content */}
                  <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col gap-3">
                    {project.company && (
                      <p className="font-display italic text-white text-[34px] sm:text-[38px] leading-tight">
                        {project.company}
                      </p>
                    )}
                    <p className="text-white font-medium text-[15px] sm:text-[17px] leading-[1.8] tracking-[-0.36px]">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {project.tags.map((tag) => (
                        <span
                          key={tag.label}
                          className="px-[10px] py-[8px] rounded-full border border-white/80 bg-white/5 backdrop-blur-[17px] text-white text-[13px] sm:text-[14px] font-medium leading-none tracking-[-0.3px]"
                        >
                          {tag.label}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────── */}
      <footer className="px-6 sm:px-10 py-6 flex justify-end">
        <p className="font-sans text-[18px] sm:text-[20px] text-[#2F2A2A] tracking-[-0.42px]">
          Valeria Iezzi <span className="font-semibold">©2026</span>
        </p>
      </footer>

    </main>
  );
}
