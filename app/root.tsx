import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useNavigate,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function meta({}: Route.MetaArgs) {
  return [
    {
      title: "Gain Financial Freedom and Change your Life with Coach Precious",
    },
    {
      name: "description",
      content:
        "Discover Coach Precious' proven system for mothers to achieve financial freedom through affiliate marketing. Join free training now!",
    },
    {
      name: "keywords",
      content:
        "affiliate marketing, work from home, mom income, financial freedom, online earnings, Coach Precious",
    },

    {
      property: "og:title",
      content:
        "Gain Financial Freedom and Change your Life with Coach Precious",
    },
    {
      property: "og:description",
      content:
        "Discover Coach Precious' proven system for mothers to achieve financial freedom through affiliate marketing. Join free training now!",
    },
    {
      property: "og:image",
      content: "/apple-icon-precomposed.png",
    },
    {
      property: "og:url",
      content: "https://www.coachprecious.com",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:site_name",
      content:
        "Gain Financial Freedom and Change your Life with Coach Precious",
    },
    {
      name: "twitter:title",
      content:
        "Gain Financial Freedom and Change your Life with Coach Precious",
    },
    {
      name: "twitter:description",
      content:
        "Discover Coach Precious' proven system for mothers to achieve financial freedom through affiliate marketing. Join free training now!",
    },
    {
      name: "twitter:image",
      content: "/apple-icon-precomposed.png",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:url",
      content: "https://www.coachprecious.com",
    },
    {
      name: "twitter:site",
      content: "@Coach_Precious",
    },
    {
      name: "twitter:creator",
      content: "@Coach_Precious",
    },
  ];
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff"></meta>
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />

        <script
          dangerouslySetInnerHTML={{
            __html: `
      !function(w,d,t){
        w.TiktokAnalyticsObject=t;
        var ttq=w[t]=w[t]||[];
        ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"];
        ttq.setAndDefer=function(obj,method){
          obj[method]=function(){
            obj.push([method].concat(Array.prototype.slice.call(arguments,0)));
          }
        };
        for(var i=0;i<ttq.methods.length;i++){
          ttq.setAndDefer(ttq,ttq.methods[i]);
        }

        // Load TikTok pixel script
        ttq.load=function(pixelId){
          var script=d.createElement("script");
          script.async=true;
          script.src="https://analytics.tiktok.com/i18n/pixel/events.js?sdkid="+pixelId;
          d.getElementsByTagName("head")[0].appendChild(script);
        };

        // Initialize your pixel
        ttq.load("D4F42N3C77UD5T3PSM0G");
        ttq.page();
      }(window, document, "ttq");
    `,
          }}
        />

        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  const navigate = useNavigate();

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
