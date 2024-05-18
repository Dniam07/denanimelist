import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar/NavBar";
import Search from "@/components/search/Search";
import Card from "@/components/animelist/Card";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DenAnimeList",
  description: "CREATED BY DEDEN",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="mt-16">
       <NavBar className=""/>
        {children}
        </div>
        </body>
    </html>
  );
}
