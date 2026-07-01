/**
 * "Download on the App Store" badge, drawn as inline SVG so it stays crisp
 * and adapts to the theme. Presented as a coming-soon lockup until the app is
 * live on the store; the surrounding markup makes the state explicit.
 */
export function AppStoreBadge({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 rounded-xl border border-ink/15 bg-ink px-4 py-2.5 text-chalk shadow-sm dark:border-chalk/15 ${className}`}
    >
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className="text-chalk"
      >
        <path d="M16.365 1.43c0 1.14-.417 2.2-1.114 2.99-.86.98-2.28 1.73-3.44 1.64-.14-1.12.42-2.29 1.06-3.02.72-.82 2.02-1.45 3.06-1.53.02.31.05.62.05.92h.322zM20.5 17.02c-.53 1.22-.79 1.77-1.47 2.85-.95 1.51-2.29 3.39-3.95 3.4-1.47.02-1.85-.96-3.85-.95-2 .01-2.42.97-3.9.95-1.66-.02-2.93-1.72-3.88-3.23-2.66-4.23-2.94-9.2-1.3-11.84 1.17-1.88 3.01-2.98 4.74-2.98 1.76 0 2.87.97 4.33.97 1.41 0 2.27-.97 4.31-.97 1.54 0 3.17.84 4.33 2.29-3.81 2.09-3.19 7.53.51 9.56z" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="text-[0.6rem] tracking-wide opacity-80">
          Coming soon on the
        </span>
        <span className="text-[0.95rem] font-semibold">App Store</span>
      </span>
    </span>
  );
}
