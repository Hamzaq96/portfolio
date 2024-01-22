// A template for all the pages.
import { Header, Footer } from "./index";

export const Layout = ({ children }: any) => {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    ); 
};