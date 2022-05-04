import "../styles/globals.scss";
import { useEffect, Fragment } from "react";
import NProgress from "nprogress";
import Router from "next/router";
import Header from "../components/header";
import Footer from "../components/simple-footer";
import SiteNav from "../components/nav-menu";
import ContactModal from "components/contact-modal";
import { ThemeProvider } from "@material-ui/core/styles";
import { MenuProvider } from "components/menu-drawer/MenuContext";
import { ModalProvider } from "components/contact-modal/ModalContext";
import MenuDrawer from "components/menu-drawer/MenuDrawer";
import theme from "styles/theme";


// Progress bar to be displayed on page transition.
NProgress.configure({ showSpinner: false });
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const App = ({ Component, pageProps }) => {
  // IMPORTANT: 
  // Removes server-side styles for Material-UI to prevent flickering.
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);


  return (
    <Fragment>
      <MenuProvider>
        <ModalProvider>
          <ThemeProvider theme={theme}>
            <ContactModal />
            <MenuDrawer />
            <Header
              siteNav={
                <SiteNav
                  routes={[
                    { name: "Bio", path: "/bio" },
                    { name: "Projects", path: "/projects" },
                    { name: "Writing", path: "/writing" },
                  ]}
                />
                }
            />
            <Component {...pageProps} />
            <Footer copyright="Garrett Jester" />
          </ThemeProvider>
        </ModalProvider>
      </MenuProvider>
    </Fragment>
  );
};
export default App;
