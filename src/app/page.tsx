import Link from "next/link";
import {
  NotebookPen,
  Users,
  Sparkles,
  CalendarDays,
  ClipboardList,
  ShieldCheck,
  KeyRound,
  WifiOff,
  ArrowRight,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { GisMark } from "@/components/GisMark";
import { ThemedDeviceFrame } from "@/components/DeviceFrame";
import { AppStoreBadge } from "@/components/AppStoreBadge";
import { AI_PROVIDER } from "@/lib/site";

const FEATURES = [
  {
    icon: NotebookPen,
    title: "A page for every student",
    body: "Keep observations, voice notes, tasks and photos on a warm notebook page for each student — the way you'd keep a paper logbook, only searchable.",
  },
  {
    icon: Users,
    title: "Groups and rosters",
    body: "Organize your classes into groups, move between them in a tap, and see at a glance who needs a note today.",
  },
  {
    icon: Sparkles,
    title: "An assistant that helps you plan",
    body: "Draft lesson plans, quizzes, rubrics and worksheets with an AI trained to think like a teacher — on your terms, using your own key.",
  },
  {
    icon: CalendarDays,
    title: "Calendar and reminders",
    body: "Events, deadlines and follow-ups sit beside your notes, so nothing about a student slips through the term.",
  },
  {
    icon: ClipboardList,
    title: "Materials, ready to reuse",
    body: "Generated worksheets and plans are saved as materials you can revisit, adapt and export whenever you need them.",
  },
  {
    icon: ShieldCheck,
    title: "Private by construction",
    body: "There are no accounts and no AuraAI servers. Your groups, students and notes live only on your iPhone.",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Set up your groups",
    body: "Add your classes and students. Everything is created and stored locally — no sign-up, no cloud.",
    shot: { light: "/screenshots/onboarding_light.png", dark: "/screenshots/onboarding_dark.png" },
  },
  {
    n: "02",
    title: "Keep your notes",
    body: "Jot observations, record a quick voice note, attach a photo. Each student's page fills up over the term.",
    shot: { light: "/screenshots/dashboard_light.png", dark: "/screenshots/dashboard_dark.png" },
  },
  {
    n: "03",
    title: "Ask Aura to help",
    body: "When you want a plan or a quiz, the assistant drafts it in seconds. You add your own API key, and it only sees what you type.",
    shot: { light: "/screenshots/assistant_light.png", dark: "/screenshots/assistant_dark.png" },
  },
];

export default function HomePage() {
  return (
    <div className="relative min-h-dvh">
      <Header />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="paper-grain absolute inset-0" aria-hidden="true" />
        <div className="notebook-lines absolute inset-0 opacity-40" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-5xl gap-12 px-5 pb-20 pt-16 sm:px-8 sm:pt-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-8">
          <div className="coral-margin pl-6">
            <Reveal>
              <span className="field-label">Teaching assistant · iOS</span>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="mt-4 font-display text-[2.65rem] leading-[1.04] tracking-tight text-ink sm:text-[3.4rem]">
                The notebook that
                <br />
                keeps your class
                <br />
                <span className="text-coral">yours.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
                AuraAI is a quiet, chalk-and-notebook assistant for teachers.
                Track student notes and observations, plan lessons, and let an
                optional AI help — all while your students&rsquo; data stays on
                your device.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <AppStoreBadge />
                <Link
                  href="/privacy"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition-colors hover:text-coral"
                >
                  How we protect student data
                  <ArrowRight className="h-4 w-4" strokeWidth={2} />
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-soft">
                <span className="inline-flex items-center gap-1.5">
                  <WifiOff className="h-4 w-4 text-green" strokeWidth={1.8} />
                  Works offline
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <KeyRound className="h-4 w-4 text-green" strokeWidth={1.8} />
                  No account
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-green" strokeWidth={1.8} />
                  Students never leave the device
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="flex justify-center lg:justify-end">
            <ThemedDeviceFrame
              light="/screenshots/dashboard_light.png"
              dark="/screenshots/dashboard_dark.png"
              alt="The AuraAI dashboard showing a class of students on a warm notebook page"
              width={300}
              priority
            />
          </Reveal>
        </div>
      </section>

      {/* ── Features ─────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <span className="field-label">Everything a teacher carries</span>
            <h2 className="mt-3 font-display text-3xl leading-tight text-ink sm:text-4xl">
              One notebook, the whole term.
            </h2>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 0.06}>
              <div className="group h-full bg-paper-raised p-7 transition-colors hover:bg-coral-wash">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-coral-wash text-coral transition-colors group-hover:bg-coral group-hover:text-chalk">
                  <f.icon className="h-5 w-5" strokeWidth={1.8} />
                </div>
                <h3 className="mt-5 font-display text-xl text-ink">{f.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">
                  {f.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-y border-hairline bg-paper-raised">
        <div className="paper-grain absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-5xl px-5 py-20 sm:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <span className="field-label">How it works</span>
              <h2 className="mt-3 font-display text-3xl leading-tight text-ink sm:text-4xl">
                Set up in minutes. Yours for the year.
              </h2>
            </div>
          </Reveal>
          <div className="mt-14 space-y-16">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={0.05}>
                <div
                  className={`grid items-center gap-8 lg:grid-cols-2 ${
                    i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="coral-margin pl-6">
                    <span className="stamp-mono text-4xl text-coral">{s.n}</span>
                    <h3 className="mt-3 font-display text-2xl text-ink">
                      {s.title}
                    </h3>
                    <p className="mt-3 max-w-md text-[1.02rem] leading-relaxed text-ink-soft">
                      {s.body}
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <ThemedDeviceFrame
                      light={s.shot.light}
                      dark={s.shot.dark}
                      alt={`${s.title} — AuraAI screen`}
                      width={248}
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Privacy first ────────────────────────────────────────────── */}
      <section className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
        <div className="overflow-hidden rounded-3xl border border-hairline bg-board text-chalk">
          <div className="grid gap-10 p-10 sm:p-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <Reveal>
                <span className="field-label" style={{ color: "var(--coral-soft)" }}>
                  Privacy, not as a promise — as an architecture
                </span>
              </Reveal>
              <Reveal delay={0.06}>
                <h2 className="mt-4 font-display text-3xl leading-tight text-chalk sm:text-[2.5rem]">
                  Your students never leave the device.
                </h2>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-5 max-w-lg leading-relaxed text-chalk/75">
                  Names, photos, observations and notes are stored only on your
                  iPhone with SwiftData, protected by the system&rsquo;s
                  encryption. The assistant is optional and uses your own API
                  key. When you use it, only the text you type is sent to{" "}
                  {AI_PROVIDER} to draft a reply — never your students&rsquo;
                  records.
                </p>
              </Reveal>
              <Reveal delay={0.18}>
                <Link
                  href="/privacy"
                  className="mt-7 inline-flex items-center gap-1.5 rounded-xl bg-coral px-5 py-3 text-sm font-semibold text-chalk transition-transform hover:-translate-y-0.5"
                >
                  Read the Privacy Policy
                  <ArrowRight className="h-4 w-4" strokeWidth={2} />
                </Link>
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <ul className="space-y-4">
                {[
                  { icon: ShieldCheck, t: "Student data stays on your iPhone", d: "No AuraAI servers, no accounts, no cloud sync." },
                  { icon: KeyRound, t: "Bring your own key (BYOK)", d: "Your API key is kept in the iOS Keychain and excluded from backups." },
                  { icon: Sparkles, t: "The AI never sees your students", d: "Only your typed prompts reach the provider — never names, photos or records." },
                ].map((p) => (
                  <li
                    key={p.t}
                    className="flex gap-3.5 rounded-2xl bg-chalk/5 p-4 ring-1 ring-chalk/10"
                  >
                    <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-coral/20 text-coral-soft">
                      <p.icon className="h-4.5 w-4.5" strokeWidth={1.8} />
                    </div>
                    <div>
                      <p className="font-medium text-chalk">{p.t}</p>
                      <p className="mt-0.5 text-sm text-chalk/60">{p.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-t border-hairline">
        <div className="notebook-lines absolute inset-0 opacity-40" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-5 py-24 text-center sm:px-8">
          <Reveal>
            <div className="flex justify-center">
              <GisMark size={64} />
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-6 font-display text-4xl leading-tight text-ink sm:text-5xl">
              Teach with a clear conscience.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-ink-soft">
              AuraAI keeps the paperwork close and the private things private.
              Coming soon to the App Store.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <AppStoreBadge />
              <Link
                href="/support"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition-colors hover:text-coral"
              >
                Talk to us
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
