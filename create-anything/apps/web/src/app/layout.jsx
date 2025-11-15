import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      cacheTime: 1000 * 60 * 30, // 30 minutes
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

export const metadata = {
  title:
    "Rix Printing - خزمەتگوزاری چاپەمەنی | خدمات الطباعة | Printing Services",
  description:
    "Professional printing services in Erbil, Iraq. We offer offset, digital, large format, and custom printing solutions. خزمەتگوزاریی چاپی پیشەیی لە هەولێر، عێراق. خدمات طباعة احترافية في أربيل، العراق.",
  keywords:
    "printing, rix printing, چاپخانە, مطبعة, erbil, kurdish printing, arabic printing",
  openGraph: {
    title: "Rix Printing - Professional Printing Services",
    description:
      "Professional printing services in Erbil, Iraq. Offset, digital, and custom printing solutions.",
    type: "website",
    locale: "en_US",
    alternateLocale: ["ckb", "ar"],
  },
  viewport: "width=device-width, initial-scale=1",
  charset: "utf-8",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts for multilingual support */}
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@100;200;300;400;500;600;700;800;900&family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <style jsx global>{`
          * {
            box-sizing: border-box;
          }
          
          body {
            font-family: 'Inter', 'Noto Kufi Arabic', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            margin: 0;
            padding: 0;
            line-height: 1.6;
          }
          
          /* RTL Support */
          [dir="rtl"] {
            font-family: 'Noto Kufi Arabic', 'Inter', sans-serif;
          }
          
          [dir="rtl"] input,
          [dir="rtl"] textarea {
            text-align: right;
          }
          
          /* Smooth scrolling */
          html {
            scroll-behavior: smooth;
          }
          
          /* Custom scrollbar */
          ::-webkit-scrollbar {
            width: 8px;
          }
          
          ::-webkit-scrollbar-track {
            background: #f1f1f1;
          }
          
          ::-webkit-scrollbar-thumb {
            background: #c1c1c1;
            border-radius: 4px;
          }
          
          ::-webkit-scrollbar-thumb:hover {
            background: #a1a1a1;
          }
        `}</style>
      </head>
      <body>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
