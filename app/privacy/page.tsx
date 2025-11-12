import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | NeuraSpeak',
  description:
    'Understand how NeuraSpeak collects, uses, and protects your personal information when you visit our sites or use our services.',
};

const lastUpdated = 'November 12, 2025';

const sections = [
  {
    title: '1. Overview',
    body: (
      <>
        <p className="text-midnight-200/90">
          NeuraSpeak Inc. (&ldquo;NeuraSpeak,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) delivers AI-powered translation products
          designed to keep your information private and secure. This Privacy Policy explains how we collect, use, disclose, and safeguard
          information when you access neuraspeak.co, use our applications, or interact with our services (collectively, the &ldquo;Services&rdquo;).
        </p>
        <p className="text-midnight-200/90">
          By using the Services, you consent to the practices described below. If you disagree with this policy, please discontinue use of the Services.
        </p>
      </>
    ),
  },
  {
    title: '2. Information We Collect',
    body: (
      <ul className="space-y-4 text-midnight-200/90">
        <li>
          <strong className="text-midnight-50">Account &amp; Contact Data:</strong> When you join the waitlist, request product access, or contact us,
          we collect details such as your name, email address, company, role, and any additional information you choose to share.
        </li>
        <li>
          <strong className="text-midnight-50">Usage Data:</strong> We gather device information, activity logs, crash reports, and engagement metrics to maintain
          app performance and guide product improvements. Whenever possible, usage data is aggregated or pseudonymized.
        </li>
        <li>
          <strong className="text-midnight-50">Communications:</strong> If you reach out to us by email or participate in product research, we retain the content of
          your message and related metadata in order to respond.
        </li>
        <li>
          <strong className="text-midnight-50">Audio &amp; Translation Content:</strong> Raw audio remains on your device by default. Transcripts, translations,
          and generated insights may be securely processed in the cloud to provide requested functionality. You control retention settings inside the app.
        </li>
        <li>
          <strong className="text-midnight-50">Cookies &amp; Similar Technologies:</strong> Our website uses strictly necessary cookies to secure sessions and remember
          preferences. We do not employ advertising cookies or sell browsing data.
        </li>
      </ul>
    ),
  },
  {
    title: '3. How We Use Information',
    body: (
      <ul className="space-y-4 text-midnight-200/90">
        <li>Deliver, maintain, and improve the Services, including powering translations and analytics dashboards.</li>
        <li>Authenticate users, customize experiences, and remember preferences.</li>
        <li>Monitor and protect the Services against fraud, abuse, and security threats.</li>
        <li>Respond to inquiries, share requested updates, and support product development.</li>
        <li>Fulfill legal obligations and enforce our terms of use.</li>
      </ul>
    ),
  },
  {
    title: '4. Legal Bases for Processing (EEA & UK)',
    body: (
      <ul className="space-y-4 text-midnight-200/90">
        <li>
          <strong className="text-midnight-50">Contractual necessity:</strong> Providing core translation services, account features, and support.
        </li>
        <li>
          <strong className="text-midnight-50">Legitimate interests:</strong> Securing our infrastructure, understanding usage trends, and improving the Services while respecting your rights.
        </li>
        <li>
          <strong className="text-midnight-50">Consent:</strong> Sending optional marketing communications or enabling non-essential analytics (where required by law). You may withdraw consent at any time.
        </li>
        <li>
          <strong className="text-midnight-50">Legal obligations:</strong> Meeting compliance requirements and responding to lawful requests.
        </li>
      </ul>
    ),
  },
  {
    title: '5. How We Share Information',
    body: (
      <ul className="space-y-4 text-midnight-200/90">
        <li>
          <strong className="text-midnight-50">Service Providers:</strong> Trusted vendors that perform hosting, speech-to-text processing, analytics, and customer support under confidentiality agreements.
        </li>
        <li>
          <strong className="text-midnight-50">Business Events:</strong> In the event of a merger, acquisition, financing, or sale of assets, we may share information as part of the transaction with appropriate safeguards.
        </li>
        <li>
          <strong className="text-midnight-50">Legal Requirements:</strong> When required to comply with law, enforce our agreements, or protect the rights, property, or safety of NeuraSpeak, our users, or the public.
        </li>
        <li>We do not sell personal information and we do not share user data with advertisers.</li>
      </ul>
    ),
  },
  {
    title: '5.1 Google User Data',
    body: (
      <p className="text-midnight-200/90">
        If you connect a Google account, NeuraSpeak only accesses the information required to deliver the specific feature you authorize—such as authentication or cloud synchronization. We never store, share, or use Google user data for any purpose beyond that immediate functionality, and you can revoke NeuraSpeak’s access at any time in your Google Account settings.
      </p>
    ),
  },
  {
    title: '6. Data Retention',
    body: (
      <p className="text-midnight-200/90">
        We retain personal information only as long as necessary to fulfill the purposes described in this policy, meet legal obligations, resolve disputes,
        and enforce agreements. Audio-derived content can be deleted at any time via in-app controls. Backup copies may persist for a limited period consistent
        with our disaster-recovery practices.
      </p>
    ),
  },
  {
    title: '7. Security',
    body: (
      <p className="text-midnight-200/90">
        We design our products with security in mind. Protections include encryption in transit and at rest, role-based access controls, continuous monitoring,
        and periodic third-party reviews. No system is completely secure—please use strong passwords, enable device-level protections, and contact us if you suspect unauthorized activity.
      </p>
    ),
  },
  {
    title: '8. Your Privacy Rights',
    body: (
      <>
        <p className="text-midnight-200/90">
          Depending on your location, you may have rights to access, correct, delete, restrict, or port the personal information we hold about you, and to object to certain processing activities.
          You may also have the right to lodge a complaint with your local supervisory authority.
        </p>
        <p className="text-midnight-200/90">
          To exercise your rights, email{' '}
          <a className="text-neon-200 underline decoration-dotted underline-offset-2 transition hover:text-neon-100" href="mailto:privacy@neuraspeak.co">
            privacy@neuraspeak.co
          </a>
          . We respond within the timelines required by applicable law.
        </p>
      </>
    ),
  },
  {
    title: '9. International Data Transfers',
    body: (
      <p className="text-midnight-200/90">
        NeuraSpeak operates globally. When personal information is transferred across borders, we rely on lawful mechanisms such as Standard Contractual Clauses,
        Data Processing Agreements, and technical safeguards that deliver an equivalent level of protection.
      </p>
    ),
  },
  {
    title: '10. Children’s Privacy',
    body: (
      <p className="text-midnight-200/90">
        The Services are not directed to children under 13 (or the minimum age in your jurisdiction). We do not knowingly collect personal data from children.
        If you believe a child has provided us with personal information, please contact us so we can take appropriate action.
      </p>
    ),
  },
  {
    title: '11. Changes to This Policy',
    body: (
      <p className="text-midnight-200/90">
        We may update this Privacy Policy to reflect changes in technology, legal requirements, or our practices. When we make material updates, we will revise the &ldquo;Last updated&rdquo; date and may provide additional notice through the Services.
      </p>
    ),
  },
  {
    title: '12. Contact Us',
    body: (
      <div className="space-y-2 text-midnight-200/90">
        <p>NeuraSpeak Inc.</p>
        <p>
          Email:{' '}
          <a className="text-neon-200 underline decoration-dotted underline-offset-2 transition hover:text-neon-100" href="mailto:privacy@neuraspeak.co">
            privacy@neuraspeak.co
          </a>
        </p>
      </div>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#020213] via-[#06061b] to-[#0b0b1f]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.15),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(14,165,233,0.1),_transparent_60%)]" />
      <main className="relative z-10 mx-auto max-w-4xl px-6 pb-24 pt-24 sm:px-10 lg:px-12">
        <div className="rounded-3xl border border-white/10 bg-midnight-900/80 p-10 shadow-[0_0_50px_rgba(96,165,250,0.15)] backdrop-blur-xl">
          <header className="space-y-4">
            <Link className="inline-flex items-center text-sm text-neon-200 transition hover:text-neon-100" href="/">
              &larr; Back to NeuraSpeak
            </Link>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-neon-400/80">Privacy Policy</p>
            <p className="text-base font-medium text-midnight-100">
              Your privacy matters to us. This Privacy Policy explains what information we collect, how we use it, and the choices you have.
            </p>
            <h1 className="text-4xl font-bold text-white sm:text-5xl">Your privacy, articulated with precision</h1>
            <p className="text-sm text-midnight-300">Last updated: {lastUpdated}</p>
            <p className="text-base leading-relaxed text-midnight-200/90">
              We built NeuraSpeak to help you communicate freely — while keeping you in control of your personal information. This policy outlines how your
              data flows through our systems, the safeguards we apply, and the choices you have to manage it.
            </p>
          </header>

          <div className="mt-12 space-y-12">
            {sections.map((section) => (
              <section key={section.title} className="space-y-5">
                <h2 className="text-2xl font-semibold text-white">{section.title}</h2>
                {section.body}
              </section>
            ))}
          </div>

          <footer className="mt-12 border-t border-white/10 pt-6 text-sm text-midnight-300">
            <p>
              To request a copy of this policy or additional compliance documentation, email{' '}
              <a className="text-neon-200 underline decoration-dotted underline-offset-2 transition hover:text-neon-100" href="mailto:privacy@neuraspeak.co">
                privacy@neuraspeak.co
              </a>
              .
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
}

