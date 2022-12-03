import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Raleway, Oswald, Titillium_Web } from "@next/font/google";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "../services/i18n";
import { useRouter } from "next/router";
import i18n from "../services/i18n";

const raleway = Raleway({
  display: "swap",
  weight: ["200", "300", "400", "600", "700", "900"],
  variable: "--font-raleway",
});

const oswald = Oswald({
  display: "swap",
  weight: ["200", "300", "400", "600", "700"],
  variable: "--font-oswald",
});

const titillium = Titillium_Web({
  display: "swap",
  weight: ["200", "300", "400", "600", "700", "900"],
  variable: "--font-titillium",
});

export default function App({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();
  i18n.changeLanguage(locale);

  return (
    <div className={`${raleway.variable} ${oswald.variable} ${titillium.variable} font-sans`}>
      <Component {...pageProps} />
      <ToastContainer
        position="bottom-right"
        bodyClassName="bg-stone-800 text-neutral-100"
        toastClassName="!bg-stone-800 !rounded-lg"
        autoClose={false}
      />
    </div>
  );
}
