import type { Metadata } from "next";
import { FC, ReactNode } from "react";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QueryClientWraper from "@/components/QueryClientWraper";

export const metadata: Metadata = {
  title: "Gojek Clone",
  description: "Welcome to my Gojek clone project for study purpose only!",
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
        <QueryClientWraper>
          <Header />
          {children}
          <Footer />
        </QueryClientWraper>
      </body>
    </html>
  );
};

export default RootLayout;
