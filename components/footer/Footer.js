import Link from 'next/link'

export default function Footer() {
	return (
		<>
			<footer>
				<div className='container'>
					<div className='footer_top'>
						<p>Kairos Blue, An ocean of simplicity to contain your waves of data.</p>
					</div>
					<hr />
					<div className='footer_bottom'>
						<Link href='/'>
							<img src='/images/kairos-blue-logo-white.svg' alt='Logo Kairos Blue' />
						</Link>
						<p>Kairos blue, a software edited with love by Kairos Agency</p>
						<div>
							<Link href='/'>Legal</Link>
							<Link href='/'>Contact</Link>
						</div>
					</div>
				</div>
			</footer>
		</>
	)
}
