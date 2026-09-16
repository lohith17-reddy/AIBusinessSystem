import { useState, type FormEvent } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { business } from '../data/products';

const contactRows = [
  { icon: Mail, label: 'Email', value: business.email, href: `mailto:${business.email}` },
  { icon: Phone, label: 'Phone', value: business.phone, href: business.phoneHref },
  { icon: MapPin, label: 'Location', value: business.location },
  { icon: Clock, label: 'Business hours', value: business.hours },
];

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" aria-label="Contact us" className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Contact"
          description="For questions about products, delivery, returns, refunds or policies, send us a message. Business hours: Monday–Saturday, 9 AM–6 PM."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Info card */}
          <div className="overflow-hidden rounded-3xl bg-navy-950 p-6 text-white sm:p-8">
            <h3 className="text-xl font-extrabold tracking-tight">NovaTech Electronics</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-300">
              Online Electronics Store · {business.location}
            </p>
            <ul className="mt-6 space-y-3">
              {contactRows.map((row) => (
                <li
                  key={row.label}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400">
                    <row.icon className="h-5 w-5 text-white" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[11px] font-bold uppercase tracking-widest text-slate-400">
                      {row.label}
                    </span>
                    {row.href ? (
                      <a
                        href={row.href}
                        className="block truncate text-sm font-semibold text-white hover:text-cyan-300"
                      >
                        {row.value}
                      </a>
                    ) : (
                      <span className="block text-sm font-semibold text-white">{row.value}</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-6 rounded-2xl bg-cyan-400/10 px-4 py-3 text-[13px] leading-relaxed text-cyan-100">
              You can also ask{' '}
              <a href="#ai-support" className="font-bold underline underline-offset-2">
                NovaTech AI
              </a>{' '}
              about products, pricing, delivery, returns, refunds and policies.
            </p>
          </div>

          {/* Form card */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card sm:p-8">
            {sent ? (
              <div
                role="status"
                aria-live="polite"
                className="flex h-full min-h-[320px] flex-col items-center justify-center text-center"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50">
                  <CheckCircle2 className="h-8 w-8 text-emerald-600" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-xl font-extrabold text-slate-900">Message received!</h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate-600">
                  Thank you{name ? `, ${name}` : ''}. This demo form does not send messages.
                  For support, email {business.email} or call {business.phone} during business
                  hours (Monday–Saturday, 9 AM–6 PM).
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSent(false);
                    setName('');
                    setEmail('');
                    setMessage('');
                  }}
                  className="mt-6 rounded-full border border-slate-300 px-6 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} aria-label="Contact form" noValidate={false}>
                <h3 className="text-xl font-extrabold tracking-tight text-slate-900">Send us a message</h3>
                <p className="mt-1 text-sm text-slate-500">Business hours: Monday–Saturday, 9 AM–6 PM.</p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-name" className="mb-1.5 block text-sm font-semibold text-slate-700">
                      Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your full name"
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="mb-1.5 block text-sm font-semibold text-slate-700">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label htmlFor="contact-message" className="mb-1.5 block text-sm font-semibold text-slate-700">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="How can we help? E.g. delivery time to my city, warranty on NovaWatch S2…"
                    className="w-full resize-y rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
                  />
                </div>

                <button type="submit" className="btn-dark mt-6 w-full sm:w-auto">
                  <Send className="h-4 w-4" aria-hidden="true" />
                  Send Message
                </button>
                <p className="mt-3 text-xs text-slate-500">
                  Demo form only — messages are not sent to a server. For support, email{' '}
                  {business.email} or call {business.phone}.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

