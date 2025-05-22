import type { Metadata } from "next";
import "@/app/globals.css";
import { Poppins } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s - Shopenix",
    default: "Shopenix",
  },
  description:
    "Discover great deals at Shopenix – your one-stop destination for shopping smart and fast.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <div className={`flex flex-col min-h-screen ${poppins.variable}`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </ClerkProvider>
  );
}
