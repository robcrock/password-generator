import type { Metadata } from "next";
import { JetBrains_Mono as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "./_components/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Frontend Mentor | Password generator app",
  description:
    "My solution to the Frontend Mentor password generator challenge.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
