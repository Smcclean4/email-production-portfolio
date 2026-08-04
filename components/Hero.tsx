import SignatureMark from "./SignatureMark";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pt-14 pb-8 sm:pt-20">
      <p className="mono-label text-[11px] uppercase text-crimson">
        Production Designer — Email &amp; Landing Pages in Framer
      </p>
      <h1 className="mt-3 max-w-3xl font-display text-[2.6rem] leading-[1.05] tracking-tight text-ink sm:text-6xl">
        Designs that ship,
        <br />
        not just <span className="italic text-teal">files that render.</span>
      </h1>
      <p className="mt-5 max-w-xl text-base text-ink-soft sm:text-lg">
        I take Figma files and turn them into working emails and Framer
        landing pages pixel-accurate, responsive, and tested before they
        ever reach a client or a customer&apos;s inbox.
      </p>

      {/* Email client mockup */}
      <div className="mt-12 overflow-hidden rounded-md border border-ink/15 bg-white shadow-[6px_6px_0_0_var(--ink)]">
        <div className="flex items-center gap-2 border-b border-ink/10 bg-[#efece2] px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-crimson/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#dcb24a]" />
          <span className="h-2.5 w-2.5 rounded-full bg-teal/70" />
          <span className="mono-label ml-3 text-[10px] uppercase text-gray">
            New Message — Handoff Notes
          </span>
        </div>

        <div className="mono-label grid grid-cols-[3.5rem_1fr] gap-y-1.5 border-b border-ink/10 px-5 py-4 text-[11px] uppercase text-gray sm:grid-cols-[4rem_1fr]">
          <span>To</span>
          <span className="text-ink">design-team@yourcompany.com</span>
          <span>From</span>
          <span className="text-ink">sidney@studio.co</span>
          <span>Re</span>
          <span className="text-ink">Landing page + email suite ready for QA</span>
        </div>

        <div className="px-5 py-6 sm:px-8 sm:py-8">
          <p className="text-sm leading-relaxed text-ink-soft sm:text-base">
            Hey team — landing page is published in Framer (responsive down
            to mobile, CMS wired up) and the email set is coded and tested
            across Outlook, Gmail, and Apple Mail. Ready for review.
          </p>

          <div className="mt-6 border-t border-dashed border-ink/15 pt-6">
            <SignatureMark className="h-16 w-full max-w-[280px] sm:h-20 sm:max-w-[320px]" />
            <p className="mt-1 font-display text-lg text-ink">Sidney</p>
            <p className="mono-label text-[10px] uppercase text-gray">
              Production / Junior Designer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
