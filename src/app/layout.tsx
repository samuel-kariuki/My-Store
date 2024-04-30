
import { Suspense } from "react";
import { Header } from "core/components/header/header";
import Footer from "core/components/footer/Footer";
import "./globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Loading from "./loading";
import { LocalContextProvider } from "core/contexts/local-context";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Sam-store",
  description: "Sam store fake store api",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      
        <LocalContextProvider>
          <Header />
          <Suspense fallback={<Loading />}>{children}</Suspense>

        </LocalContextProvider>
        <Footer /> 
      </body>
    </html>
  );
}
