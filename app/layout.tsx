import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Valeria Iezzi — Senior Digital Product Designer",
  description:
    "Senior Digital Product Designer with 7+ years of experience turning user needs into intuitive digital products.",
  openGraph: {
    title: "Valeria Iezzi — Senior Digital Product Designer",
    description:
      "Senior Digital Product Designer with 7+ years of experience turning user needs into intuitive digital products.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${instrumentSans.variable}`}>
      <body className="min-h-screen font-sans bg-white">{children}</body>
    </html>
  );
}
