import type { Metadata } from "next";
import { Concert_One } from 'next/font/google';

const concertOne = Concert_One({
  weight: '400',
  subsets: ['latin'],
});
import "./globals.css";

export const metadata: Metadata = {
  title: "TicTacToe",
  description: "By Haresh Goyal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${concertOne.className} antialiased`}>
      {children}
      </body>
    </html>
  );
}
