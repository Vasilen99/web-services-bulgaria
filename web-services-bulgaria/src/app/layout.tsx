import type { ReactNode } from "react";
import "./[locale]/globals.css";
import { ThemeProvider } from "@/app/components/theme-provider";
import { LenisProvider } from "@/app/components/lenis-provider";

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html suppressHydrationWarning>
      <body suppressHydrationWarning>
        <LenisProvider>
          <ThemeProvider>
            <div className="min-h-screen max-w-480 m-auto flex flex-col overflow-x-hidden">
              {children}
            </div>
          </ThemeProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
