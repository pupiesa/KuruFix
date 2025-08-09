import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SessionProviders } from "./components/wrapper/SessionProviders";
import { ThemeProvider } from "./components/wrapper/ThemeProvider";
import LayoutWrapper from "./components/LayoutWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "kuru fix",
  description: "report broken kuruphan online",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <SessionProviders>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <LayoutWrapper>{children}</LayoutWrapper>
          </ThemeProvider>
        </SessionProviders>
      </body>
    </html>
  );
}
