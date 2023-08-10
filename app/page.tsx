import { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "T2",
  description: "A template for Next.js with Tailwind",
};

export default function Page() {
  return (
    <>
      <main>
        <div className="text-3xl font-bold text-center mt-8">
          <h1>Welcome to the T2 template</h1>
          <Button className="mt-8">Click me</Button>
        </div>
      </main>
    </>
  );
}
