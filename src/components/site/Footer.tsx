import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-ink text-bone mt-32">
      <div className="container-x py-20">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="font-display text-4xl tracking-tight">
              Vanguard<span className="text-bronze">.</span>
            </div>
            <p className="mt-6 text-sm text-bone/60 max-w-sm leading-relaxed">
              Premium residential construction across Western Australia. Designed with precision,
              built with integrity.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="eyebrow mb-5">Navigate</div>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="link-underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="link-underline">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="link-underline">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="link-underline">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="link-underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="eyebrow mb-5">Studio</div>
            <address className="not-italic text-sm text-bone/70 leading-relaxed space-y-1">
              <div>Vanguard Build Co Pty Ltd</div>
              <div>Keevil Street, Brookdale WA 6112</div>
              <div className="pt-3">
                <a href="mailto:info@vanguardco.com.au" className="link-underline">
                  info@vanguardco.com.au
                </a>
              </div>
              <div>
                <a href="tel:+61481057450" className="link-underline">
                  +61 481 057 450
                </a>
              </div>
            </address>
          </div>
        </div>

        <div className="hairline mt-16" />
        <div className="mt-8 flex flex-col md:flex-row justify-between gap-4 text-xs text-bone/50 uppercase tracking-[0.2em]">
          <div>© {new Date().getFullYear()} Vanguard Build Co Pty Ltd</div>
          <div>Western Australia · Registered Builder</div>
        </div>
      </div>
    </footer>
  );
}
