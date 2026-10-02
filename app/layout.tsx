import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/share-component/navbar/navbar";
import Footer from "@/share-component/footer/footer";
import Script from "next/script";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Hire Class Buddy",
  alternateName: "Hire Class Buddy",
  url: "https://hireclassbuddy.com/",
  logo: "https://hireclassbuddy.com/logo1.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1 229 202 8857",
    contactType: "customer service",
    areaServed: "US",
    availableLanguage: "en",
  },
  sameAs: [
    "https://www.instagram.com/hireclassbuddy",
    "https://www.facebook.com/people/Hire-Class-Buddy/61571676454739/",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://hireclassbuddy.com"),
  title: "Hire Class Buddy",
  description: "Get expert assistance for your classes and assignments with Hire Class Buddy.",
  verification: {
    google: [
      "NjsN1R8i6zRwFRZ1nji4enhGyduvbPwOAWKLT7UZ6xk",
      "IJzs_8f0SD_8hTd2qf_FLg2rhPvgN8VL9FmEpq1m308",
    ],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Font Awesome for WhatsApp Icon */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
        <script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
          }}
        />
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-MPEBH39Z0T"></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MPEBH39Z0T');
          `}
        </Script>
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "yrc8p2vntu");
          `}
        </Script>

        {/* --- WhatsApp Floating Button --- */}
        <Link
          prefetch={false}
          href="https://wa.me/12292028857"
          target="_blank"
          rel="nofollow noopener noreferrer"
          aria-label="Chat on WhatsApp"
          style={{
            position: 'fixed',
            bottom: 'calc(20px + env(safe-area-inset-bottom, 0px))', // Tawk.to ke upar rakhne ke liye space
            right: '20px',
            backgroundColor: '#25d366',
            color: '#fff',
            borderRadius: '50px',
            textAlign: 'center',
            fontSize: '30px',
            boxShadow: '2px 2px 3px #999',
            zIndex: 1000,
            width: '50px',
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none'
          }}
        >
          <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
        </Link>



        {/* Tawk.to Widget */}
        <Script id="tawk-to" strategy="lazyOnload">
          {`
            var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
            Tawk_API.customStyle = {
              visibility: {
                desktop: { position: 'br', xOffset: 20, yOffset: 110 },
                mobile: { position: 'br', xOffset: 20, yOffset: 130 }
              }
            };
            (function () {
              var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
              s1.async = true;
              s1.src = 'https://embed.tawk.to/69dd78add113861c2e2d76dc/1jm4hupmi';
              s1.charset = 'UTF-8';
              s1.setAttribute('crossorigin', '*');
              s0.parentNode.insertBefore(s1, s0);
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
