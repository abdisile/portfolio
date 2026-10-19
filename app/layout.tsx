import type { Metadata } from "next";
import { Fraunces, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";
import { profile } from "@/lib/content";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const mono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description =
  "Abdi Sileshi is a software engineer and full-stack developer in Addis Ababa. He builds product features, APIs, and AI-enabled web applications.";

export const metadata: Metadata = {
  metadataBase: new URL(profile.site),
  title: "Abdi Sileshi | Full-Stack Software Engineer",
  description,
  openGraph: {
    title: "Abdi Sileshi | Full-Stack Software Engineer",
    description,
    url: profile.site,
    siteName: "Abdi Sileshi",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/portrait.jpg",
        width: 896,
        height: 1111,
        alt: "Portrait of Abdi Sileshi",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.fullName,
  alternateName: profile.name,
  jobTitle: profile.role,
  email: `mailto:${profile.email}`,
  telephone: profile.phone,
  url: profile.site,
  image: `${profile.site}/portrait.jpg`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Addis Ababa",
    addressCountry: "ET",
  },
  sameAs: [
    profile.github,
    profile.githubPrevious,
    profile.linkedin,
    profile.telegram,
  ],
  worksFor: {
    "@type": "Organization",
    name: profile.company,
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Adama Science and Technology University",
  },
};

const themeScript = `(function(){try{var t=localStorage.getItem("theme");var dark=t==="dark"||(t!=="light"&&window.matchMedia("(prefers-color-scheme: dark)").matches);if(dark)document.documentElement.classList.add("dark");}catch(e){}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${outfit.variable} ${fraunces.variable} ${mono.variable} h-full scroll-smooth`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full bg-background font-sans text-foreground antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
