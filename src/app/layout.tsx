import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/providers/AuthProvider";
import NextTopLoader from "nextjs-toploader";
import { ThemeProvider } from "@/providers/ThemeProvider";
import ToasterContext from "@/context/ToasterContext";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nexchat - A realtime chat application",
  description:
    "Connect with friends and loved ones instantly with Nexchat - a realtime chat application.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/images/logo.png" type="image/x-icon" />
      </head>
      <body className={lexend.className}>
        <NextTopLoader
          color="#7C3AED"
          crawlSpeed={200}
          height={4}
          crawl={true}
          easing="ease"
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ToasterContext />
          <AuthProvider>{children}</AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
