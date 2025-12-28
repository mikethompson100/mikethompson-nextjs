import Navbar from "./navbar/page";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Michael J. Thompson",
  description: "Home page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
          {children}
      </body>
    </html>
  );
}
