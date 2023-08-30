import { FadeInBottom, FadeInLeft, FadeInRight, FadeIn } from '../../scripts/_anims.js'

export default function Pricing() {
	return (
		<>
			<section>
				<div className='container-sm'>
					<FadeIn>
						<h2>Pricing</h2>
					</FadeIn>
					<FadeIn>
						<p className='medium grey'>Adapt or evolve the features you need at any time. No commitment.</p>
					</FadeIn>
				</div>
			</section>
		</>
	)
}
