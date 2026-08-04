const services = [
  {
    label: "Landing Pages in Framer",
    desc: "Responsive marketing and product pages CMS collections, breakpoints, and interactions built and published in Framer.",
  },
  {
    label: "Email Production",
    desc: "Newsletters, launches, and transactional emails coded as responsive, table-based HTML and tested across Outlook, Gmail, and Apple Mail.",
  },
  {
    label: "Design → Build Handoff",
    desc: "Pixel-accurate translation from Figma into a working page or template, matching spacing, type, and states exactly.",
  },
  {
    label: "QA & Testing",
    desc: "Cross-browser, cross-client, and cross-device checks before anything ships so nothing breaks after handoff.",
  },
];

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <p className="mono-label text-[11px] uppercase text-crimson">02 — What I Do</p>
      <h2 className="mt-2 max-w-lg font-display text-3xl leading-tight text-ink">
        From file to finished
      </h2>

      <div className="mt-10 divide-y divide-paper-line border-t border-b border-paper-line">
        {services.map((s) => (
          <div
            key={s.label}
            className="group grid gap-2 py-6 sm:grid-cols-[1fr_2fr] sm:gap-8"
          >
            <h3 className="font-display text-xl text-ink transition-colors group-hover:text-crimson">
              {s.label}
            </h3>
            <p className="text-ink-soft">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
