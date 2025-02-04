import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "@/components/layouts/client-layout";

export const metadata: Metadata = {
  title: "UNI-SIZE",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
