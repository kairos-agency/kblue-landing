/* eslint-disable @next/next/no-img-element */
import { FadeInBottom, FadeInLeft, FadeInRight, FadeIn } from '../../scripts/_anims.js'
import React, { useRef, useEffect } from 'react'

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
					<FadeIn>
						<p className='medium grey'>
							The software interface that allows you to "connect" Kairos Blue to another software or service in order to
							exchange data and functionalities
						</p>
					</FadeIn>
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
