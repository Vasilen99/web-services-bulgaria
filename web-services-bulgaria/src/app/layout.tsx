import type { ReactNode } from "react";
import { getLocale } from "next-intl/server";
import "../../globals.css";
import { ThemeProvider } from "@/app/components/theme-provider";
import { LenisProvider } from "@/app/components/lenis-provider";
import { NavigationScrollReset } from "./components/scrollReset";

type Props = {
  children: ReactNode;
};

export default async function RootLayout({ children }: Props) {
  // Correct on the initial server render; <HtmlLang /> in the locale layout
  // keeps it in sync on client-side locale switches.
  const locale = await getLocale();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <LenisProvider>
          <NavigationScrollReset />
          <ThemeProvider>
            <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
              {children}
            </div>
          </ThemeProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
