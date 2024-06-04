import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import BackToStaff from "@/components/BackToStaff";
import { Open_Sans } from "next/font/google";
import BackToStuff from "@/components/BackToStaff";

const openSans = Open_Sans({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Vacation",
  description: "Test Task for Aspirity",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <Header />
        <BackToStaff />
        {children}
      </body>
    </html>
  );
}
