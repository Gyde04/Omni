import Image from "next/image";
import ProductsSection from "./products-section";
import ThemeToggle from "./theme-toggle";

const products = [
  {
    name: "LegitWriter",
    sector: "AI humanizing",
    description:
      "An AI humanizer that rewrites AI-assisted text into natural, human-like writing and includes multi-detector AI checks.",
    status: "Top product",
    tags: ["Humanizer", "AI detection", "Writing"],
    image: "/products/legitWriter.png",
    imageAlt: "Abstract visualization for LegitWriter.com",
    url: "https://www.legitwriter.com",
  },
  {
    name: "Reelup",
    sector: "AI video",
    description:
      "Create engaging video content effortlessly with AI-driven video generation and editing tools. Transform your ideas into stunning visual stories.",
    status: "Product",
    tags: ["Video", "Generation", "Editing"],
    image: "/products/reelup.png",
    imageAlt: "Abstract visualization for Reelup",
    url: "https://www.reelup.ai/",
  },
  {
    name: "VetMemos",
    sector: "Vet scribe",
    description:
      "An AI vet scribe that turns consultations into clear, structured clinical notes.",
    status: "Product",
    tags: ["Scribe", "Clinics", "Notes"],
    image: "/products/vetmemos 3.png",
    imageAlt: "Abstract visualization for VetMemos",
    url: "https://vetmemos.com",
  },
  {
    name: "chatAVA",
    sector: "AI chatbot",
    description:
      "A conversational AI assistant built to support customers, automate workflows, and respond instantly.",
    status: "Top product",
    tags: ["Chatbot", "Support", "Automation"],
    image: "/products/lumen-edge-os.svg",
    imageAlt: "Abstract visualization for chatAVA",
  },
  {
    name: "SummaryHub",
    sector: "Essay summaries",
    description:
      "A fast AI tool that summarizes essays into clear, accurate highlights.",
    status: "Product",
    tags: ["Summaries", "Essays", "Study"],
    image: "/products/aether-health-grid.svg",
    imageAlt: "Abstract visualization for SummaryHub",
  },
  {
    name: "Cashstack",
    sector: "Fintech app",
    description:
      "A fintech AI app for smarter cash flow, payments, and financial decisions.",
    status: "Product",
    tags: ["Fintech", "Payments", "Finance"],
    image: "/products/lumen-edge-os.svg",
    imageAlt: "Abstract visualization for Cashstack",
  },
  {
    name: "Thynkly",
    sector: "AI productivity",
    description:
      "An AI workspace for organizing ideas, drafting content, and planning smarter.",
    status: "Product",
    tags: ["Ideas", "Planning", "Writing"],
    image: "/products/Thynkly.jpeg",
    imageAlt: "Thynkly product visual",
  },
  {
    name: "Iwritebeta",
    sector: "AI humanizing",
    description:
      "A humanizing AI writing tool that refines tone, clarity, and originality for everyday writing.",
    status: "Top product",
    tags: ["Writing", "Humanizer", "Editing"],
    image: "/products/harbor-digital-twin.svg",
    imageAlt: "Abstract visualization for Iwritebeta",
  },
  {
    name: "Blindspot",
    sector: "AI insights",
    description:
      "An AI insight tool that surfaces gaps, risks, and missed signals in workflows.",
    status: "Product",
    tags: ["Insights", "Risk", "Analytics"],
    image: "/products/orion-ai-fabric.svg",
    imageAlt: "Abstract visualization for Blindspot",
  },
];

