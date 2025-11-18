import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service | NeuraSpeak',
  description:
    'Read the Terms of Service that govern your use of NeuraSpeak\'s translation services, applications, and website.',
};

const lastUpdated = 'November 12, 2025';

const sections = [
  {
    title: '1. Acceptance of Terms',
    body: (
      <>
        <p className="text-midnight-200/90">
          By accessing or using NeuraSpeak Inc.&rsquo;s (&ldquo;NeuraSpeak,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) website, mobile applications, desktop software, or any related services (collectively, the &ldquo;Services&rdquo;), you agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;). If you do not agree to these Terms, you may not use the Services.
        </p>
        <p className="text-midnight-200/90">
          These Terms constitute a legally binding agreement between you and NeuraSpeak. We may update these Terms from time to time, and your continued use of the Services after such changes constitutes acceptance of the updated Terms.
        </p>
      </>
    ),
  },
  {
    title: '2. Description of Services',
    body: (
      <>
        <p className="text-midnight-200/90">
          NeuraSpeak provides AI-powered translation and communication tools, including real-time speech-to-text transcription, multilingual translation, cultural context insights, and related features. We reserve the right to modify, suspend, or discontinue any aspect of the Services at any time, with or without notice.
        </p>
        <p className="text-midnight-200/90">
          The Services are provided &ldquo;as is&rdquo; and &ldquo;as available,&rdquo; and we do not guarantee that the Services will be uninterrupted, error-free, or completely secure.
        </p>
      </>
    ),
  },
  {
    title: '3. User Accounts and Registration',
    body: (
      <ul className="space-y-4 text-midnight-200/90">
        <li>
          <strong className="text-midnight-50">Account Creation:</strong> To access certain features, you may need to create an account. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate, current, and complete.
        </li>
        <li>
          <strong className="text-midnight-50">Account Security:</strong> You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
        </li>
        <li>
          <strong className="text-midnight-50">Age Requirements:</strong> You must be at least 13 years old (or the minimum age required in your jurisdiction) to use the Services. If you are under 18, you represent that you have your parent&rsquo;s or guardian&rsquo;s permission to use the Services.
        </li>
        <li>
          <strong className="text-midnight-50">Account Termination:</strong> We reserve the right to suspend or terminate your account at any time, with or without cause or notice, for any reason including, but not limited to, violation of these Terms.
        </li>
      </ul>
    ),
  },
  {
    title: '4. Acceptable Use',
    body: (
      <>
        <p className="text-midnight-200/90">
          You agree to use the Services only for lawful purposes and in accordance with these Terms. You agree not to:
        </p>
        <ul className="mt-4 space-y-3 text-midnight-200/90">
          <li>Violate any applicable local, state, national, or international law or regulation.</li>
          <li>Transmit any content that is illegal, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or otherwise objectionable.</li>
          <li>Impersonate any person or entity or falsely state or otherwise misrepresent your affiliation with a person or entity.</li>
          <li>Interfere with or disrupt the Services or servers or networks connected to the Services.</li>
          <li>Attempt to gain unauthorized access to any portion of the Services, other accounts, computer systems, or networks connected to the Services.</li>
          <li>Use the Services to transmit any viruses, worms, defects, Trojan horses, or other items of a destructive nature.</li>
          <li>Reverse engineer, decompile, or disassemble any portion of the Services.</li>
          <li>Use automated systems (such as bots, scrapers, or spiders) to access the Services without our express written permission.</li>
          <li>Use the Services in any manner that could damage, disable, overburden, or impair our servers or networks.</li>
          <li>Collect or harvest any information from the Services for any commercial purpose without our express written consent.</li>
        </ul>
      </>
    ),
  },
  {
    title: '5. Intellectual Property Rights',
    body: (
      <>
        <p className="text-midnight-200/90">
          <strong className="text-midnight-50">Our Rights:</strong> The Services, including all content, features, functionality, software, text, graphics, logos, icons, images, audio clips, and the selection and arrangement thereof, are owned by NeuraSpeak or its licensors and are protected by copyright, trademark, patent, trade secret, and other intellectual property laws.
        </p>
        <p className="text-midnight-200/90">
          <strong className="text-midnight-50">Your Rights:</strong> Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to access and use the Services for your personal or internal business purposes.
        </p>
        <p className="text-midnight-200/90">
          <strong className="text-midnight-50">User Content:</strong> You retain ownership of any content you submit, post, or display through the Services (&ldquo;User Content&rdquo;). By submitting User Content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, and distribute such User Content solely for the purpose of providing and improving the Services.
        </p>
        <p className="text-midnight-200/90">
          <strong className="text-midnight-50">Feedback:</strong> If you provide us with any feedback, suggestions, or ideas about the Services, we may use such feedback without restriction and without obligation to compensate you.
        </p>
      </>
    ),
  },
  {
    title: '6. Payment Terms',
    body: (
      <>
        <p className="text-midnight-200/90">
          <strong className="text-midnight-50">Fees:</strong> Some features of the Services may require payment of fees. We will clearly disclose any applicable fees before you incur them. All fees are stated in the currency specified at the time of purchase.
        </p>
        <p className="text-midnight-200/90">
          <strong className="text-midnight-50">Payment:</strong> You agree to pay all fees associated with your use of the Services. Payments are processed through third-party payment processors, and you agree to comply with their terms and conditions.
        </p>
        <p className="text-midnight-200/90">
          <strong className="text-midnight-50">Refunds:</strong> Refund policies, if any, will be specified at the time of purchase. Unless otherwise stated, all fees are non-refundable.
        </p>
        <p className="text-midnight-200/90">
          <strong className="text-midnight-50">Price Changes:</strong> We reserve the right to change our pricing at any time. We will provide notice of any material price changes, and such changes will apply to subsequent billing cycles.
        </p>
        <p className="text-midnight-200/90">
          <strong className="text-midnight-50">Subscription Renewal:</strong> If you purchase a subscription, it will automatically renew at the end of each billing period unless you cancel it before the renewal date. You may cancel your subscription at any time through your account settings.
        </p>
      </>
    ),
  },
  {
    title: '7. Privacy and Data Protection',
    body: (
      <p className="text-midnight-200/90">
        Your privacy is important to us. Our collection, use, and disclosure of your personal information is governed by our{' '}
        <Link className="text-neon-200 underline decoration-dotted underline-offset-2 transition hover:text-neon-100" href="/privacy">
          Privacy Policy
        </Link>
        , which is incorporated into these Terms by reference. By using the Services, you consent to the collection and use of your information as described in the Privacy Policy.
      </p>
    ),
  },
  {
    title: '8. Third-Party Services and Links',
    body: (
      <>
        <p className="text-midnight-200/90">
          The Services may contain links to third-party websites, services, or resources that are not owned or controlled by NeuraSpeak. We are not responsible for the content, privacy policies, or practices of any third-party services.
        </p>
        <p className="text-midnight-200/90">
          Your interactions with third-party services are solely between you and the third party. We encourage you to review the terms and privacy policies of any third-party services you access through the Services.
        </p>
      </>
    ),
  },
  {
    title: '9. Termination',
    body: (
      <>
        <p className="text-midnight-200/90">
          <strong className="text-midnight-50">Termination by You:</strong> You may stop using the Services at any time. If you have a paid subscription, you may cancel it through your account settings.
        </p>
        <p className="text-midnight-200/90">
          <strong className="text-midnight-50">Termination by Us:</strong> We may suspend or terminate your access to the Services immediately, without prior notice or liability, for any reason, including if you breach these Terms. Upon termination, your right to use the Services will cease immediately.
        </p>
        <p className="text-midnight-200/90">
          <strong className="text-midnight-50">Effect of Termination:</strong> Upon termination, all licenses and rights granted to you under these Terms will immediately cease. We may delete your account and any data associated with it, subject to our Privacy Policy and applicable law.
        </p>
      </>
    ),
  },
  {
    title: '10. Disclaimers',
    body: (
      <>
        <p className="text-midnight-200/90">
          <strong className="text-midnight-50">No Warranties:</strong> THE SERVICES ARE PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR COURSE OF PERFORMANCE.
        </p>
        <p className="text-midnight-200/90">
          <strong className="text-midnight-50">Translation Accuracy:</strong> While we strive to provide accurate translations, we do not guarantee that translations will be error-free, complete, or suitable for any particular purpose. You should verify critical translations independently, especially for legal, medical, or financial content.
        </p>
        <p className="text-midnight-200/90">
          <strong className="text-midnight-50">Service Availability:</strong> We do not warrant that the Services will be available at all times, uninterrupted, secure, or error-free. We may experience downtime due to maintenance, updates, or circumstances beyond our control.
        </p>
      </>
    ),
  },
  {
    title: '11. Limitation of Liability',
    body: (
      <>
        <p className="text-midnight-200/90">
          TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL NEURASPEAK, ITS AFFILIATES, AGENTS, DIRECTORS, EMPLOYEES, SUPPLIERS, OR LICENSORS BE LIABLE FOR ANY INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES, INCLUDING WITHOUT LIMITATION DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR RELATING TO THE USE OF, OR INABILITY TO USE, THE SERVICES.
        </p>
        <p className="text-midnight-200/90">
          TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, NEURASPEAK ASSUMES NO LIABILITY OR RESPONSIBILITY FOR ANY (I) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT; (II) PERSONAL INJURY OR PROPERTY DAMAGE RESULTING FROM YOUR ACCESS TO OR USE OF THE SERVICES; (III) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SERVERS AND/OR ANY PERSONAL INFORMATION STORED THEREIN; (IV) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SERVICES; (V) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE THAT MAY BE TRANSMITTED TO OR THROUGH THE SERVICES BY ANY THIRD PARTY.
        </p>
        <p className="text-midnight-200/90">
          IN NO EVENT SHALL NEURASPEAK&rsquo;S TOTAL LIABILITY TO YOU FOR ALL DAMAGES EXCEED THE AMOUNT YOU PAID TO NEURASPEAK IN THE TWELVE (12) MONTHS PRIOR TO THE ACTION GIVING RISE TO THE LIABILITY, OR ONE HUNDRED DOLLARS ($100), WHICHEVER IS GREATER.
        </p>
        <p className="text-midnight-200/90">
          Some jurisdictions do not allow the exclusion of certain warranties or the limitation or exclusion of liability for incidental or consequential damages. Accordingly, some of the above limitations may not apply to you.
        </p>
      </>
    ),
  },
  {
    title: '12. Indemnification',
    body: (
      <p className="text-midnight-200/90">
        You agree to defend, indemnify, and hold harmless NeuraSpeak, its affiliates, licensors, and service providers, and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys&rsquo; fees) arising out of or relating to your violation of these Terms or your use of the Services, including, but not limited to, your User Content, any use of the Services&rsquo; content, services, and products other than as expressly authorized in these Terms, or your use of any information obtained from the Services.
      </p>
    ),
  },
  {
    title: '13. Dispute Resolution',
    body: (
      <>
        <p className="text-midnight-200/90">
          <strong className="text-midnight-50">Governing Law:</strong> These Terms shall be governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions.
        </p>
        <p className="text-midnight-200/90">
          <strong className="text-midnight-50">Dispute Resolution:</strong> Any dispute arising out of or relating to these Terms or the Services shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association, except that you may assert claims in small claims court if your claims qualify. The arbitration shall take place in San Francisco, California.
        </p>
        <p className="text-midnight-200/90">
          <strong className="text-midnight-50">Class Action Waiver:</strong> You agree that any dispute resolution proceedings will be conducted only on an individual basis and not in a class, consolidated, or representative action.
        </p>
      </>
    ),
  },
  {
    title: '14. Export Control',
    body: (
      <p className="text-midnight-200/90">
        The Services may be subject to export control laws and regulations. You agree to comply with all applicable export and re-export control laws and regulations, including the Export Administration Regulations maintained by the U.S. Department of Commerce and trade and economic sanctions maintained by the U.S. Treasury Department&rsquo;s Office of Foreign Assets Control. You represent and warrant that you are not located in, under the control of, or a national or resident of any country to which the United States has embargoed goods or services.
      </p>
    ),
  },
  {
    title: '15. Changes to Terms',
    body: (
      <>
        <p className="text-midnight-200/90">
          We reserve the right to modify these Terms at any time. We will notify you of any material changes by posting the new Terms on this page and updating the &ldquo;Last updated&rdquo; date. We may also provide additional notice through the Services or via email for significant changes.
        </p>
        <p className="text-midnight-200/90">
          Your continued use of the Services after any such changes constitutes your acceptance of the new Terms. If you do not agree to the modified Terms, you must stop using the Services.
        </p>
      </>
    ),
  },
  {
    title: '16. Severability',
    body: (
      <p className="text-midnight-200/90">
        If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that these Terms will otherwise remain in full force and effect and enforceable.
      </p>
    ),
  },
  {
    title: '17. Entire Agreement',
    body: (
      <p className="text-midnight-200/90">
        These Terms, together with our Privacy Policy and any other legal notices published by us on the Services, shall constitute the entire agreement between you and NeuraSpeak concerning the Services. If any provision of these Terms is deemed invalid by a court of competent jurisdiction, the invalidity of such provision shall not affect the validity of the remaining provisions of these Terms.
      </p>
    ),
  },
  {
    title: '18. Contact Information',
    body: (
      <div className="space-y-2 text-midnight-200/90">
        <p>If you have any questions about these Terms, please contact us:</p>
        <p>NeuraSpeak Inc.</p>
        <p>
          Email:{' '}
          <a className="text-neon-200 underline decoration-dotted underline-offset-2 transition hover:text-neon-100" href="mailto:legal@neuraspeak.co">
            legal@neuraspeak.co
          </a>
        </p>
        <p>
          For privacy-related inquiries, please contact{' '}
          <a className="text-neon-200 underline decoration-dotted underline-offset-2 transition hover:text-neon-100" href="mailto:privacy@neuraspeak.co">
            privacy@neuraspeak.co
          </a>
          .
        </p>
      </div>
    ),
  },
];

