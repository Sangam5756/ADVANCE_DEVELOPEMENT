import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./provider";
import { AppbarClient } from "../components/AppbarClient";

export const metadata: Metadata = {
  title: "Wallet",
  description: "Simple Wallet App",
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <AppbarClient />
          {children}
        </Providers>
      </body>
    </html>
  );
}
