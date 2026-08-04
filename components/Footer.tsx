export default function Footer() {
  return (
    <footer className="border-t border-paper-line">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="mono-label text-[10px] uppercase text-gray">
          © {new Date().getFullYear()} Sidney. Email Template &amp; Signature Design
        </p>
        <p className="mono-label text-[10px] uppercase text-gray">
          Sent from a template that renders everywhere
        </p>
      </div>
    </footer>
  );
}
