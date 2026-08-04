export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <div className="grid gap-8 sm:grid-cols-[1fr_2fr] sm:gap-12">
        <div>
          <p className="mono-label text-[11px] uppercase text-crimson">01 — About</p>
          <h2 className="mt-2 font-display text-3xl leading-tight text-ink">
            The bridge between design and done
          </h2>
        </div>
        <div className="space-y-4 text-ink-soft">
          <p>
            I&apos;m a production / junior designer who specializes in the last
            mile: taking a finished design and actually building it as a
            coded email or a live Framer site without losing the details
            that made the original design worth shipping.
          </p>
          <p>
            On landing pages, that means clean Framer builds: responsive
            breakpoints, CMS collections, interactions that feel intentional
            rather than decorative. On email, it means table-based HTML that
            survives Outlook, Gmail clipping, and dark mode and still looks
            designed once it lands.
          </p>
          <p>
            I care about the parts that are easy to skip: alignment at 375px,
            alt text, load order, whether a button is actually tappable. Small
            things, but they&apos;re the difference between a mockup and a
            finished product.
          </p>
        </div>
      </div>
    </section>
  );
}
