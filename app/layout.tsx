import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/providers";
import { constants } from "./constants";
import { MainNavbar } from "./MainNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: constants.appName,
  description: "The best Martial Arts Institute",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <MainNavbar />
          <main className="min-h-[calc(100vh-65px)] bg-slate-200 p-5 dark:bg-black">
            <div className="container mx-auto">{children}</div>
          </main>
        </Providers>
      </body>
    </html>
  );
}
