import "@/styles/globals.css";
import { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Nav } from "@/components/Nav";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to T2",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="">
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Nav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
