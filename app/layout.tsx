import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ahmad Shakeel — DevOps Engineer & Software Developer",
  description:
    "Portfolio of Ahmad Shakeel, a DevOps Engineer & Software Developer based in Lahore, Pakistan. Specializing in AWS, Docker, Kubernetes, CI/CD, Flutter, and Firebase.",
  keywords: [
    "DevOps",
    "Software Developer",
    "AWS",
    "Docker",
    "Kubernetes",
    "Flutter",
    "Ahmad Shakeel",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased bg-[#121212] text-[#E0E0E0]`}>
        {children}
      </body>
    </html>
  );
}
