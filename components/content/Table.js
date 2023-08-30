import { FadeInBottom, FadeInLeft, FadeInRight, FadeIn } from '../../scripts/_anims.js'

export default function Table() {
	return (
		<>
			<section>
				<div className='container-sm'>
					<FadeIn>
						<h2>
							Outside the <span>norm</span>
						</h2>
					</FadeIn>
					<FadeIn>
						<p className='medium grey'>
							Discover the secret to unparalleled content management with Kairos blue! Our revolutionary platform
							skillfully combines a content management system (CMS), a learning management system (LMS) and an
							enterprise data management system (EMS).
						</p>
					</FadeIn>
				</div>
			</section>
		</>
	)
}
