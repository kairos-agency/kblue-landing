import Head from 'next/head'

import HeroHome from '../components/hero/HeroHome'
import LogoGrid from '../components/content/LogoGrid'
import Showcase from '../components/content/Showcase'

export default function Home() {
	return (
		<>
			<Head>
				<title>Kairos Blue | Kairos Agency</title>
				<meta name='description' content='To be written.' />
			</Head>
			<HeroHome />
			<LogoGrid />
			<Showcase />
		</>
	)
}
