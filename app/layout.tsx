import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const headerStore = await headers();
  const host = headerStore.get("x-forwarded-host") ?? headerStore.get("host");
  const protocol = headerStore.get("x-forwarded-proto") ?? "https";
  const origin = host ? `${protocol}://${host}` : "http://localhost:3000";
  const ogImage = new URL("/og.png", origin).toString();

  return {
    title: "Edible Petri Dishes by Dasha Plesen",
    description:
      "A 20-page digital artist playbook for recreating microbiological textures with edible ingredients.",
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
    },
    openGraph: {
      title: "Edible Petri Dishes by Dasha Plesen",
      description:
        "A strange little edible mold-art playbook for artists, pastry people and curious makers.",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: "Edible Petri Dishes by Dasha Plesen",
      description:
        "Recreate microbiological textures with edible ingredients. Digital playbook, EUR 55.",
      images: [ogImage],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
