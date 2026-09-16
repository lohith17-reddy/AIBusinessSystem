import { ArrowRight, Bot, ShieldCheck, Truck, Lock } from 'lucide-react';
import { scrollToSection } from '../data/products';

const trustItems = [
  { icon: ShieldCheck, title: '1 Year Warranty', desc: 'As listed for each product' },
  { icon: Truck, title: 'Fast India-Wide Delivery', desc: 'Chennai · Major cities · More' },
  { icon: Lock, title: 'Secure Payments', desc: 'UPI · Cards · Net banking · COD' },
];

export default function Hero() {
  return (
    <section id="home" aria-label="Home" className="relative overflow-hidden bg-navy-950 pt-[68px]">
      {/* Background decorations */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-sky-600/25 blur-[120px]" />
        <div className="absolute -left-24 top-40 h-72 w-72 rounded-full bg-cyan-400/15 blur-[100px]" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-blue-700/25 blur-[110px]" />
        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)',
            backgroundSize: '44px 44px',
            maskImage: 'radial-gradient(ellipse 80% 70% at 50% 30%, black 30%, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 30%, black 30%, transparent 75%)',
          }}
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pb-16 pt-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:pb-24 lg:pt-20">
        {/* Copy */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-cyan-200">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-300" />
            </span>
            CHENNAI · DELIVERING ACROSS INDIA
          </span>

          <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.6rem]">
            Smart Technology.
            <br />
            <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-teal-200 bg-clip-text text-transparent">
              Better Living.
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-slate-300 sm:text-lg">
            NovaTech Electronics is an online electronics store offering laptops,
            smartphones, smartwatches, headphones, and technology accessories.
            Prices are listed in Indian Rupees. Delivery is available across India.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button type="button" onClick={() => scrollToSection('products')} className="btn-primary">
              Explore Products
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
            <button type="button" onClick={() => scrollToSection('ai-support')} className="btn-secondary">
              <Bot className="h-4 w-4" aria-hidden="true" />
              AI Support
            </button>
          </div>

          {/* Trust indicators */}
          <dl className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {trustItems.map((t) => (
              <div
                key={t.title}
                className="glass flex items-center gap-3 rounded-2xl px-4 py-3.5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400">
                  <t.icon className="h-5 w-5 text-white" aria-hidden="true" />
                </span>
                <span>
                  <dt className="text-[13px] font-bold text-white">{t.title}</dt>
                  <dd className="text-xs text-slate-300">{t.desc}</dd>
                </span>
              </div>
            ))}
          </dl>
        </div>

        {/* Visual */}
        <div className="relative" aria-hidden="true">
          <div className="glass relative overflow-hidden rounded-3xl p-6 shadow-glow sm:p-8">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-sky-600/25 blur-3xl" />

            <div className="relative">
              <div className="flex items-center justify-between">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
                  Featured lineup
                </p>
                <p className="rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-white">
                  6 products
                </p>
              </div>

              {/* Stylised product showcase cards */}
              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.04] p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-300">Laptop</p>
                  <p className="mt-1 text-sm font-bold text-white">NovaBook Pro 14</p>
                  <p className="mt-0.5 text-sm font-extrabold text-cyan-300">₹64,999</p>
                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-sky-500 to-cyan-300" />
                  </div>
                  <p className="mt-2 text-[11px] text-slate-300">i5 · 16GB · 512GB SSD</p>
                </div>
                <div className="mt-6 rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.04] p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-300">Smartphone</p>
                  <p className="mt-1 text-sm font-bold text-white">NovaPhone X1</p>
                  <p className="mt-0.5 text-sm font-extrabold text-cyan-300">₹29,999</p>
                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-3/5 rounded-full bg-gradient-to-r from-sky-500 to-cyan-300" />
                  </div>
                  <p className="mt-2 text-[11px] text-slate-300">5000mAh · 8GB · 128GB</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.04] p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-300">Audio</p>
                  <p className="mt-1 text-sm font-bold text-white">NovaSound Max</p>
                  <p className="mt-0.5 text-sm font-extrabold text-cyan-300">₹5,999</p>
                  <p className="mt-2 text-[11px] text-slate-300">Up to 30 hours battery</p>
                </div>
                <div className="mt-6 rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.04] p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-300">Smartwatch</p>
                  <p className="mt-1 text-sm font-bold text-white">NovaWatch S2</p>
                  <p className="mt-0.5 text-sm font-extrabold text-cyan-300">₹7,999</p>
                  <p className="mt-2 text-[11px] text-slate-300">Up to 7 days battery</p>
                </div>
              </div>

              <div className="mt-5 rounded-2xl bg-white/[0.07] px-4 py-3">
                <p className="text-xs leading-relaxed text-slate-300">
                  <span className="font-bold text-white">Delivery:</span> Chennai 1–2 business days · Major cities 2–4 business days · Other locations 4–7 business days
                </p>
              </div>
            </div>
          </div>

          {/* Floating badge */}
          <div className="absolute -left-3 top-8 hidden rounded-2xl border border-white/15 bg-navy-900/90 px-4 py-3 shadow-card backdrop-blur-xl sm:block">
            <p className="text-xs font-bold text-white">Free delivery</p>
            <p className="text-[11px] text-slate-300">on orders above ₹2,000</p>
          </div>
          <div className="absolute -right-2 bottom-10 hidden rounded-2xl border border-white/15 bg-navy-900/90 px-4 py-3 shadow-card backdrop-blur-xl sm:block">
            <p className="text-xs font-bold text-white">Payment methods</p>
            <p className="text-[11px] text-slate-300">UPI · Cards · Net banking · COD</p>
          </div>
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div aria-hidden="true" className="relative h-10 bg-gradient-to-b from-transparent to-white" />
    </section>
  );
}

