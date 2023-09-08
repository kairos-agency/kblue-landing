/* eslint-disable @next/next/no-img-element */
import { FadeInBottom, FadeInLeft, FadeInRight, FadeIn } from '../../scripts/_anims.js'
import React, { useRef, useEffect } from 'react'

import AnimatedText from '../../utils/anims/anims.js'

import { enLogoScroller } from '../../lang/en.js'
import { frLogoScroller } from '../../lang/fr.js'

import { useRouter } from 'next/router.js'

export default function LogoScroller() {
	const content = useRouter().locale === 'en' ? enLogoScroller : frLogoScroller

	return (
		<>
			<section id='APIs'>
				<div className='container-sm'>
					<FadeInBottom>
						<p className='overtitle'>{content.overtitle}</p>
					</FadeInBottom>
					<FadeIn>
						<h2>{content.title}</h2>
					</FadeIn>
					<div>
						<AnimatedText classname='medium grey animated animated_centered' text={content.description} />
					</div>
				</div>
				<InfiniteMarquee images={content.imageUrls} />
				<hr className='marquee-bar' />
			</section>
		</>
	)
}

const InfiniteMarquee = ({ images }) => {
	return (
		<div className='marquee'>
			<div className='marquee__group'>
				{images.map((imageUrl, index) => (
					<img key={index} src={imageUrl} alt={`Logo ${index}`} />
				))}
			</div>
			<div aria-hidden='true' className='marquee__group'>
				{images.map((imageUrl, index) => (
					<img key={index} src={imageUrl} alt={`Logo ${index}`} />
				))}
			</div>
		</div>
	)
}
