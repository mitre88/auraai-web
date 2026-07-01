import Link from "next/link";
import { GisMark } from "@/components/GisMark";

export default function NotFound() {
  return (
    <div className="grid min-h-dvh place-items-center px-6 text-center">
      <div>
        <div className="flex justify-center">
          <GisMark size={72} />
        </div>
        <p className="stamp-mono mt-6 text-sm text-coral">404</p>
        <h1 className="mt-2 font-display text-4xl text-ink">
          This page took the day off.
        </h1>
        <p className="mx-auto mt-3 max-w-sm text-ink-soft">
          The page you were looking for isn&rsquo;t here. Let&rsquo;s head back
          to the notebook.
        </p>
        <Link
          href="/"
          className="mt-7 inline-flex rounded-xl bg-coral px-5 py-3 text-sm font-semibold text-chalk transition-transform hover:-translate-y-0.5"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
