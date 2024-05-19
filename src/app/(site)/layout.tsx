import { Toaster } from "sonner";
import type { Metadata } from "next";
import Provider from "../../trpc/client/provider";

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
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
      </head>
      <body>
        <Provider>
          <Toaster />
          <main className="h-full px-[var(--px)] sm:px-[var(--px-sm)] md:px-[var(--px-md)] lg:px-[var(--px-lg)]">
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
