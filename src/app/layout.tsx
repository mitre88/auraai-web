import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "AuraAI — The chalk-and-notebook assistant for teachers",
    template: "%s · AuraAI",
  },
  description:
    "AuraAI is a private notebook for teachers: student notes, observations, groups, materials and an optional AI assistant. Your students' data never leaves your device.",
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/icon.svg" }],
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: "AuraAI — The chalk-and-notebook assistant for teachers",
    description:
      "A private teaching notebook. Student notes and observations stay on your device; the optional AI assistant never sees them.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "AuraAI" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AuraAI — The teaching assistant that keeps students private",
    description:
      "Student notes and observations stay on your device. The optional AI assistant never sees them.",
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f0e6" },
    { media: "(prefers-color-scheme: dark)", color: "#15191c" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        {/* Resilience: if JS is disabled, force scroll-reveal content (which
            Framer Motion initializes at opacity:0) fully visible so the
            Privacy / Support / Terms text is always readable. */}
        <noscript>
          {/* eslint-disable-next-line react/no-danger */}
          <style
            dangerouslySetInnerHTML={{
              __html:
                '[style*="opacity:0"]{opacity:1!important;}[style*="transform"]{transform:none!important;}',
            }}
          />
        </noscript>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
