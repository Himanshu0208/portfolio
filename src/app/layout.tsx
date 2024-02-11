import type { Metadata } from "next";
import { Roboto_Slab } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const roboto_slab = Roboto_Slab({ subsets: ["latin"] })
export const metadata: Metadata = {
  title: "Himanshu",
  description: "Fresh talent with a passion for innovation, presenting a dynamic portfolio featuring impactful projects developed during academic pursuits, demonstrating potential and dedication to future endeavors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={roboto_slab.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
