import { AppProps } from 'next/app'
import Layout from '../components/Layout'

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
	return (
		<Layout title="カラオケ用楽曲管理ツール">
			<Component {...pageProps} />
		</Layout>
	)
}

export default App
