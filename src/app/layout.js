import { Inter, Outfit } from "next/font/google";
import Script from "next/script";
import { Suspense } from "react";
import MetaPixelPageView from "@/components/MetaPixelPageView";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.infrivasolutions.com"),

  title: {
    default: "Infriva Solutions | Website, CRM, SEO & IT Solutions Company",
    template: "%s | Infriva Solutions",
  },

  description:
    "Infriva Solutions provides website development, custom CRM software, SEO, Meta Ads, lead generation, UI/UX design and business automation services.",

  applicationName: "Infriva Solutions",

  keywords: [
    "Infriva Solutions",
    "web development company",
    "website development company India",
    "custom CRM development",
    "CRM software development",
    "SEO services",
    "Meta Ads management",
    "lead generation company",
    "business automation",
    "UI UX design",
  ],

  authors: [
    {
      name: "Infriva Solutions",
      url: "https://www.infrivasolutions.com",
    },
  ],

  creator: "Infriva Solutions",
  publisher: "Infriva Solutions",

  category: "Technology",

  openGraph: {
    title: "Infriva Solutions | Website, CRM, SEO & IT Solutions",
    description:
      "Grow your business with high-performance websites, custom CRM systems, SEO, Meta Ads, lead generation and automation solutions.",
    url: "https://www.infrivasolutions.com",
    siteName: "Infriva Solutions",
    locale: "en_IN",
    type: "website",

    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Infriva Solutions web development, CRM and digital marketing services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Infriva Solutions | Website, CRM, SEO & IT Solutions",
    description:
      "Web development, custom CRM, SEO, Meta Ads, lead generation and business automation solutions.",
    images: ["/images/og-image.webp"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Meta Pixel */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {
                if(f.fbq)return;

                n=f.fbq=function(){
                  n.callMethod
                    ? n.callMethod.apply(n,arguments)
                    : n.queue.push(arguments);
                };

                if(!f._fbq)f._fbq=n;

                n.push=n;
                n.loaded=!0;
                n.version='2.0';
                n.queue=[];

                t=b.createElement(e);
                t.async=!0;
                t.src=v;

                s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s);
              }(
                window,
                document,
                'script',
                'https://connect.facebook.net/en_US/fbevents.js'
              );

              fbq('init', '1939264476755737');
              fbq('track', 'PageView');
            `,
          }}
        />

        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1939264476755737&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        <Suspense fallback={null}>
          <MetaPixelPageView />
        </Suspense>

        {children}
      </body>
    </html>
  );
}
