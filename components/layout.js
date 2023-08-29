import Nav from './nav/Nav'
import Footer from './footer/Footer'
import { ReactLenis } from '@studio-freight/react-lenis'

export default function Layout({ children }) {
	return (
		<ReactLenis root>
			<div>
				<Nav />
				<main>{children}</main>
				<Footer />
			</div>
		</ReactLenis>
	)
}
