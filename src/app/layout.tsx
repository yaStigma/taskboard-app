import './globals.css';
// import ThemeToggle from "@/components/themeToggle";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body          >
        {/* <ThemeToggle /> */}
        {children}
      </body>
    </html>
  );
}
