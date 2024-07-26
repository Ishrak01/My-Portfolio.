import { Inter } from "next/font/google";
import Head from 'next/head';
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import "./globals.css";
import ReduxProvider from "./redux/provider/reduxProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hasin's Portfolio",
  description: "Full Stack Developer || Programmer || Software Engineer",


}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head><link rel="icon" href="/favicon.ico" sizes="any" /></Head>

      <body className={inter.className} >
        <ReduxProvider>
          <Toaster />
          <Navbar />
          {children}
        </ReduxProvider>

      </body>
    </html>
  );
}
