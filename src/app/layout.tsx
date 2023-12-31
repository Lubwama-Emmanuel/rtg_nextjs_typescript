import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Shrikhand } from "next/font/google";
import Footer from "@/ui/Footer";

const inter = Inter({ subsets: ["latin"] });
const shrikhand = Shrikhand({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-shrikhand",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shop With Rex",
  description: "For the best laptops in town",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main> {children}</main>

        <Footer />
      </body>
    </html>
  );
}
