import type { Metadata } from "next";
import "./globals.css";
// import MobileHeader from "@/components/MobileHeader"; // SPA Client Component

export const metadata: Metadata = {
  title: "Stitch USA Immigration | Live News",
  description: "Expert reporting and live updates on USA immigration, H-1B, and Policy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-50 min-h-screen pt-16">
        <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-black">
          <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
            <div className="text-xl font-black tracking-tighter uppercase uppercase border border-black p-1 leading-none">
              <span className="bg-primary text-white px-2 py-1 mr-1">USA</span>
              <span>Visas</span>
            </div>
            
            {/* 
              This is where the pure client-side SPA navigation and morphing SVG interactions live.
              <MobileHeader /> 
            */}
          </div>
        </header>

        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
