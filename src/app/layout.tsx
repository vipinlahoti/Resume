import type { Metadata } from "next";
import "@/styles/globals.css";
import "@/components";
import "@/lib";

export const metadata: Metadata = {
  title: "Vipin Lahoti",
  description:
    "UI developer specializing in React.js, passionate about creating engaging and user-friendly web interfaces.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background font-sans flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
