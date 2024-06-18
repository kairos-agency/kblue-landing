import '../styles/index.scss'

import Content from '../components/Content'

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body>
                <Content>{children}</Content>
            </body>
        </html>
    )
}
