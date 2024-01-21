import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vanista - Dashboard",
  robots: {
    index: false,
    follow: true,
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
