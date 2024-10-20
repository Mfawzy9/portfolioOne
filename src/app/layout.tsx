import type { Metadata } from "next";
import "./globals.css";
import dynamic from "next/dynamic";
import { cookies } from "next/headers";
import ColorsContextProvider from "./Context/ColorContext/ColorsContext";
import App from "./App";
import { leagueSpartan, poppins, raleway } from "./fonts";
import LoaderContextProvider from "./Context/LoaderContext/LoaderContext";

const ModeProvider = dynamic(
  () => import("./Context/ModeContext/ModeProvider"),
  {
    ssr: false,
  },
);

export const metadata: Metadata = {
  applicationName: "Mahmoud Fawzy Portfolio",
  title: "Portfolio | Mahmoud Fawzy",
  description: "Everything about Mahmoud Fawzy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = cookies().get("__theme__")?.value || "system";

  return (
    <html
      lang="en"
      className={`${raleway.variable} ${leagueSpartan.variable} ${poppins.variable} ${theme}`}
      style={theme !== "system" ? { colorScheme: theme } : {}}
      suppressHydrationWarning
    >
      <body
        className="bg-gray-300 text-black dark:bg-black dark:text-white overflow-x-hidden
          overflow-hidden"
      >
        <LoaderContextProvider>
          <ModeProvider>
            <ColorsContextProvider>
              <App>{children}</App>
            </ColorsContextProvider>
          </ModeProvider>
        </LoaderContextProvider>
      </body>
    </html>
  );
}
