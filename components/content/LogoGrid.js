/* eslint-disable @next/next/no-img-element */
import { FadeInBottom, FadeInLeft, FadeInRight, FadeIn } from '../../scripts/_anims.js'

export default function LogoGrid() {
	return (
		<>
			<section className='logo_grid'>
				<div className='container-xs'>
					<hr />
					<FadeIn>
						<div className='grid'>
							<img src='/images/ffbad-logo.svg' alt='logo FFBAD' />
							<img src='/images/wenow-logo.svg' alt='hero' />
							<img src='/images/pacte-mondiale-onu-logo.svg' alt='hero' />
							<img src='/images/msrh-logo.svg' alt='hero' />
						</div>
					</FadeIn>
				</div>
			</section>
		</>
	)
}
