import { useEffect } from 'react';
import { X, ShieldCheck, Check } from 'lucide-react';
import type { Product } from '../data/products';

interface Props {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: Props) {
  useEffect(() => {
    if (!product) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${product.name} details`}
      className="fixed inset-0 z-[60] flex items-end justify-center p-0 sm:items-center sm:p-6"
    >
      <button
        type="button"
        aria-label="Close product details"
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-navy-950/70 backdrop-blur-sm"
      />
      <div className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-t-3xl bg-white p-6 shadow-2xl sm:rounded-3xl sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="inline-flex rounded-full bg-sky-50 px-2.5 py-1 text-[11px] font-bold uppercase tracking-widest text-sky-700">
              {product.category}
            </p>
            <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900">{product.name}</h3>
            <p className="mt-1 text-sm text-slate-600">{product.tagline}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <p className="mt-4 text-3xl font-extrabold text-navy-900">
          {product.price}
        </p>

        <h4 className="mt-6 text-sm font-bold uppercase tracking-widest text-slate-500">Specifications</h4>
        <ul className="mt-3 space-y-2">
          {product.specifications.map((s) => (
            <li key={s} className="flex items-start gap-2.5 rounded-xl bg-slate-50 px-3.5 py-2.5 text-sm text-slate-700">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" />
              {s}
            </li>
          ))}
        </ul>

        <p className="mt-4 flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-3.5 py-2.5 text-sm font-semibold text-emerald-800">
          <ShieldCheck className="h-4 w-4" aria-hidden="true" />
          {product.warranty}
        </p>

        <div className="mt-6 flex gap-3">
          <a
            href={`mailto:support@novatech-electronics.com?subject=${encodeURIComponent(`Enquiry about ${product.name}`)}`}
            className="btn-dark flex-1"
          >
            Enquire to buy
          </a>
          <button type="button" onClick={onClose} className="flex-1 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
            Close
          </button>
        </div>
        <p className="mt-3 text-center text-xs text-slate-500">
          Orders above ₹2,000: Free delivery · Returns accepted within 7 days of delivery
        </p>
      </div>
    </div>
  );
}

