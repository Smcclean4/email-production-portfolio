const links = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-paper-line/80 bg-paper/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-3">
        <a
          href="#top"
          className="mono-label text-[11px] uppercase text-gray"
        >
          <span className="text-ink">From:</span> Sidney. Production Designer, Email &amp; Framer
        </a>
        <nav className="hidden gap-6 sm:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="mono-label text-[11px] uppercase text-ink-soft transition-colors hover:text-crimson"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="mono-label rounded-sm border border-ink px-3 py-1.5 text-[11px] uppercase text-ink transition-colors hover:border-crimson hover:text-crimson"
        >
          Reply
        </a>
      </div>
    </header>
  );
}
