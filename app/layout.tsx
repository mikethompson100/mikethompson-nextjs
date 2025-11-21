import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mike Thompson",
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
        <h1>Mike Thompson</h1>
        {children}
      </body>
    </html>
  );
}
