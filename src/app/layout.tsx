import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DeepWork",
  description: "A pomodoro timer for deep work",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-darkBlue">
        {children}
      </body>
    </html>
  );
}
