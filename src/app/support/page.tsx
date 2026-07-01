import type { Metadata } from "next";
import { Mail, Clock, MessageSquareText } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { CONTACT_EMAIL, SITE_NAME, AI_PROVIDER } from "@/lib/site";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Get help with AuraAI. Contact the team and read answers to common questions about privacy, the AI assistant, API keys, and your data.",
  alternates: { canonical: "/support" },
};

const FAQ = [
  {
    q: "Does AuraAI send my students' data anywhere?",
    a: "No. Your groups, students, notes, observations, photos and voice notes are stored only on your device with SwiftData. AuraAI has no servers and no accounts, so there is nowhere for that data to go.",
  },
  {
    q: "What exactly does the AI assistant see?",
    a: `Only the text you type. When you use the optional assistant, the words you write in the chat — and the instructions you give to generate material — are sent over HTTPS to ${AI_PROVIDER} to produce a reply. Your students' names, photos and records are never included.`,
  },
  {
    q: "Why do I need my own API key?",
    a: "AuraAI uses a bring-your-own-key model so you stay in control and there are no subscriptions in the middle. You add a Moonshot AI (Kimi) API key once; it is stored encrypted in the iOS Keychain on your device and excluded from backups. Until you add a key, the assistant sends nothing.",
  },
  {
    q: "Can I use AuraAI offline?",
    a: "Yes. Everything except the AI assistant works fully offline — your notebook, groups, notes, calendar and materials are all local. Only the assistant needs a connection, since it talks to the AI provider.",
  },
  {
    q: "How do I delete my data?",
    a: "You can delete any item inside the app. To erase everything, including your saved credentials, go to Settings → Reset App. Deleting the app from your device also removes all of its local data.",
  },
  {
    q: "Is AuraAI okay to use with real student records?",
    a: "AuraAI is designed to keep student data on-device precisely so it can support your work responsibly. You remain the data controller, so please follow your institution's policies and applicable rules (FERPA, COPPA, GDPR) and obtain any consent they require before recording data about minors.",
  },
];

export default function SupportPage() {
  return (
    <div className="min-h-dvh">
      <Header />
      <main className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
        <Reveal>
          <span className="field-label">Help</span>
          <h1 className="mt-3 font-display text-4xl leading-tight text-ink sm:text-5xl">
            Support
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink-soft">
            Something not working, or a question about how {SITE_NAME} handles
            your data? We&rsquo;re a small team and we read every message.
          </p>
        </Reveal>

        {/* Contact card */}
        <Reveal delay={0.06}>
          <div className="mt-10 overflow-hidden rounded-3xl border border-hairline bg-paper-raised">
            <div className="grid gap-px bg-hairline sm:grid-cols-[1.4fr_1fr]">
              <div className="bg-paper-raised p-8">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-coral-wash text-coral">
                  <Mail className="h-5 w-5" strokeWidth={1.8} />
                </div>
                <h2 className="mt-5 font-display text-2xl text-ink">
                  Email the team
                </h2>
                <p className="mt-2 max-w-md text-[0.98rem] leading-relaxed text-ink-soft">
                  Write to us and we&rsquo;ll get back to you. To help us
                  reproduce anything quickly, please include your device model
                  and iOS version.
                </p>
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=AuraAI%20support`}
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-coral px-5 py-3 text-sm font-semibold text-chalk transition-transform hover:-translate-y-0.5"
                >
                  <Mail className="h-4 w-4" strokeWidth={2} />
                  {CONTACT_EMAIL}
                </a>
              </div>
              <div className="flex flex-col justify-center gap-5 bg-paper-raised p-8">
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 text-green" strokeWidth={1.8} />
                  <div>
                    <p className="font-medium text-ink">Under 48 hours</p>
                    <p className="text-sm text-ink-soft">Typical response time.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MessageSquareText className="mt-0.5 h-5 w-5 text-green" strokeWidth={1.8} />
                  <div>
                    <p className="font-medium text-ink">Feedback welcome</p>
                    <p className="text-sm text-ink-soft">
                      Tell us what you&rsquo;d like {SITE_NAME} to do next.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* FAQ */}
        <div className="mt-16">
          <Reveal>
            <h2 className="font-display text-3xl text-ink">
              Frequently asked questions
            </h2>
            <div className="aura-rule mt-5 w-24" />
          </Reveal>
          <dl className="mt-8 divide-y divide-hairline">
            {FAQ.map((item, i) => (
              <Reveal key={item.q} delay={Math.min(i * 0.04, 0.2)}>
                <div className="py-6">
                  <dt className="font-display text-xl text-ink">{item.q}</dt>
                  <dd className="mt-2 leading-relaxed text-ink-soft">{item.a}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>

        <Reveal>
          <div className="mt-12 rounded-2xl border border-hairline bg-green-wash p-6">
            <p className="text-[0.98rem] leading-relaxed text-ink">
              Still stuck? Email{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-semibold text-green underline underline-offset-2"
              >
                {CONTACT_EMAIL}
              </a>{" "}
              and we&rsquo;ll help you directly.
            </p>
          </div>
        </Reveal>
      </main>
      <Footer />
    </div>
  );
}
