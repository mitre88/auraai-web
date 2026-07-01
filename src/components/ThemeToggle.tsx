"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle({ label }: { label: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="grid h-9 w-9 place-items-center rounded-lg border border-hairline text-ink-soft transition-colors hover:border-coral hover:text-coral"
    >
      {mounted ? (
        isDark ? (
          <Sun className="h-[1.05rem] w-[1.05rem]" strokeWidth={1.8} />
        ) : (
          <Moon className="h-[1.05rem] w-[1.05rem]" strokeWidth={1.8} />
        )
      ) : (
        <span className="h-[1.05rem] w-[1.05rem]" />
      )}
    </button>
  );
}