const directors = [
  {
    name: "Emmanuel Mark Jonah",
    title: "CEO",
    focus: "Company leadership and AI strategy",
    image: "/directors/CEO.jpeg",
    imageAlt: "Portrait of Emmanuel Mark Jonah",
  },
  {
    name: "Babajide Emmanuel Fakile",
    title: "COO",
    focus: "Operations, growth, and delivery",
    image: "/directors/COO.jpeg",
    imageAlt: "Portrait of Babajide Emmanuel Fakile",
  },
  {
    name: "Shedrack Jonah",
    title: "CTO",
    focus: "AI architecture and product engineering",
    image: "/directors/CTO.jpeg",
    imageAlt: "Portrait of Shedrack Jonah",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--page-bg)] text-[var(--page-text)]">
      <header className="border-b border-[var(--border)]">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-2">
            <Image
              src="/Omnihorizon tech-5.PNG"
              alt="OMNI HORIZON logo"
              width={56}
              height={56}
              className="h-12 w-12 object-contain"
              priority
            />
            <div className="leading-none">
              <p className="text-2xl font-black lowercase tracking-tight text-[var(--page-text)]">
                omnihorizon
                <span className="align-super text-xs">®</span>
              </p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.45em] text-[var(--muted-2)]">
                technology ltd
              </p>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--muted-2)] md:flex">
            <a className="transition hover:text-[var(--page-text)]" href="#products">
              Products
            </a>
            <a className="transition hover:text-[var(--page-text)]" href="#about">
              About
            </a>
            <a
              className="transition hover:text-[var(--page-text)]"
              href="#directors"
            >
              Directors
            </a>
            <a className="transition hover:text-[var(--page-text)]" href="#contact">
              Contact
            </a>
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />
            <a
              className="rounded-full bg-[var(--accent)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[var(--accent-hover)]"
              href="#contact"
            >
              Contact
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-6 py-16">
        <section className="relative overflow-hidden rounded-3xl border border-[var(--border)]">
          <div className="absolute inset-0">
            <Image
              src="/hero.svg"
              alt="Abstract hero background"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[var(--hero-overlay)]" />
          </div>
          <div className="relative flex min-h-[420px] flex-col items-center justify-center px-6 py-20 text-center">
            <p className="text-xs uppercase tracking-[0.5em] text-[var(--muted-2)]">
              AI company
            </p>
            <h1 className="mt-4 text-4xl font-black lowercase tracking-tight sm:text-5xl">
              omnihorizon<span className="align-super text-base">®</span>
            </h1>
            <p className="mt-3 text-xs uppercase tracking-[0.45em] text-[var(--muted-2)]">
              technology ltd
            </p>
            <p className="mt-6 max-w-2xl text-base text-[var(--muted)]">
              We build AI-powered tools that help organizations communicate
              better, streamline operations, and scale authentically.
            </p>
            <a
              className="mt-8 rounded-full bg-[var(--accent)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-[var(--accent-hover)]"
              href="#products"
            >
              View products
            </a>
          </div>
        </section>

        <ProductsSection products={products} />

        <section id="about" className="mt-20">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold uppercase tracking-[0.3em]">
              About
            </h2>
          </div>
          <div className="mt-8 space-y-4 text-[var(--muted)]">
            <p>
              OMNI HORIZON TECHNOLOGY LTD is an innovative AI company building
              intelligent products that are practical, secure, and
              human-centered.
            </p>
            <p>
              Our mission is to bridge cutting-edge AI with real business needs.
              We create AI-powered tools and conversational systems that help
              organizations communicate better, streamline operations, and scale
              without losing authenticity.
            </p>
            <p>
              We believe the best AI enhances human capability. From chatbots to
              automated support and advanced communication platforms, we deliver
              safe, usable, and measurable impact for teams of any size.
            </p>
            <p>
              We are committed to making AI accessible, trustworthy, and
              transformative for businesses in a digital world.
            </p>
          </div>
        </section>

        <section id="directors" className="mt-20">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold uppercase tracking-[0.3em]">
              Directors
            </h2>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {directors.map((director) => (
              <article
                key={director.name}
                className="rounded-3xl border border-[var(--border)] bg-[var(--card-bg)] p-6"
              >
                <p className="text-center text-sm font-semibold uppercase tracking-[0.3em]">
                  {director.title}
                </p>
                <div className="mx-auto mt-4 h-16 w-px bg-[var(--muted-2)]" />
                <div className="mt-6 rounded-2xl border border-[var(--border)] bg-[var(--card-soft)]">
                  <div className="relative aspect-[4/5] w-full text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--muted-3)]">
                    {director.image ? (
                      <Image
                        src={director.image}
                        alt={director.imageAlt ?? director.name}
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover"
                      />
                    ) : (
                      <span className="absolute inset-0 flex items-center justify-center">
                        Photo
                      </span>
                    )}
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-base font-semibold uppercase tracking-[0.2em]">
                    {director.name}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--muted-2)]">
                    {director.focus}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

      </main>

      <footer className="border-t border-[var(--border)] bg-[var(--card-bg)]">
        <div className="mx-auto w-full max-w-6xl px-6 py-12">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <Image
                  src="/Omnihorizon tech-5.PNG"
                  alt="OMNI HORIZON logo"
                  width={44}
                  height={44}
                  className="h-10 w-10 object-contain"
                />
                <div className="leading-none">
                  <p className="text-base font-semibold uppercase tracking-[0.2em] text-[var(--page-text)]">
                    OMNI HORIZON
                  </p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.45em] text-[var(--muted-2)]">
                    TECHNOLOGY LTD
                  </p>
                </div>
              </div>
              <p className="max-w-sm text-sm text-[var(--muted)]">
                Your gateway to infinite possibilities. Transform your business
                with innovative solutions.
              </p>
              <p className="text-xs text-[var(--muted-2)]">
                Founded in 2024 · 20+ employees
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] text-[var(--muted-2)] transition hover:text-[var(--page-text)]"
                  aria-label="X"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="currentColor"
                  >
                    <path d="M17.6 4.5h2.1l-4.6 5.3 5.4 9.7h-4.2l-3.3-5.8-4.9 5.8H5.9l5-5.9-5.2-9.3h4.3l3 5.4 4.6-5.4Z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] text-[var(--muted-2)] transition hover:text-[var(--page-text)]"
                  aria-label="LinkedIn"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="currentColor"
                  >
                    <path d="M6.9 8.6H3.7v11.2h3.2V8.6Zm-1.6-5a1.9 1.9 0 1 0 0 3.9 1.9 1.9 0 0 0 0-3.9ZM20.5 13.1c0-3-1.6-4.4-3.7-4.4a3.2 3.2 0 0 0-2.9 1.6V8.6h-3.1v11.2h3.1v-6.2c0-1.6.3-3.2 2.3-3.2 2 0 2 1.9 2 3.3v6.1h3.1v-6.7Z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] text-[var(--muted-2)] transition hover:text-[var(--page-text)]"
                  aria-label="GitHub"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="currentColor"
                  >
                    <path d="M12 2.5a9.5 9.5 0 0 0-3 18.5c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.6 1.1 1.6 1.1.9 1.6 2.5 1.1 3.1.9.1-.7.3-1.1.6-1.3-2.2-.2-4.5-1.1-4.5-5a3.9 3.9 0 0 1 1-2.7 3.6 3.6 0 0 1 .1-2.7s.9-.3 2.8 1a9.7 9.7 0 0 1 5.1 0c1.9-1.3 2.8-1 2.8-1 .5 1.3.2 2.3.1 2.7a3.9 3.9 0 0 1 1 2.7c0 3.9-2.3 4.8-4.5 5 .3.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A9.5 9.5 0 0 0 12 2.5Z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="space-y-3 text-sm">
              <p className="text-sm font-semibold text-[var(--page-text)]">
                Product
              </p>
              <a className="block text-[var(--muted)] hover:text-[var(--page-text)]" href="#">
                Features
              </a>
            </div>
            <div className="space-y-3 text-sm">
              <p className="text-sm font-semibold text-[var(--page-text)]">
                Company
              </p>
              <a className="block text-[var(--muted)] hover:text-[var(--page-text)]" href="#about">
                About
              </a>
              <a className="block text-[var(--muted)] hover:text-[var(--page-text)]" href="#">
                Blog
              </a>
            </div>
            <div className="space-y-3 text-sm">
              <p className="text-sm font-semibold text-[var(--page-text)]">
                Legal
              </p>
              <a className="block text-[var(--muted)] hover:text-[var(--page-text)]" href="#">
                Privacy
              </a>
              <a className="block text-[var(--muted)] hover:text-[var(--page-text)]" href="#">
                Terms
              </a>
              <a className="block text-[var(--muted)] hover:text-[var(--page-text)]" href="#">
                Cookies
              </a>
            </div>
            <div id="contact" className="space-y-3 text-sm scroll-mt-24">
              <p className="text-sm font-semibold text-[var(--page-text)]">
                Contact
              </p>
              <p className="text-[var(--muted)]">+44 7932070056</p>
              <a
                className="block text-[var(--muted)] hover:text-[var(--page-text)]"
                href="mailto:partnerships@omnihorizon.tech"
              >
                partnerships@omnihorizon.tech
              </a>
              <p className="text-[var(--muted)]">United Kingdom</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
