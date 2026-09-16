import { useMemo, useState } from 'react';
import { Eye, ShieldCheck, Cpu, Smartphone, Watch, Headphones, PlugZap, LayoutGrid } from 'lucide-react';
import SectionHeading from './SectionHeading';
import ProductModal from './ProductModal';
import { FILTERS, products, type FilterCategory, type Product } from '../data/products';

const filterIcons: Record<FilterCategory, typeof LayoutGrid> = {
  All: LayoutGrid,
  Laptop: Cpu,
  Smartphone: Smartphone,
  Smartwatch: Watch,
  Audio: Headphones,
  Accessories: PlugZap,
};

const categoryGradient: Record<string, string> = {
  Laptop: 'from-sky-500 to-blue-700',
  Smartphone: 'from-violet-500 to-indigo-600',
  Smartwatch: 'from-teal-500 to-emerald-600',
  'Wireless Earbuds': 'from-cyan-500 to-sky-600',
  'Wireless Headphones': 'from-indigo-500 to-sky-600',
  'Fast Charger': 'from-amber-500 to-orange-600',
};

const categoryIcon: Record<string, typeof Cpu> = {
  Laptop: Cpu,
  Smartphone: Smartphone,
  Smartwatch: Watch,
  'Wireless Earbuds': Headphones,
  'Wireless Headphones': Headphones,
  'Fast Charger': PlugZap,
};

export default function Products() {
  const [filter, setFilter] = useState<FilterCategory>('All');
  const [selected, setSelected] = useState<Product | null>(null);

  const visible = useMemo(
    () => (filter === 'All' ? products : products.filter((p) => p.filterGroup === filter)),
    [filter],
  );

  return (
    <section id="products" aria-label="Products" className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our products"
          title="Products"
          description="All prices are listed in Indian Rupees. Select a product to view specifications and warranty."
        />

        {/* Filters */}
        <div className="mt-8 flex flex-wrap justify-center gap-2" role="group" aria-label="Filter products by category">
          {FILTERS.map((f) => {
            const Icon = filterIcons[f];
            const isActive = filter === f;
            return (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                aria-pressed={isActive}
                className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-150 ${
                  isActive
                    ? 'bg-navy-900 text-white shadow-card'
                    : 'border border-slate-200 bg-white text-slate-600 hover:-translate-y-0.5 hover:border-sky-300 hover:text-slate-900 hover:shadow-card'
                }`}
              >
                <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                {f}
              </button>
            );
          })}
        </div>

        <p className="mt-4 text-center text-sm text-slate-500" role="status" aria-live="polite">
          Showing {visible.length} of {products.length} products
          {filter !== 'All' ? ` in “${filter}”` : ''}
        </p>

        {/* Grid */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p) => {
            const Icon = categoryIcon[p.category] ?? Cpu;
            const grad = categoryGradient[p.category] ?? 'from-sky-500 to-cyan-500';
            return (
              <article
                key={p.id}
                className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all duration-200 hover:-translate-y-1.5 hover:shadow-card"
              >
                {/* Visual header */}
                <div className={`relative bg-gradient-to-br p-5 ${grad}`}>
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
                      backgroundSize: '18px 18px',
                    }}
                  />
                  <div className="relative flex items-start justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-md">
                      <Icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </span>
                    <span className="rounded-full bg-black/25 px-2.5 py-1 text-[11px] font-semibold text-white">
                      {p.category}
                    </span>
                  </div>
                  <p className="relative mt-4 text-[11px] font-bold uppercase tracking-[0.18em] text-white/100">
                    {p.category}
                  </p>
                  <h3 className="relative text-xl font-extrabold tracking-tight text-white">{p.name}</h3>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <p className="text-2xl font-extrabold tracking-tight text-navy-900">{p.price}</p>
                  <p className="mt-1 text-sm text-slate-600">{p.tagline}</p>

                  <ul className="mt-4 space-y-1.5">
                    {p.specifications.slice(0, 4).map((s) => (
                      <li key={s} className="flex items-start gap-2 text-[13px] text-slate-600">
                        <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" aria-hidden="true" />
                        {s}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700">
                    <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
                    {p.warranty}
                  </p>

                  <button
                    type="button"
                    onClick={() => setSelected(p)}
                    aria-label={`View details for ${p.name}`}
                    className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-navy-800 focus-visible:outline-sky-500"
                  >
                    <Eye className="h-4 w-4" aria-hidden="true" />
                    View Details
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {visible.length === 0 && (
          <p className="mt-10 rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center text-sm text-slate-500">
            No products found in this category.
          </p>
        )}
      </div>

      <ProductModal product={selected} onClose={() => setSelected(null)} />
    </section>
  );
}

