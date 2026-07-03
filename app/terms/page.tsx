import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service – HANDLY',
  description: 'The terms that govern your use of the HANDLY app and website.',
};

const sections = [
  {
    title: '1. The service',
    body: 'HANDLY is a marketplace that connects customers who need work done with independent skilled workers and businesses (“Workers”). HANDLY provides the platform — matching, messaging, payments, and ratings — but is not a party to the work agreement between customers and Workers, and does not itself provide the services listed.',
  },
  {
    title: '2. Accounts',
    body: 'You must provide accurate information when creating an account, keep your credentials secure, and be legally able to enter contracts. One person may hold a customer account, a worker account, or both. We may suspend accounts that violate these terms or put other users at risk.',
  },
  {
    title: '3. Jobs, bookings, and payments',
    body: 'Customers may book Workers instantly or post jobs for Workers to apply. Prices are set between customer and Worker — either as a stated budget or by negotiation. Payments made through HANDLY are processed by third-party payment providers. Platform fees, where applicable, are disclosed before you confirm.',
  },
  {
    title: '4. Worker obligations',
    body: 'Workers agree to represent their skills honestly, show up as agreed, and perform work with reasonable care and skill. Workers are independent contractors, not employees or agents of HANDLY.',
  },
  {
    title: '5. Ratings and conduct',
    body: 'Ratings and reviews must be honest and based on real experience. Harassment, fraud, off-platform payment circumvention, and illegal activity are prohibited and grounds for removal.',
  },
  {
    title: '6. Disputes',
    body: 'If something goes wrong, contact support and we will assist in mediating between the parties. HANDLY is not liable for the quality of work performed by Workers, but we take marketplace safety seriously and act on verified complaints.',
  },
  {
    title: '7. Liability',
    body: 'The platform is provided “as is”. To the maximum extent permitted by law, HANDLY’s liability arising out of your use of the service is limited to the fees you paid to HANDLY in the preceding three months.',
  },
  {
    title: '8. Changes & contact',
    body: 'We may update these terms as the service evolves; continued use after changes constitutes acceptance. Questions? Contact us at support@handly.africa.',
  },
];

export default function TermsPage() {
  return (
    <div className="bg-white">
      <section className="pt-40 pb-16 lg:pt-48">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <p className="text-sm font-semibold text-handly-600 uppercase tracking-widest mb-6">Legal</p>
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 tracking-tight leading-[1.05] mb-6">
            Terms of Service
          </h1>
          <p className="text-gray-400 text-sm">Last updated: July 2026</p>
        </div>
      </section>

      <section className="pb-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <p className="text-lg text-gray-600 leading-relaxed mb-14">
            These terms govern your use of the HANDLY app and website. By creating an account or using the service you agree to them.
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
