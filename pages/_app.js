import "../styles/globals.css";
import Footer from "../components/layouts/Footer";
import UserContextProvider from "../contexts/UserContext";

function MyApp({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <Component {...pageProps} />
      <Footer />
    </UserContextProvider>
  );
}

export default MyApp;
