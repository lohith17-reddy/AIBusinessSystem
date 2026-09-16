import { Zap, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { business, products, scrollToSection } from '../data/products';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-slate-300" aria-label="Footer">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.9fr_1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400">
                <Zap className="h-5 w-5 text-white" aria-hidden="true" />
              </span>
              <span className="leading-tight">
                <span className="block text-[17px] font-extrabold tracking-tight text-white">
                  NovaTech
                </span>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-300/90">
                  Electronics
                </span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              {business.description} Based in {business.location}.
            </p>
            <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3.5 py-1.5 text-xs font-semibold text-slate-200">
              <Clock className="h-3.5 w-3.5 text-cyan-300" aria-hidden="true" />
              {business.hours}
            </p>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer quick links">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white">Quick links</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'products', label: 'Products' },
                { id: 'ai-support', label: 'AI Support' },
                { id: 'contact', label: 'Contact' },
              ].map((l) => (
                <li key={l.id}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(l.id)}
                    className="transition hover:text-cyan-300"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Products + policies */}
          <nav aria-label="Footer products and policies">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white">Products</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {products.map((p) => (
                <li key={p.id}>
                  <button
                    type="button"
                    onClick={() => scrollToSection('products')}
                    className="transition hover:text-cyan-300"
                  >
                    {p.name} · {p.price}
                  </button>
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => scrollToSection('delivery')}
              className="mt-4 text-sm font-semibold text-cyan-300 underline-offset-4 hover:underline"
            >
              Delivery &amp; Returns
            </button>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={`mailto:${business.email}`} className="flex items-start gap-2.5 transition hover:text-cyan-300">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" aria-hidden="true" />
                  {business.email}
                </a>
              </li>
              <li>
                <a href={business.phoneHref} className="flex items-start gap-2.5 transition hover:text-cyan-300">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" aria-hidden="true" />
                  {business.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" aria-hidden="true" />
                {business.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs sm:flex-row">
          <p>© {year} {business.name}. All rights reserved.</p>
          <p className="text-slate-400">
            Prices in Indian Rupees · Official website prices only · Built for Netlify deployment
          </p>
        </div>
      </div>
    </footer>
  );
}

