const stats = [
  { label: "99.6% effective" },
  { label: "180K+ articles" },
  { label: "4.8+/5 stars" },
];

const trustStats = [
  { value: "50K+", label: "Writers" },
  { value: "1M+", label: "Texts Humanized" },
];

const universities = [
  {
    name: "Ply",
    src: "https://www.legitwriter.com/_next/static/media/ply.61638649.svg",
  },
  {
    name: "Harvard",
    src: "https://www.legitwriter.com/_next/static/media/harvard.edb99233.svg",
  },
  {
    name: "Stanford",
    src: "https://www.legitwriter.com/_next/static/media/stanford.8dc4ac1b.svg",
  },
  {
    name: "Durham",
    src: "https://www.legitwriter.com/_next/static/media/durham.4e8effca.svg",
  },
];

const steps = [
  {
    number: "01",
    title: "Input AI Text and Click Humanize Button",
  },
  {
    number: "02",
    title: "Start rewriting until you get a perfect human text",
  },
  {
    number: "03",
    title: "Select your preferred AI Detector and wait for secure, detailed report",
  },
];

const features = [
  {
    title: "Authentic Writing Experience",
    description:
      "Bridge the gap between AI assistance and human creativity effortlessly.",
  },
  {
    title: "Undetectable Refinement",
    description: "Ensure your words remain yours-no red flags, just remarkable writing.",
  },
  {
    title: "Boundless Applications",
    description: "Perfect for authors, educators, marketers, and learners alike.",
  },
];

const testimonials = [
  {
    quote:
      "LegitWriter's AI Humanizer saved my thesis! It maintained my writing style while making arguments clearer. My advisor couldn't tell the difference, just the improvement.",
    name: "Emily Johnson",
    role: "Graduate Student",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wx",
  },
  {
    quote:
      "The all-in-one AI Detection tool is a game-changer for my freelance business. One click verifies across every system-no more manual checking.",
    name: "Marcus Williams",
    role: "Content Writer",
    image:
      "https://images.unsplash.com/photo-1548946526-f69e2424cf45?q=80&w=256&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wx",
  },
  {
    quote:
      "I was skeptical until I tried it. The Humanizer doesn't just rewrite- it preserves my narrative style while enhancing readability. Essential to my editing process.",
    name: "Daniel Cooper",
    role: "Novelist",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=256&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wx",
  },
  {
    quote:
      "As someone who drafts dozens weekly, the Humanizer helps me overcome writer's block without sacrificing my voice.",
    name: "Sara Lopez",
    role: "Copywriter",
    image:
      "https://images.unsplash.com/photo-1544005313-3b3b0063d8be?q=80&w=256&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wx",
  },
  {
    quote:
      "The multi-detector feature saved me from potential integrity issues. I can check against all major platforms at once. Totally worth it for peace of mind.",
    name: "Olivia Bennett",
    role: "University Student",
    image:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=256&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wx",
  },
  {
    quote:
      "What impresses me most is how it learns my writing patterns. My clients noticed the improvement in clarity and structure.",
    name: "Noah Patel",
    role: "Editor",
    image:
      "https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=256&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wx",
  },
];

const pricing = [
  {
    name: "Basic",
    price: "$5.99/week",
    billing: "Billed weekly ($5.99/week)",
    tagline: "Perfect for students and casual writers",
    features: [
      "500 words per request",
      "5,000 words monthly limit",
      "Bypass all AI detectors",
      "Basic Humanization Engine",
      "Plagiarism-free",
      "Error-free rewriting",
      "Unlimited AI detection",
      "Undetectable results",
      "Human-like results",
    ],
  },
  {
    name: "Pro",
    price: "$13.99/month",
    billing: "$13.99/month billed annually ($167.88/year)",
    tagline: "Perfect for authors, educators, marketers, and learners alike",
    popular: true,
    features: [
      "2,000 words per request",
      "20,000 words monthly limit",
      "Advanced AI detection",
      "Advanced AI humanizing",
      "20 languages supported",
      "Plagiarism-free",
      "Error-free rewriting",
      "Unlimited AI detection",
      "Undetectable results",
      "Human-like results",
      "Standard customer support",
    ],
  },
  {
    name: "Premium",
    price: "$28.99/month",
    billing: "$28.99/month billed annually ($347.88/year)",
    tagline: "Essential tools for power users",
    features: [
      "2,500 words per request",
      "40,000 words monthly limit",
      "Advanced AI detection",
      "Plagiarism-free",
      "Advanced AI humanizing",
      "20 languages supported",
      "Standard customer support",
      "Human-like results",
      "Error-free rewriting",
      "Unlimited AI detection",
      "Advanced Turnitin Bypass Engine",
      "Priority support with dedicated manager",
    ],
  },
];

