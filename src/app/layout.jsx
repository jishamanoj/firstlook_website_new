import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Firstlook: Connecting Singles Globally",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="font-antonia">
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}
