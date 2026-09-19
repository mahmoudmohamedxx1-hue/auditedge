import type { Metadata, Viewport } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { PwaProvider } from "@/components/audit/pwa";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-ss4",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AuditEdge — Audit Learning Workspace",
  description:
    "The learning workspace for your audit office: courses, materials library, AI tutor, team progress, certificates — built on the ISAs, IFRS and the Egyptian regulatory framework.",
  authors: [{ name: "AuditEdge" }],
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  appleWebApp: {
    capable: true,
    title: "AuditEdge",
    statusBarStyle: "default",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAF9F5" },
    { media: "(prefers-color-scheme: dark)", color: "#26241F" },
  ],
  width: "device-width",
  initialScale: 1,
};

/** Applied before first paint so dark-mode users never see a white flash. */
const themeBootstrapScript = `
try {
  var t = localStorage.getItem("auditedge-theme");
  if (t === "dark" || (!t && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    document.documentElement.classList.add("dark");
  }
} catch (e) {}
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootstrapScript }} />
      </head>
      <body
        className={`${inter.variable} ${sourceSerif.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <PwaProvider />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
