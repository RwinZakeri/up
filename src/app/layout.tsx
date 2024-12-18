import Layout from "@/components/layout/index/layout";
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
      <Rtl>
        <body>
          {/* <StyledEngineProvider injectFirst> */}
          <Layout>{children}</Layout>
          {/* </StyledEngineProvider> */}
        </body>
      </Rtl>
    </html>
  );
}
