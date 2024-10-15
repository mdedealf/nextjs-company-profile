import type { Metadata } from "next";
import { FC, ReactNode } from "react";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/sections/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Gojek Clone",
  description: "Welcome to my clone project for study purpose only!",
  icons: {
    icon: "/favicon.png",
  },
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-main-black`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
