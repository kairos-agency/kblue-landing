import Head from 'next/head'

import HeroHome from '../components/hero/HeroHome'
import LogoGrid from '../components/content/LogoGrid'
import Showcase from '../components/content/Showcase'
import Table from '../components/content/Table'
import LogoScroller from '../components/content/LogoScroller'
import Pricing from '../components/content/Pricing'
import OpenSource from '../components/content/OpenSource'
import Developper from '../components/content/Developper'
import Qna from '../components/content/qna'

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
			<Table />
			<LogoScroller />
			<Pricing />
			{/* <OpenSource /> */}
			{/* <Developper /> */}
			<Qna />
		</>
	)
}
