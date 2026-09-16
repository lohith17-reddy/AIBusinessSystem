import type { ReactNode } from 'react';

interface Props {
  eyebrow: string;
  title: string;
  description?: string;
  dark?: boolean;
  align?: 'center' | 'left';
}

export default function SectionHeading({ eyebrow, title, description, dark = false, align = 'center' }: Props): ReactNode {
  const alignCls = align === 'center' ? 'items-center text-center' : 'items-start text-left';
  return (
    <div className={`flex flex-col gap-3 ${alignCls}`}>
      <span
        className={`section-eyebrow ${
          dark
            ? 'border-cyan-400/30 bg-cyan-400/10 text-cyan-300'
            : 'border-sky-200 bg-sky-50 text-sky-700'
        }`}
      >
        <span className={`h-1.5 w-1.5 rounded-full ${dark ? 'bg-cyan-400' : 'bg-sky-500'}`} aria-hidden="true" />
        {eyebrow}
      </span>
      <h2
        className={`max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl ${
          dark ? 'text-white' : 'text-slate-900'
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`max-w-2xl text-[15px] leading-relaxed sm:text-base ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}

