import type { Metadata } from "next";
import { Alata, Noto_Sans } from "next/font/google";
import "./globals.css";



const alataFont = Alata({
  variable: "--font-alata",
  subsets: ["latin"],
  weight: ["400"],
});
const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
}); 

export const metadata: Metadata = {
  title: "AMI YAEGASHI PORTFOLIO",
  description: "八重樫亜実のポートフォリオ",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ja" className={`${notoSans.variable} h-full scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=chevron_left,chevron_right"
        />
      </head>
      <body className="flex min-h-full flex-col">
        <div className="flex flex-1 flex-col">{children}</div>
      </body>
    </html>
  );
}