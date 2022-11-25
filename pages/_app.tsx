import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Raleway, Oswald, Titillium_Web } from "@next/font/google";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const raleway = Raleway({
  display: "auto",
  weight: ["200", "300", "400", "600", "700", "900"],
  variable: "--font-raleway",
});

const oswald = Oswald({
  display: "auto",
  weight: ["200", "300", "400", "600", "700"],
  variable: "--font-oswald",
});

const titillium = Titillium_Web({
  display: "auto",
  weight: ["200", "300", "400", "600", "700", "900"],
  variable: "--font-titillium",
});

export default function App({ Component, pageProps }: AppProps) {
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
