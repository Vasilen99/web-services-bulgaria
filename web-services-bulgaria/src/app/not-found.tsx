import Link from "next/link";
import { routing } from "@/i18n/routing";

// Fallback for requests that never reach the [locale] segment (e.g. paths the
// proxy matcher skips). It needs its own <html> since the root layout is a
// pass-through.
export default function GlobalNotFound() {
  return (
    <html lang={routing.defaultLocale}>
      <body>
        <div className="min-h-screen flex flex-col gap-4 items-center justify-center text-center px-4">
          <h1>404</h1>
          <p>Страницата не е намерена / Page not found</p>
          <Link className="underline" href={`/${routing.defaultLocale}`}>
            Web Services Bulgaria
          </Link>
        </div>
      </body>
    </html>
  );
}
