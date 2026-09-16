import { Truck, IndianRupee, RotateCcw, Ban, Wallet, CreditCard } from 'lucide-react';
import SectionHeading from './SectionHeading';

const cards = [
  {
    icon: Truck,
    title: 'Delivery times',
    items: [
      'Delivery available across India',
      'Chennai: 1–2 business days',
      'Major Indian cities: 2–4 business days',
      'Other serviceable locations: 4–7 business days',
    ],
  },
  {
    icon: IndianRupee,
    title: 'Delivery charges',
    items: [
      'Orders above ₹2,000: Free delivery',
      'Orders below ₹2,000: ₹99 delivery fee',
    ],
  },
  {
    icon: RotateCcw,
    title: 'Return policy',
    items: [
      'Returns accepted within 7 days of delivery',
      'Product must be unused and undamaged',
      'Original packaging and accessories required',
      'Order details required',
    ],
  },
  {
    icon: Ban,
    title: 'Cancellation',
    items: [
      'Orders can be cancelled before shipment',
      'Cancellation after shipment may not be available',
    ],
  },
  {
    icon: Wallet,
    title: 'Refunds',
    items: [
      'Approved returns are eligible for refunds',
      'Refund processing begins after the returned product is received and inspected',
      'Refunds are made to the original payment method',
    ],
  },
  {
    icon: CreditCard,
    title: 'Payment methods',
    items: [
      'UPI',
      'Credit/debit cards',
      'Net banking',
      'Cash on Delivery for eligible/serviceable locations',
    ],
  },
];

export default function DeliveryReturns() {
  return (
    <section id="delivery" aria-label="Delivery and returns" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Delivery & Returns"
          title="Clear delivery, returns and payment info"
          description="Product warranty is according to the warranty listed for each product. Customers should inspect products and report eligible issues within the return period. Prices are listed in Indian Rupees."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <article
              key={c.title}
              className="rounded-3xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-sky-200 hover:shadow-card"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-400 text-white shadow-soft">
                <c.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-extrabold tracking-tight text-slate-900">{c.title}</h3>
              <ul className="mt-3 space-y-2">
                {c.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-600">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-3xl rounded-2xl border border-sky-100 bg-sky-50/70 px-5 py-4 text-center text-sm leading-relaxed text-sky-900">
          Only the official prices displayed on this website should be used. For any questions about
          delivery, returns, refunds or payments, ask NovaTech AI below or contact{' '}
          <a href="mailto:support@novatech-electronics.com" className="font-bold underline underline-offset-2">
            support@novatech-electronics.com
          </a>
          .
        </p>
      </div>
    </section>
  );
}

