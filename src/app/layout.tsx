import "./globals.css";
import { Inter, Roboto_Slab, Poppins, Outfit, Bebas_Neue } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-roboto-slab",
});

const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ['400', '700', '800', '900'],
});

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ["latin"],
  variable: "--font-bebas",
});

export const metadata = {
  title: {
    default: 'Angus Bailey Portfolio',
    template: '%s | Angus Bailey Portfolio'
  },
  description: 'Software Developer & Computer Science Student',
  icons: {
    icon: './favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="./favicon.ico" sizes="any" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background antialiased flex justify-center pt-16 pb-32 sm:pt-24 sm:pb-40",
          inter.variable,
          robotoSlab.variable,
          poppins.variable,
          outfit.variable,
          bebasNeue.variable,
          "font-sans"
        )}
      >
        <div className="w-full max-w-[640px]">
          {children}
        </div>
      </body>
    </html>
  );
}
