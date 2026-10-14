import type { Metadata } from "next";
import { Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingButton } from "@/components/ui/FloatingButton";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "LEADGENIX BCS | B2B Lead Generation & Account-Based Marketing",
    template: "%s | LEADGENIX BCS",
  },
  description:
    "We help technology companies and channel partners identify high-value accounts, reach the right decision-makers, and turn conversations into qualified sales opportunities.",
  metadataBase: new URL("https://leadgenixbcs.com"),
  keywords: [
    "B2B Lead Generation India",
    "Account-Based Marketing India",
    "Technology OEM Marketing",
    "Appointment Setting IT",
    "Channel Partner Demand Generation",
  ],
  authors: [{ name: "Leadgenix BCS" }],
  openGraph: {
    title: "LEADGENIX BCS | B2B Lead Generation & Account-Based Marketing",
    description:
      "We help technology companies and channel partners identify high-value accounts, reach the right decision-makers, and turn conversations into qualified sales opportunities.",
    url: "https://leadgenixbcs.com",
    siteName: "LEADGENIX BCS",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${hankenGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen flex flex-col font-sans bg-paper text-ink antialiased selection:bg-highlight selection:text-ink">
        {/* Accessible skip link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-ink focus:text-white focus:font-bold focus:rounded-button focus:shadow-md focus:outline-none"
        >
          Skip to main content
        </a>

        {/* Global static.app-style header */}
        <Header />

        {/* Semantic main landmark */}
        <main id="main-content" className="flex-1 focus:outline-none">
          {children}
        </main>

        {/* Global footer */}
        <Footer />

        {/* Floating consultation action button */}
        <FloatingButton />
      </body>
    </html>
  );
}
