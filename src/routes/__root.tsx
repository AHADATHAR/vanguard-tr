import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { SiteLayout } from "../components/site/Layout";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <SiteLayout>
      <div className="flex min-h-[80vh] items-center justify-center px-4">
        <div className="max-w-md text-center">
          <div className="eyebrow">Error 404</div>
          <h1 className="mt-6 font-display text-7xl">Not Found</h1>
          <p className="mt-4 text-muted-foreground">
            The page you're looking for has moved or no longer exists.
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center justify-center px-6 py-3 text-xs uppercase tracking-[0.2em] bg-primary text-primary-foreground hover:bg-bronze transition-colors"
          >
            Return Home
          </Link>
        </div>
      </div>
    </SiteLayout>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Vanguard Build Co — Premium Residential Construction in WA" },
      {
        name: "description",
        content:
          "Vanguard Build Co Pty Ltd builds high-quality custom homes across Western Australia. Designed with precision, built with integrity.",
      },
      { name: "author", content: "Vanguard Build Co Pty Ltd" },
      { property: "og:title", content: "Vanguard Build Co — Premium Residential Construction" },
      {
        property: "og:description",
        content: "Premium residential construction across Western Australia.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;1,400&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <SiteLayout>
      <Outlet />
    </SiteLayout>
  );
}
