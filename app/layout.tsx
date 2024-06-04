import "@/styles/globals.css";
import { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Providers } from "./providers";

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
        <Providers>
          <Nav />
          {children}
        </Providers>
      </body>
    </html>
  );
}
