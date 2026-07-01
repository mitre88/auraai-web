import Link from "next/link";
import { GisMark } from "@/components/GisMark";
import { CONTACT_EMAIL, COPYRIGHT_HOLDER, SITE_NAME } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-hairline">
      <div className="mx-auto max-w-5xl px-5 py-12 sm:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5">
              <GisMark size={26} />
              <span className="font-display text-lg text-ink">{SITE_NAME}</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              A quiet, private notebook and teaching assistant for the modern
              classroom. Your students stay yours.
            </p>
          </div>

          <nav className="flex gap-12 text-sm">
            <div className="flex flex-col gap-2.5">
              <span className="field-label">Product</span>
              <Link href="/" className="text-ink-soft transition-colors hover:text-coral">
                Overview
              </Link>
              <Link href="/support" className="text-ink-soft transition-colors hover:text-coral">
                Support
              </Link>
            </div>
            <div className="flex flex-col gap-2.5">
              <span className="field-label">Legal</span>
              <Link href="/privacy" className="text-ink-soft transition-colors hover:text-coral">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-ink-soft transition-colors hover:text-coral">
                Terms of Use
              </Link>
            </div>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-hairline pt-6 text-sm text-ink-soft sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {year} {COPYRIGHT_HOLDER}. Made for teachers.
          </span>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="stamp-mono transition-colors hover:text-coral"
          >
            {CONTACT_EMAIL}
          </a>
        </div>
      </div>
    </footer>
  );
}
