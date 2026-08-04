type Attachment = {
  file: string;
  size: string;
  title: string;
  tag: "Email" | "Landing Page";
  /** Path under /public once you add a real screenshot, e.g. "/work/landing-01.png" */
  image?: string;
};

const attachments: Attachment[] = [
  { file: "product-launch.png", size: "980 KB", title: "Product Launch Framer", tag: "Landing Page", image: "work/Screenshot 2026-08-03 at 10.31.26 PM.png" },
  { file: "newsletter-q3.png", size: "1.2 MB", title: "Product Newsletter", tag: "Email", image: "work/Screenshot 2026-08-03 at 10.31.32 PM.png" },
  { file: "saas-homepage.png", size: "1.1 MB", title: "SaaS Homepage Framer", tag: "Landing Page", image: "work/Screenshot 2026-08-03 at 10.31.37 PM.png" },
  { file: "welcome-series.png", size: "1.4 MB", title: "Welcome Series", tag: "Email", image: "work/Screenshot 2026-08-03 at 10.31.41 PM.png" },
  { file: "event-page.png", size: "860 KB", title: "Event Landing Page", tag: "Landing Page", image: "work/Screenshot 2026-08-03 at 10.31.46 PM.png" },
  { file: "event-invite.png", size: "720 KB", title: "Event Invite Email", tag: "Email", image: "work/Screenshot 2026-08-03 at 10.31.52 PM.png" },
];

export default function Portfolio() {
  return (
    <section id="work" className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <div className="flex items-baseline justify-between gap-4">
        <div>
          <p className="mono-label text-[11px] uppercase text-crimson">03 — Work</p>
          <h2 className="mt-2 font-display text-3xl leading-tight text-ink">
            {attachments.length} Attachments
          </h2>
        </div>
        <p className="mono-label hidden text-[11px] uppercase text-gray sm:block">
          Download All
        </p>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {attachments.map((a) => (
          <a
            key={a.file}
            href="#contact"
            className="group block overflow-hidden rounded-sm border border-paper-line bg-white/60 transition-shadow hover:shadow-[4px_4px_0_0_var(--ink)]"
          >
            <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden border-b border-paper-line bg-teal-soft">
              {a.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={a.image} alt={a.title} className="h-full w-full object-cover" />
              ) : (
                <span className="mono-label px-4 text-center text-[10px] uppercase text-teal/70">
                  Preview coming — drop image in /public/work
                </span>
              )}
              <span className="mono-label absolute left-2 top-2 rounded-sm bg-ink/85 px-1.5 py-0.5 text-[9px] uppercase text-paper">
                {a.tag}
              </span>
            </div>
            <div className="px-3 py-2.5">
              <p className="truncate text-sm text-ink group-hover:text-crimson">{a.title}</p>
              <p className="mono-label truncate text-[10px] uppercase text-gray">
                {a.file} · {a.size}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
