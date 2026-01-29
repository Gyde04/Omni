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
    image: "/products/orion-ai-fabric.svg",
    imageAlt: "Abstract visualization for LegitWriter.com",
    url: "https://www.legitwriter.com",
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
    name: "VetMemos",
    sector: "Vet scribe",
    description:
      "An AI vet scribe that turns consultations into clear, structured clinical notes.",
    status: "Product",
    tags: ["Scribe", "Clinics", "Notes"],
    image: "/products/nimbus-secure-cloud.svg",
    imageAlt: "Abstract visualization for VetMemos",
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
    name: "Thynkly",
    sector: "AI productivity",
    description:
      "An AI workspace for organizing ideas, drafting content, and planning smarter.",
    status: "Product",
    tags: ["Ideas", "Planning", "Writing"],
    image: "/products/atlas-market-signal.svg",
    imageAlt: "Abstract visualization for Thynkly",
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
          <div className="leading-none">
            <p className="text-2xl font-black lowercase tracking-tight text-[var(--page-text)]">
              omnihorizon
              <span className="align-super text-xs">®</span>
            </p>
            <p className="mt-1 text-[11px] uppercase tracking-[0.45em] text-[var(--muted-2)]">
              technology ltd
            </p>
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

        <section id="contact" className="mt-20">
          <div className="rounded-2xl border border-[var(--border)] p-8 text-[var(--muted)]">
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-4">
                <h2 className="text-lg font-semibold uppercase tracking-[0.3em] text-[var(--page-text)]">
                  Contact
                </h2>
                <p>
                  Tell us about your product, timeline, and goals. We respond
                  within 48 hours.
                </p>
                <a
                  className="inline-flex rounded-full bg-[var(--accent)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-[var(--accent-hover)]"
                  href="mailto:partnerships@omnihorizon.tech"
                >
                  Email us
                </a>
              </div>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted-2)]">
                    Email
                  </p>
                  <p className="mt-2">partnerships@omnihorizon.tech</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted-2)]">
                    Phone
                  </p>
                  <p className="mt-2">+44 7932070056</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted-2)]">
                    Location
                  </p>
                  <p className="mt-2">United Kingdom</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--border)]">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-4 px-6 py-8 text-xs text-[var(--muted-3)] md:flex-row md:items-center">
          <p className="uppercase tracking-[0.35em]">OMNI HORIZON TECHNOLOGY LTD</p>
          <p>AI products with intent.</p>
        </div>
      </footer>
    </div>
  );
}
