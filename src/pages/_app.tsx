import { AppProps } from "next/app";
import Layout from "../components/Layout";

const App: React.FC<AppProps> = ({ Component, pageProps}: AppProps) => {
    return (
        <Layout title="カラオケ用楽曲管理ツール">
            <Component {...pageProps} />
            <style jsx global>{`
                body {
                    background-color: #22272e;
                    color: #cdd9e5;
                }
                a {
                    color: #adbac7;
                }
            `}</style>
        </Layout>
    )
}

export default App