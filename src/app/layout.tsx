import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./(website)/component/layout/Navbar/page";
import Footer from "./(website)/component/layout/Footer/page";

export const metadata: Metadata = {
  title: "TaskPilotAI - Team & Task Management",
  description: "first application with nextjs and typescript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-800">
      <Navbar />
        <main className="mx-auto max-w-6xl px-6 py-8">{children}</main>
      <Footer />
      </body>
    </html>
  );
}
