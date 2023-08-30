import { FadeInBottom, FadeInLeft, FadeInRight, FadeIn } from '../../scripts/_anims.js'

export default function LogoScroller() {
	return (
		<>
			<section>
				<div className='container-sm'>
					<FadeInBottom>
						<p className='overtitle'>It's all</p>
					</FadeInBottom>
					<FadeIn>
						<h2>Open Source</h2>
					</FadeIn>
					<FadeIn>
						<p className='medium grey'>
							Because we believe that together we go further, we have decided to open source the basic version of Kairos
							Blue. More than just a methodology, our philosophy embraces freedom, collaboration and innovation.
						</p>
					</FadeIn>
					<hr />
				</div>
			</section>
		</>
	)
}
