import Layout from "@/components/layout/index/layout";
import { StyledEngineProvider } from "@mui/material";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <StyledEngineProvider injectFirst>
          <Layout>{children}</Layout>
        </StyledEngineProvider>
      </body>
    </html>
  );
}
