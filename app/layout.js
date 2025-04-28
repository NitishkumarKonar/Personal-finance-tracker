"use client";

import { TransactionProvider } from "@/context/TransactionContext";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TransactionProvider>
          {children}
        </TransactionProvider>
      </body>
    </html>
  );
}
