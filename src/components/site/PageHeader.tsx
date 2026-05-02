interface PageHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export function PageHeader({ eyebrow, title, subtitle }: PageHeaderProps) {
  return (
    <section className="pt-40 pb-20 border-b border-border">
      <div className="container-x">
        <div className="eyebrow reveal-up">{eyebrow}</div>
        <h1 className="reveal-up delay-1 mt-6 font-display text-5xl md:text-7xl lg:text-8xl leading-[1.05] max-w-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="reveal-up delay-2 mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
