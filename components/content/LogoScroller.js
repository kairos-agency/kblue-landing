import { FadeInBottom, FadeInLeft, FadeInRight, FadeIn } from '../../scripts/_anims.js'

export default function LogoScroller() {
	return (
		<>
			<section>
				<div className='container-sm'>
					<FadeInBottom>
						<p className='overtitle'>Get help from the best</p>
					</FadeInBottom>
					<FadeIn>
						<h2>We use APIs</h2>
					</FadeIn>
					<FadeIn>
						<p className='medium grey'>
							The software interface that allows you to "connect" Kairos Blue to another software or service in order to
							exchange data and functionalities
						</p>
					</FadeIn>
					<hr />
				</div>
			</section>
		</>
	)
}
