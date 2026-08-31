import type { ReactNode } from "react";
import "../../globals.css";
import { ThemeProvider } from "@/app/components/theme-provider";
import { LenisProvider } from "@/app/components/lenis-provider";
import { NavigationScrollReset } from "./components/scrollReset";

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" suppressHydrationWarning>
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
