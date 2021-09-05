import { ReactNode } from "react"
import Head from "next/head"
import Link from 'next/link'

interface Props {
    children?: ReactNode;
    title?: string;
}

const Layout: React.FC<Props> = ({ children, title = 'default title' }: Props) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <header></header>
            {children}
            <footer>
                <Link href="https://github.com/rrih/managedby-next">
                    <a>github</a>
                </Link>
            </footer>
        </div>
    )
}

export default Layout