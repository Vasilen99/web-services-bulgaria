import type { ReactNode } from "react";
import "../../globals.css";

type Props = {
  children: ReactNode;
};

// `<html>` / `<body>` are rendered by `app/[locale]/layout.tsx` so that
// `lang` is correct in the server-rendered HTML. Unmatched routes outside the
// locale segment are handled by `app/not-found.tsx`.
export default function RootLayout({ children }: Props) {
  return children;
}
