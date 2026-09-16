import { MapPin, BadgeCheck, Headset, PackageCheck } from 'lucide-react';
import SectionHeading from './SectionHeading';

const points = [
  {
    icon: MapPin,
    title: 'Chennai-based online store',
    desc: 'Online electronics store in Chennai, Tamil Nadu, India. Delivery available across India.',
  },
  {
    icon: BadgeCheck,
    title: 'Pricing & warranty',
    desc: 'Prices are listed in Indian Rupees. Product warranty is according to the warranty listed for each product.',
  },
  {
    icon: PackageCheck,
    title: 'Products',
    desc: 'Laptops, smartphones, smartwatches, headphones, and technology accessories.',
  },
  {
    icon: Headset,
    title: 'Support',
    desc: 'support@novatech-electronics.com, +91 98765 43210, Monday–Saturday, 9 AM–6 PM. AI Customer Support Assistant for products, pricing, delivery, returns, refunds and policies.',
  },
];

export default function About() {
  return (
    <section id="about" aria-label="About NovaTech Electronics" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About us"
          title="A Chennai-based online electronics store"
          description="NovaTech Electronics is an online electronics store offering laptops, smartphones, smartwatches, headphones, and technology accessories."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((p) => (
            <article
              key={p.title}
              className="group rounded-2xl border border-slate-200 bg-slate-50/60 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-sky-200 hover:bg-white hover:shadow-card"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 text-cyan-300 transition group-hover:bg-gradient-to-br group-hover:from-sky-500 group-hover:to-cyan-400 group-hover:text-white">
                <p.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-[15px] font-bold text-slate-900">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

