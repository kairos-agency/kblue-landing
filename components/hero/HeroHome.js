import { FadeInBottom, FadeInLeft, FadeInRight, FadeIn } from '../../scripts/_anims.js'
import App from '../three/Model.jsx'

export default function HeroHome() {
	return (
		<>
			<header className='hero'>
				<section>
					<div className='container-sm'>
						<FadeInBottom>
							<div>
								<h1>
									The all-in-one <span>backoffice</span>
								</h1>
								<p className='medium'>One place to manage all of your business content, one login portal.</p>
							</div>
						</FadeInBottom>
					</div>
					{/* <div className='three'>
						<App />
					</div> */}
				</section>
			</header>
		</>
	)
}
