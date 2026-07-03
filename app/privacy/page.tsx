import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy – HANDLY',
  description: 'How HANDLY collects, uses, and protects your personal information.',
};

const sections = [
  {
    title: '1. Information we collect',
    body: 'When you create a HANDLY account we collect your name, phone number, email address, and location (state and LGA). Workers may additionally provide profile photos, skill categories, and portfolio images. When you post a job, we collect the job details and any photos you attach. We also collect ratings, reviews, and messages exchanged through the app to keep the marketplace safe.',
  },
  {
    title: '2. How we use your information',
    body: 'We use your information to operate the marketplace: matching customers with workers, processing jobs and payments, enabling in-app chat, displaying ratings and reviews, and providing customer support. We may use aggregated, anonymized data to improve the product.',
  },
  {
    title: '3. Payments',
    body: 'Payment and wallet transactions are processed through secure third-party payment providers. HANDLY does not store your full card details. Wallet balances and transaction history are retained to provide the service and meet legal obligations.',
  },
  {
    title: '4. Sharing',
    body: 'We share your profile information (name, photo, ratings, skills) with other users as part of the marketplace — that is how customers and workers find each other. We do not sell your personal data. We share data with service providers (hosting, payments, analytics) only as needed to run HANDLY, and with authorities when legally required.',
  },
  {
    title: '5. Data security',
    body: 'Your data is stored on secure cloud infrastructure with encryption in transit. Access is restricted to authorized personnel. No system is perfectly secure — if we become aware of a breach affecting your data, we will notify you promptly.',
  },
  {
    title: '6. Your rights',
    body: 'You can access and update your profile information in the app at any time. You may request deletion of your account and associated personal data by contacting support@handly.africa. Some records (e.g., transaction history) may be retained where required by law.',
  },
  {
    title: '7. Changes & contact',
    body: 'We may update this policy as the product evolves; material changes will be announced in the app. Questions? Contact us at support@handly.africa.',
  },
];

export default function PrivacyPage() {
  return (
    <div className="bg-white">
      <section className="pt-40 pb-16 lg:pt-48">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <p className="text-sm font-semibold text-handly-600 uppercase tracking-widest mb-6">Legal</p>
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 tracking-tight leading-[1.05] mb-6">
            Privacy Policy
          </h1>
          <p className="text-gray-400 text-sm">Last updated: July 2026</p>
        </div>
      </section>

      <section className="pb-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <p className="text-lg text-gray-600 leading-relaxed mb-14">
            HANDLY (&ldquo;we&rdquo;, &ldquo;us&rdquo;) operates a marketplace connecting customers with skilled workers and businesses. This policy explains what information we collect through the HANDLY app and website, and how we use and protect it.
          </p>
          <div className="space-y-12">
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h2>
                <p className="text-[15px] text-gray-500 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