const faqs = [
  {
    question: "How does the paraphrasing tool work?",
    answer:
      "Our advanced AI tool intelligently rewrites your text while preserving its original meaning and intent. It uses sophisticated language models to create natural, unique content that maintains your voice and style.",
  },
  { question: "What's included in each plan?", answer: "" },
  { question: "Is my content safe and private?", answer: "" },
  { question: "Can I use this for academic writing?", answer: "" },
  { question: "How accurate is the paraphrasing?", answer: "" },
];

export default function LegitWriterPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-100">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-2">
            <img
              src="https://www.legitwriter.com/_next/static/media/logo.1b10531e.svg"
              alt="LegitWriter logo"
              className="h-7"
            />
          </div>
          <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            <a className="hover:text-slate-900" href="#features">
              Features
            </a>
            <a className="hover:text-slate-900" href="#pricing">
              Pricing
            </a>
            <a className="hover:text-slate-900" href="#faq">
              FAQ's
            </a>
            <a
              className="hover:text-slate-900"
              href="https://discord.gg/"
              target="_blank"
              rel="noreferrer"
            >
              Discord
            </a>
          </nav>
          <div className="flex items-center gap-3 text-sm">
            <a className="text-slate-600 hover:text-slate-900" href="#">
              Sign in
            </a>
            <a
              className="rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white"
              href="#"
            >
              Sign up
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-6 py-16">
        <section className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-600">
              Join 50,000+ writers worldwide
            </p>
            <h1 className="text-4xl font-semibold text-slate-900 sm:text-5xl">
              Write Freely, Fearlessly
              <br />
              and Naturally.
            </h1>
            <p className="text-base text-slate-600">
              Empowering writers, creators, and students to own their own
              narrative. Transform your AI-assisted text into authentic
              human-like conversations.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              {stats.map((stat) => (
                <span
                  key={stat.label}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-600"
                >
                  {stat.label}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                className="rounded-full bg-violet-600 px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-white"
                href="#"
              >
                Try for Free 200 words
              </a>
              <a
                className="rounded-full border border-slate-200 px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-slate-700"
                href="#"
              >
                Try Demo
              </a>
            </div>
            <div className="flex flex-wrap gap-10">
              {trustStats.map((item) => (
                <div key={item.label}>
                  <p className="text-2xl font-semibold text-slate-900">
                    {item.value}
                  </p>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-2 text-center text-xs font-semibold text-slate-500">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                  200 credits left
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                  200 total credits
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                  0.0% used
                </div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                  Paste Text
                </p>
                <div className="mt-3 h-32 rounded-xl border border-dashed border-slate-300 bg-white" />
                <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                  <span>0/200 words</span>
                  <span>0 characters</span>
                </div>
              </div>
              <div className="flex gap-3">
                <button className="flex-1 rounded-full border border-slate-300 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-700">
                  Detect AI
                </button>
                <button className="flex-1 rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white">
                  Make it Human
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-20 text-center">
          <h2 className="text-2xl font-semibold text-slate-900">
            Trusted by students in
            <span className="block">top universities</span>
          </h2>
          <p className="mt-3 text-sm text-slate-500">
            Empowering intelligence and innovation across the worlds top
            universities
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
            {universities.map((logo) => (
              <img
                key={logo.name}
                src={logo.src}
                alt={logo.name}
                className="h-10"
                loading="lazy"
              />
            ))}
          </div>
        </section>

        <section className="mt-20 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              How to humanize AI text with LegitWriter?
            </h2>
            <p className="mt-3 text-sm text-slate-500">
              We've trained our undetectable AI rewriting algorithm with
              extensive human samples. Convert to 100% human-like text in just 3
              easy steps.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Trusted by 50,000+ users
              </span>
              <a className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-600" href="#">
                Start for free
              </a>
            </div>
            <div className="mt-8 space-y-6">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-4">
                  <span className="text-sm font-semibold text-violet-600">
                    {step.number}
                  </span>
                  <p className="text-base font-semibold text-slate-800">
                    {step.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <img
              src="https://www.legitwriter.com/_next/static/media/white-fade.f8e9b3dd.svg"
              alt=""
              className="w-full"
              loading="lazy"
            />
          </div>
        </section>

        <section id="features" className="mt-20">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-600">
            Revolutionary Features
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-slate-900">
            Revolutionizing the way you write
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Transforming ideas into impactful creation with unmatched ease and
            innovation
          </p>
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              {features.map((feature) => (
                <div key={feature.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-500">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <img
                src="https://www.legitwriter.com/_next/static/media/lady.509c3509.svg"
                alt="LegitWriter feature"
                className="w-full"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <section className="mt-20">
          <div className="rounded-3xl bg-slate-900 px-8 py-12 text-white">
            <p className="text-sm uppercase tracking-[0.3em] text-white/60">
              Ready to transform your writing?
            </p>
            <h2 className="mt-4 text-3xl font-semibold">
              Join 50,000+ People Using LegitWriter
            </h2>
            <p className="mt-3 text-sm text-white/70">
              Discover why people love using LegitWriter to enhance their
              learning and work.
            </p>
          </div>
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-3xl border border-slate-200 bg-white p-6"
            >
              <p className="text-sm text-slate-600">“{testimonial.quote}”</p>
              <div className="mt-6 flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section id="pricing" className="mt-20">
          <h2 className="text-2xl font-semibold text-slate-900">Pricing</h2>
          <p className="mt-2 text-sm text-slate-500">
            Choose the perfect plan for your needs. All plans include our core
            features with different usage limits and additional benefits.
          </p>
          <div className="mt-8 flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
            <span>Monthly</span>
            <span className="rounded-full bg-violet-100 px-3 py-1 text-violet-700">
              Annually Save 30%
            </span>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {pricing.map((plan) => (
              <article
                key={plan.name}
                className={`rounded-3xl border p-6 ${
                  plan.popular
                    ? "border-violet-200 bg-violet-50"
                    : "border-slate-200 bg-white"
                }`}
              >
                {plan.popular ? (
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-600">
                    Popular
                  </p>
                ) : null}
                <h3 className="mt-2 text-lg font-semibold text-slate-900">
                  {plan.name}
                </h3>
                <p className="mt-3 text-2xl font-semibold text-slate-900">
                  {plan.price}
                </p>
                <p className="mt-1 text-xs text-slate-500">{plan.billing}</p>
                <p className="mt-4 text-sm text-slate-600">{plan.tagline}</p>
                <ul className="mt-5 space-y-2 text-sm text-slate-600">
                  {plan.features.map((feature) => (
                    <li key={feature}>✓ {feature}</li>
                  ))}
                </ul>
                <button className="mt-6 w-full rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white">
                  Choose Plan
                </button>
              </article>
            ))}
          </div>
        </section>

        <section id="faq" className="mt-20">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-600">
            Got Questions?
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-slate-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Everything you need to know about our revolutionary writing tool
          </p>
          <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6">
            <p className="text-sm text-slate-600">Need More Help?</p>
            <p className="mt-2 text-sm text-slate-500">
              Can't find what you're looking for? Our support team is here to
              help you 24/7.
            </p>
            <button className="mt-4 rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-700">
              Contact Support
            </button>
          </div>
          <div className="mt-8 space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <p className="text-sm font-semibold text-slate-900">
                  {faq.question}
                </p>
                {faq.answer ? (
                  <p className="mt-2 text-sm text-slate-500">{faq.answer}</p>
                ) : null}
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-100 bg-slate-50">
        <div className="mx-auto w-full max-w-6xl px-6 py-12">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr]">
            <div className="space-y-4">
              <img
                src="https://www.legitwriter.com/_next/static/media/logo.1b10531e.svg"
                alt="LegitWriter logo"
                className="h-8"
              />
              <p className="text-sm text-slate-600">
                Achieve flawless, human-like writing with our cutting-edge
                humanization technology. Transform your content with AI that
                understands context and creativity.
              </p>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Connect with us
              </p>
              <div className="flex gap-3">
                <img
                  src="https://www.legitwriter.com/_next/static/media/ri_instagram-fill.82985c40.svg"
                  alt="Instagram"
                  className="h-6 w-6"
                />
                <img
                  src="https://www.legitwriter.com/_next/static/media/iconoir_tiktok-solid.81f8f9cc.svg"
                  alt="TikTok"
                  className="h-6 w-6"
                />
                <img
                  src="https://www.legitwriter.com/_next/static/media/ic_baseline-discord.285e3c11.svg"
                  alt="Discord"
                  className="h-6 w-6"
                />
                <img
                  src="https://www.legitwriter.com/_next/static/media/prime_twitter.a8d0414d.svg"
                  alt="X"
                  className="h-6 w-6"
                />
                <img
                  src="https://www.legitwriter.com/_next/static/media/ic_round-mail.42c938eb.svg"
                  alt="Email"
                  className="h-6 w-6"
                />
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-700">
                Quick Links
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li>Home</li>
                <li>Features</li>
                <li>Pricing</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-700">
                Stay Updated
              </p>
              <p className="mt-3 text-sm text-slate-600">
                Get the latest updates and writing tips delivered to your inbox.
              </p>
              <div className="mt-4 flex gap-3">
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 rounded-full border border-slate-200 px-4 py-2 text-sm"
                />
                <button className="rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-6 text-xs text-slate-500">
            <p>© 2024 LegitWriter. All Rights Reserved.</p>
            <div className="flex gap-4">
              <span>Terms of Service</span>
              <span>Privacy Policy</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
