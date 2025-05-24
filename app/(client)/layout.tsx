import "@/app/globals.css";
import { Poppins } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

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
        <Toaster richColors />
        <Footer />
      </div>
    </ClerkProvider>
  );
}
