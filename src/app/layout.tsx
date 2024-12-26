import Layout from "@/components/layout/index/layout";
import { CssBaseline } from "@mui/material";
import { Suspense } from "react";
import Rtl from "../../theme/Rtl";
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
      <Suspense fallback={"loading..."}>
        <Rtl>
          <body>
            <CssBaseline />
            {/* <StyledEngineProvider injectFirst> */}
            <Layout>{children}</Layout>
            {/* </StyledEngineProvider> */}
          </body>
        </Rtl>
      </Suspense>
    </html>
  );
}
