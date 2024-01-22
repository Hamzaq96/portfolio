// import "src/app/global.css";
// import "@/app/global.css";
import "@/main.scss";
import { Layout } from "@/layout";

export const App = ({ Component, pageProps }: any) => {
    return (
        <>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}

export default App;