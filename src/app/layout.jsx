import localFont from "next/font/local";
import { Poppins } from 'next/font/google'
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const poppins = Poppins({ subsets: ['latin'],
  weight: ['400','700']
 })


export const metadata = {
  title: "Portfolio v1.1",
  description: "My Personal Portfolio v1.1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={poppins.className}
      >
        {children}
      </body>
    </html>
  );
}
