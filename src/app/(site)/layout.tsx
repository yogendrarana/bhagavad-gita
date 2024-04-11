import type { Metadata } from "next";
import { Inter } from "next/font/google";

// css
import "@/styles/globals.css";

// font
const inter = Inter({ subsets: ["latin"] });

// metadata
export const metadata: Metadata = {
  title: "Bhagavad Gita",
  description: "The Bhagavad Gita, often referred to as the Gita, is a 700-verse Hindu scripture that is part of the Indian epic Mahabharata.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
