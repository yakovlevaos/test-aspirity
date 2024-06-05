import "./globals.css";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin", "cyrillic"],
});

export const metadata = {
  title: "Vacation",
  description: "Test Task for Aspirity",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <div className="2xl:container mx-auto">{children}</div>
      </body>
    </html>
  );
}
