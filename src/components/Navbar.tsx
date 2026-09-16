import { useEffect, useState } from 'react';
import { Bot, Menu, X, Zap } from 'lucide-react';
import { navLinks, scrollToSection } from '../data/products';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);

      // Scroll-spy: find the section currently near the top
      const ids = navLinks.map((l) => l.id);
      let current = 'home';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) current = id;
        }
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    // Allow menu close animation before scrolling on mobile
    requestAnimationFrame(() => scrollToSection(id));
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'border-b border-white/10 bg-navy-950/90 shadow-card backdrop-blur-xl'
          : 'border-b border-transparent bg-navy-950/60 backdrop-blur-md'
      }`}
    >
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        {/* Logo */}
        <button
          type="button"
          onClick={() => go('home')}
          className="group flex items-center gap-2.5 rounded-lg"
          aria-label="NovaTech home"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 shadow-glow">
            <Zap className="h-5 w-5 text-white" aria-hidden="true" />
          </span>
          <span className="text-left leading-tight">
            <span className="block text-[17px] font-extrabold tracking-tight text-white">
              NovaTech
            </span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-300/90">
              Electronics
            </span>
          </span>
        </button>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                onClick={() => go(link.id)}
                aria-current={active === link.id ? 'true' : undefined}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-150 ${
                  active === link.id
                    ? 'bg-white/10 text-white shadow-inner'
                    : 'text-slate-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <button
            type="button"
            onClick={() => go('ai-support')}
            className="btn-primary !px-5 !py-2.5"
          >
            <Bot className="h-4 w-4" aria-hidden="true" />
            Chat with AI
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white transition hover:bg-white/20 lg:hidden"
        >
          {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`overflow-hidden transition-[max-height,opacity] duration-200 lg:hidden ${
          open ? 'max-h-[480px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="border-t border-white/10 bg-navy-950/95 px-4 pb-5 pt-3 backdrop-blur-xl">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  type="button"
                  onClick={() => go(link.id)}
                  aria-current={active === link.id ? 'true' : undefined}
                  className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-[15px] font-medium transition ${
                    active === link.id
                      ? 'bg-gradient-to-r from-sky-500/20 to-cyan-400/20 text-white'
                      : 'text-slate-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {link.label}
                  {active === link.id && (
                    <span className="h-2 w-2 rounded-full bg-cyan-400" aria-hidden="true" />
                  )}
                </button>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => go('ai-support')}
            className="btn-primary mt-3 w-full"
          >
            <Bot className="h-4 w-4" aria-hidden="true" />
            Chat with AI
          </button>
        </div>
      </div>
    </header>
  );
}

