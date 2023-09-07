/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import Form from '../content/Form'

export default function Footer() {
	return (
		<>
			<footer>
				<div className='container'>
					<div>
						<img src='images/kairos-blue-logo.svg' alt='Kairos Blue logo' />
						<div className='footer_top'>
							<h2>
								Kairos Blue, An ocean of simplicity to contain <span>your waves of data.</span>
							</h2>
						</div>
						<hr />
						<div className='footer_bottom'>
							<div>
								<Link href='/legal'>Legal</Link>
								<Link href='/'>Contact</Link>
							</div>
						</div>
					</div>
					<Form />
				</div>
				<div className='bottom'>
					<p className='small light-grey'>Kairos blue, a software edited with love by Kairos Agency</p>
				</div>
			</footer>
		</>
	)
}
