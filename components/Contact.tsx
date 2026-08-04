"use client";

export default function Contact() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name")?.toString() ?? "";
    const email = form.get("email")?.toString() ?? "";
    const message = form.get("message")?.toString() ?? "";
    const subject = encodeURIComponent(`New inquiry from ${name || "your site"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    // Replace with your real inbox address.
    window.location.href = `mailto:hello@yourdomain.com?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <p className="mono-label text-[11px] uppercase text-crimson">04 — Get in touch</p>
      <h2 className="mt-2 max-w-lg font-display text-3xl leading-tight text-ink">
        Start a thread
      </h2>
      <p className="mt-3 max-w-md text-ink-soft">
        Hiring, freelance work, or a design that needs to get built just send it
        over and I&apos;ll reply.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-8 max-w-xl overflow-hidden rounded-md border border-ink/15 bg-white shadow-[6px_6px_0_0_var(--ink)]"
      >
        <div className="mono-label grid grid-cols-[3.5rem_1fr] items-center gap-y-2 border-b border-ink/10 px-5 py-3 text-[11px] uppercase text-gray">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            className="border-b border-transparent bg-transparent py-1 font-body text-sm normal-case text-ink outline-none placeholder:text-gray/60 focus:border-crimson"
          />
          <label htmlFor="email">From</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@company.com"
            className="border-b border-transparent bg-transparent py-1 font-body text-sm normal-case text-ink outline-none placeholder:text-gray/60 focus:border-crimson"
          />
        </div>
        <div className="px-5 py-4">
          <textarea
            name="message"
            rows={4}
            placeholder="What are you working on — a landing page, an email, or both?"
            className="w-full resize-none bg-transparent text-sm text-ink outline-none placeholder:text-gray/60"
          />
        </div>
        <div className="flex items-center justify-between border-t border-ink/10 px-5 py-3">
          <span className="mono-label text-[10px] uppercase text-gray">
            Usually replies within 1–2 days
          </span>
          <button
            type="submit"
            className="mono-label rounded-sm bg-crimson px-4 py-2 text-[11px] uppercase text-paper transition-colors hover:bg-crimson-soft"
          >
            Send
          </button>
        </div>
      </form>
    </section>
  );
}
