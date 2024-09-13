// import localFont from 'next/font/local'
import '../styles/index.scss'
// const myFont = localFont({
//     src: './my-font.woff2',
//     display: 'swap',
// })

import Content from '../components/Content'

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body suppressHydrationWarning>
                <Content>{children}</Content>
            </body>
        </html>
    )
}
