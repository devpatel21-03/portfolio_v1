import { ThemeProvider } from "@/components/ThemeProvider";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Space_Grotesk({ subsets: ["latin"], weight: ["500", "600", "700"] });

export const metadata: Metadata = {
  title: "Dev Patel - AI-ML Developer",
  description: "Portfolio of Dev Patel, a passionate AI-ML Developer specializing in machine learning, artificial intelligence, and modern web development.",
  keywords: "Dev Patel, AI-ML Developer, Machine Learning, Artificial Intelligence, Portfolio",
  authors: [{ name: "Dev Patel" }],
  openGraph: {
    title: "Dev Patel - AI-ML Developer",
    description: "Portfolio of Dev Patel, a passionate AI-ML Developer specializing in machine learning, artificial intelligence, and modern web development.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={inter.className}>
        <ThemeProvider>
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}