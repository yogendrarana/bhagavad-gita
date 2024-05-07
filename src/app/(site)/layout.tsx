import { Toaster } from "sonner";
import type { Metadata } from "next";

// css
import "@/styles/globals.css";

// metadata
export const metadata: Metadata = {
  title: "Sanatan",
  description: "Sanatan Dharma - Eternal Truth",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="px-[var(--px)] sm:px-[var(--sm-px)]">
        <Toaster />
        <main className="h-full">
          {children}
        </main>
      </body>
    </html>
  );
}
