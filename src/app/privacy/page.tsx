import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { AI_PROVIDER, CONTACT_EMAIL, LAST_UPDATED, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How AuraAI handles your data: student notes and observations stay on your device; only the text you type reaches the optional AI provider.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-dvh">
      <Header />
      <main className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
        <Reveal>
          <span className="field-label">Legal</span>
          <h1 className="mt-3 font-display text-4xl leading-tight text-ink sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-ink-soft">
            Last updated: {LAST_UPDATED}
          </p>
          <div className="aura-rule mt-6 w-24" />
        </Reveal>

        <Reveal delay={0.05}>
          <article className="prose-aura mt-10 coral-margin pl-6">
            <p>
              {SITE_NAME} was built by a teacher, for teachers, with one firm
              rule: the sensitive information you record about your students is
              yours and stays with you. This policy explains, plainly, what the
              app does and does not do with data. It reflects exactly how the app
              behaves — not a template.
            </p>

            <h2>The short version</h2>
            <ul>
              <li>
                We run no servers of our own and we have no user accounts. There
                is nothing for us to see, sell, or lose.
              </li>
              <li>
                Everything about your students lives only on your device.
              </li>
              <li>
                The AI assistant is optional, uses your own API key, and only
                ever receives the text you type — never your students&rsquo;
                records.
              </li>
            </ul>

            <h2>Data stored on your device</h2>
            <p>
              {SITE_NAME} is a local app. Your groups, student profiles, photos,
              voice notes, observations, tasks, calendar events and generated
              materials are stored only on your device using Apple&rsquo;s
              SwiftData framework, protected by the operating system&rsquo;s
              encryption. We operate no cloud service and do not collect,
              receive, or transmit this information to ourselves or anyone else.
            </p>

            <h2>The optional AI assistant</h2>
            <p>
              {SITE_NAME} includes an optional assistant that can help you draft
              lesson plans, quizzes, rubrics, worksheets, and summaries. This
              feature is off until you choose to use it, and it requires you to
              add your own API key (a &ldquo;bring your own key&rdquo; model).
            </p>
            <p>
              When you use the assistant, the text you type in the chat and the
              instructions you give to generate material are sent over an
              encrypted HTTPS connection to <strong>{AI_PROVIDER}</strong>, an AI
              provider whose servers are located in China, solely to produce the
              response you asked for.{" "}
              <strong>
                We never send your students&rsquo; names, photos, observations,
                or records to the AI provider.
              </strong>{" "}
              Only the words you personally type leave the device. Your use of
              the assistant is also subject to the AI provider&rsquo;s own terms
              and privacy practices; please review Moonshot AI&rsquo;s policies
              for how they handle the text they receive.
            </p>

            <h2>Your API key and credentials</h2>
            <p>
              Your AI API key — and any optional integration URL you configure —
              is stored encrypted in the iOS Keychain, on your device only, and
              is excluded from device backups. It is used exclusively to
              authenticate your requests to the AI provider. Nothing is sent
              anywhere until you have added a key yourself.
            </p>

            <h2>Minors and education records</h2>
            <p>
              {SITE_NAME} is designed for use by teachers, not for direct use by
              children. Because the app may contain information about students,
              we minimize exposure by design: student data never leaves your
              device. You remain the data controller for the information you
              record. Please follow your school or institution&rsquo;s policies
              and the regulations that apply to you — such as FERPA, COPPA, or
              GDPR — before recording data about minors, and obtain any consent
              those rules require.
            </p>

            <h2>Analytics, tracking, and advertising</h2>
            <p>
              There are none. {SITE_NAME} contains no third-party analytics, no
              advertising SDKs, and no cross-app tracking. We do not build a
              profile of you and we do not have an identifier to track you with.
            </p>

            <h2>Deleting your data</h2>
            <p>
              Because your data lives on your device, you are always in control
              of it. You can delete any individual item inside the app, and you
              can erase all of your data and credentials at once from
              Settings &rarr; Reset App. Deleting {SITE_NAME} from your device
              removes all of its local data.
            </p>

            <h2>Changes to this policy</h2>
            <p>
              If we change how the app handles data, we will update this page and
              revise the date above. Meaningful changes will be reflected in the
              app before they take effect.
            </p>

            <h2>Contact</h2>
            <p>
              For any privacy question or request, write to us at{" "}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. We answer
              privacy inquiries within 48 hours.
            </p>
          </article>
        </Reveal>
      </main>
      <Footer />
    </div>
  );
}
