import type { Metadata } from "next";
import { Inter, Sofia_Sans_Extra_Condensed } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { ModalProvider } from "@/context/ModalContext";
import Script from "next/script";
import PlausibleProvider from "next-plausible";

const inter = Inter({
  variable: "--inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "800", "900"],
});

const sofia = Sofia_Sans_Extra_Condensed({
  variable: "--sofia",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "800", "900"],
});

const SuisseIntlMedium = localFont({
  src: "../../public/fonts/SuisseIntl-Medium.ttf",
  variable: "--SuisseIntlMedium",
  display: "swap",
});

const SuisseRegular = localFont({
  src: "../../public/fonts/SuisseRegular.ttf",
  variable: "--SuisseRegular",
  display: "swap",
});

const PPNeueMontrealBold = localFont({
  src: "../../public/fonts/PPNeueMontrealBold.otf",
  variable: "--PPNeueMontrealBold",
  display: "swap",
});

const PPNeueMontrealMedium = localFont({
  src: "../../public/fonts/PPNeueMontrealMedium.otf",
  variable: "--PPNeueMontrealMedium",
  display: "swap",
});

export const metadata: Metadata = {
  // title: "Nier Transportation | Premium Black Car Service in Phoenix AZ",
  title: {
    default: "Nier Transportation | Premium Black Car Service in Phoenix AZ",
    template: "%s - Nier Transportation",
  },
  description:
    "Experience Nier Transportation's excellence: Airport transfers, party buses, corporate transport, and more. Your premier Phoenix car service.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <PlausibleProvider
          domain='niertransportation.com'
          trackLocalhost={true}
          enabled={true}
        />
        <Script
          id='ruby-chat-script'
          // You can change this to `beforeInteractive` or `lazyOnload`
          // depending on how soon you want the script to run.
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `
      window.rubyApi={l:[],t:[],on:function(){this.l.push(arguments)},trigger:function(){this.t.push(arguments)}};
      (function(){
        var e = "2bfdfa92-2e3f-4c29-91e7-c15be5b80cf0"; // your widget key
        var a = false;
        var t = document.createElement("script");
        t.async = true;
        t.type = "text/javascript";
        t.src = "https://chatwidget.ruby.com/" + e;
        document.getElementsByTagName("head")[0].appendChild(t);
        t.onreadystatechange = t.onload = function(_) {
          if(!a && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) {
            if(window.RubyChat) {
              window.RubyChat({ c: e });
            }
            a = true;
          }
        };
      })();
    `,
          }}
        />
      </head>
      <body
        className={` ${inter.variable} ${sofia.variable} ${SuisseIntlMedium.variable} ${SuisseRegular.variable} ${PPNeueMontrealBold.variable} ${PPNeueMontrealMedium.variable}`}
      >
        <Toaster
          position='top-right'
          toastOptions={{
            className: "toastFont",
          }}
        />
        <ModalProvider>{children}</ModalProvider>
      </body>
    </html>
  );
}
