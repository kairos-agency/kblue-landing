import { FadeInBottom, FadeInLeft, FadeInRight, FadeIn } from '../../scripts/_anims.js'

export default function Developper() {
	return (
		<>
			<section>
				<div className='container-sm'>
					<FadeInBottom>
						<p className='overtitle'>Developper ?</p>
					</FadeInBottom>
					<FadeIn>
						<h2>
							Contribure to <span>the project</span>
						</h2>
					</FadeIn>
				</div>
			</section>
		</>
	)
}
