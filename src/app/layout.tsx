import "@/styles/globals.css";
import type { Metadata } from "next";
import IpadWrapper from "@/components/IpadWrapper";
import ThemeProvider from "@/context/ThemeProvider";
import { Playfair_Display, Urbanist, Roboto_Flex } from "next/font/google";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
});

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  weight: ["400", "500", "600", "700"],
});

const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Focusify | The Best",
  description:
    "Pomodoro and Task Management app developed by Muhammadali with love.",
  icons: {
    icon: "/assets/logo-red.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} ${urbanist.variable} ${robotoFlex.variable} antialiased`}
      >
        <ThemeProvider>
          <div className="min-h-[100vh] grid place-items-center">
            <IpadWrapper>{children}</IpadWrapper>
          </div>

          <div id="home-root"></div>
        </ThemeProvider>
      </body>
    </html>
  );
}
