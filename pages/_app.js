import "tailwindcss/tailwind.css";
import KokoaProvider from "../services/contexts/KokoaProvider";

function MyApp({ Component, pageProps }) {
  return (
    <KokoaProvider>
      <Component {...pageProps} />
    </KokoaProvider>
  );
}

export default MyApp;
