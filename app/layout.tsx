import type { Metadata } from "next";
import { DM_Serif_Display, Manrope } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif-display",
  subsets: ["latin"],
  weight: "400",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "ISC Realtors | Trusted Real Estate Partner",
  description: "Buy, Sell, Manage, and Invest in Real Estate with ISC Realtors - Your Trusted Partner for Comprehensive Real Estate Solutions. Explore Our Services Today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        dmSerifDisplay.variable,
        manrope.variable
      )}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className={cn("min-h-full flex flex-col", manrope.className)}>{children}</body>
    </html>
  );
}
