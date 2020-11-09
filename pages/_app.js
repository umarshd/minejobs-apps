import "../styles/globals.css";
import Footer from "../components/layouts/Footer";
import UserContextProvider from "../contexts/UserContext";
import CompanyContextProvider from "../contexts/CompanyContext";

function MyApp({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <CompanyContextProvider>
        <Component {...pageProps} />
        <Footer />
      </CompanyContextProvider>
    </UserContextProvider>
  );
}

export default MyApp;
