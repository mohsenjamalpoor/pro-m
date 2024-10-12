import NextAuthProvider from "@/providers/NextAuthProvider";
import Layout from "@/components/layout/Layout";
import { yekan } from "@/utils/fonts";
import "./globals.css";
import QueryClientProvider from "@/providers/QueryClientProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";


export const metadata = {
  title: "املاک ",
  description: "سایت خرید و فروش املاک",
  icons: { icon: "./favicon.ico" },
};

export default function RootLayout({ children }:any) {
  return (
    <html lang="fa" dir="rtl">
      <body className={yekan.className}>
      <QueryClientProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        <NextAuthProvider>
          <Layout>{children}</Layout>
        </NextAuthProvider>
            
      </QueryClientProvider>
      </body>
    </html>
  );
}
