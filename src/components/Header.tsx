import Link from "next/link";
import { GisMark } from "@/components/GisMark";
import { ThemeToggle } from "@/components/ThemeToggle";
import { SITE_NAME } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-hairline bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-2.5" aria-label={`${SITE_NAME} home`}>
          <GisMark size={30} />
          <span className="font-display text-[1.35rem] leading-none text-ink">
            {SITE_NAME}
          </span>
        </Link>

        <nav className="flex items-center gap-1 sm:gap-2">
          <Link
            href="/support"
            className="rounded-lg px-3 py-2 text-sm font-medium text-ink-soft transition-colors hover:text-coral"
          >
            Support
          </Link>
          <Link
            href="/privacy"
            className="hidden rounded-lg px-3 py-2 text-sm font-medium text-ink-soft transition-colors hover:text-coral sm:inline-block"
          >
            Privacy
          </Link>
          <ThemeToggle label="Toggle light and dark theme" />
        </nav>
      </div>
    </header>
  );
}
