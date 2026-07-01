import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { CONTACT_EMAIL, LAST_UPDATED, SITE_NAME, AI_PROVIDER } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "The terms that govern your use of AuraAI — an on-device teaching assistant with an optional, bring-your-own-key AI feature.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="min-h-dvh">
      <Header />
      <main className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
        <Reveal>
          <span className="field-label">Legal</span>
          <h1 className="mt-3 font-display text-4xl leading-tight text-ink sm:text-5xl">
            Terms of Use
          </h1>
          <p className="mt-3 text-sm text-ink-soft">Last updated: {LAST_UPDATED}</p>
          <div className="aura-rule mt-6 w-24" />
        </Reveal>

        <Reveal delay={0.05}>
          <article className="prose-aura mt-10 coral-margin pl-6">
            <p>
              These terms govern your use of {SITE_NAME} (&ldquo;the app&rdquo;).
              By using the app, you agree to them. If you do not agree, please
              don&rsquo;t use the app.
            </p>

            <h2>What the app is</h2>
            <p>
              {SITE_NAME} is a local, on-device teaching assistant for keeping
              notes and observations about students, organizing groups, and
              planning lessons. It includes an optional AI feature that requires
              your own API key and connects to {AI_PROVIDER}.
            </p>

            <h2>Acceptable use</h2>
            <ul>
              <li>
                Use the app lawfully and in line with your school or
                institution&rsquo;s policies.
              </li>
              <li>
                Only record information about students that you are permitted to
                record, and obtain any consent required by the rules that apply
                to you (such as FERPA, COPPA, or GDPR).
              </li>
              <li>
                Do not use the app to harass, harm, or unlawfully profile any
                person.
              </li>
              <li>
                Keep your device secured with a passcode and biometric lock —
                your data lives on it.
              </li>
            </ul>

            <h2>Your data and your responsibility</h2>
            <p>
              Your data is stored on your device, and we have no access to it and
              cannot recover it for you. You are solely responsible for the
              information you enter, for backing up or exporting anything you wish
              to keep, and for your use of the optional AI feature. When you use
              that feature, your interaction with {AI_PROVIDER} is also governed
              by that provider&rsquo;s terms.
            </p>

            <h2>Intellectual property</h2>
            <p>
              The app, its name, its mascot, and its design are the property of
              {" "}
              {SITE_NAME}. The notes, materials, and content you create are
              yours. Content generated through the AI feature is subject to the
              AI provider&rsquo;s terms regarding ownership and permitted use.
            </p>

            <h2>No warranty</h2>
            <p>
              The app is provided &ldquo;as is,&rdquo; without warranties of any
              kind. We do our best to make it reliable and useful, but we
              can&rsquo;t guarantee it will be error-free or available at all
              times, and AI-generated content may be inaccurate — always review
              it before relying on it.
            </p>

            <h2>Limitation of liability</h2>
            <p>
              To the extent permitted by law, {SITE_NAME} is not liable for any
              indirect, incidental, or consequential damages arising from your
              use of the app, including any loss of data stored on your device.
            </p>

            <h2>Governing law</h2>
            <p>
              These terms are governed by the laws of the United Mexican States
              (México), without regard to conflict-of-law principles.
            </p>

            <h2>Contact</h2>
            <p>
              Questions about these terms? Write to{" "}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
            </p>
          </article>
        </Reveal>
      </main>
      <Footer />
    </div>
  );
}
