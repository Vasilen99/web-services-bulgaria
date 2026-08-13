import type { ReactNode } from "react";
import "./[locale]/globals.css";

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html suppressHydrationWarning>
      <body suppressHydrationWarning>
        <div className="min-h-screen max-w-480 m-auto flex flex-col overflow-x-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
