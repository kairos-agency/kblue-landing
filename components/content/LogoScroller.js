/* eslint-disable @next/next/no-img-element */
import { FadeInBottom, FadeInLeft, FadeInRight, FadeIn } from '../../scripts/_anims.js'
import React, { useRef, useEffect } from 'react'

import AnimatedText from '../../utils/anims/anims.js'

export default function LogoScroller() {
	const imageUrls = [
		'/images/marquee/nextcloud.svg',
		'/images/marquee/sharepoint.svg',
		'/images/marquee/zendesk.svg',
		'/images/marquee/aircall.svg',
		'/images/marquee/salesforce.svg',
		'/images/marquee/hubspot.svg',
		'/images/marquee/googledrive.svg',
		'/images/marquee/slack.svg',
		'/images/marquee/discord.svg'
	]
	return (
		<>
			<section id='APIs'>
				<div className='container-sm'>
					<FadeInBottom>
						<p className='overtitle'>Get help from the best</p>
					</FadeInBottom>
					<FadeIn>
						<h2>We use APIs</h2>
					</FadeIn>
					<div>
						<AnimatedText
							classname='medium grey animated animated_centered'
							text={
								'The software interface that allows you to "connect" Kairos Blue to another software or service in order to exchange data and functionalities'
							}
						/>
					</div>
				</div>
				<InfiniteMarquee images={imageUrls} />
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
