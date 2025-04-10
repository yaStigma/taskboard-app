import SlideReview from "@/components/slideReview";
import React from "react";
import "../globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-neutral-background dark:bg-dark-background">        
        {children}
        <SlideReview />
        <div className="bg-red-500 text-white p-4 text-lg">Проверка Tailwind</div>
      </body>
    </html>
  );
}
