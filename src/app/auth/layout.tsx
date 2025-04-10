import SlideReview from "@/components/slideReview";
import React from "react";
import "../globals.css";
import ThemeToggle from "@/components/themeToggle";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-neutral-background dark:bg-dark-background">  
      <ThemeToggle />      
        {children}
        <SlideReview />
        
      </body>
    </html>
  );
}
