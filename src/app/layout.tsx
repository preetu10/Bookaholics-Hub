"use client"
import './globals.css'
import { Metadata } from 'next';

export const metadata = {
  title: "Bookaholics' Hub",
  description: "Bookaholics Hub",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <title>Bookaholics Hub</title>
      <body className="">{children}</body>
    </html>
  );
}