export default function TermsOfServicePage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#020213] via-[#06061b] to-[#0b0b1f]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.15),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(14,165,233,0.1),_transparent_60%)]" />
      <main className="relative z-10 mx-auto max-w-4xl px-6 pb-24 pt-24 sm:px-10 lg:px-12">
        <div className="rounded-3xl border border-white/10 bg-midnight-900/80 p-10 shadow-[0_0_50px_rgba(96,165,250,0.15)] backdrop-blur-xl">
          <header className="space-y-4">
            <Link className="inline-flex items-center text-sm text-neon-200 transition hover:text-neon-100" href="/">
              &larr; Back to NeuraSpeak
            </Link>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-neon-400/80">Terms of Service</p>
            <h1 className="text-4xl font-bold text-white sm:text-5xl">Terms that keep us aligned</h1>
            <p className="text-sm text-midnight-300">Last updated: {lastUpdated}</p>
            <p className="text-base leading-relaxed text-midnight-200/90">
              These Terms of Service govern your use of NeuraSpeak. Please read them carefully. By using our Services, you agree to be bound by these Terms.
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
              If you have questions about these Terms, please contact us at{' '}
              <a className="text-neon-200 underline decoration-dotted underline-offset-2 transition hover:text-neon-100" href="mailto:legal@neuraspeak.co">
                legal@neuraspeak.co
              </a>
              .
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
}

