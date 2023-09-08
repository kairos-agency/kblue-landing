/* eslint-disable @next/next/no-img-element */

import { useState } from 'react'
import { useSnapshot } from 'valtio'
import { state } from '../../utils/store.js'

import { useRouter } from 'next/router.js'

import { enPricing } from '../../lang/en.js'
import { frPricing } from '../../lang/fr.js'

export function PricingAccordionMobile() {
	return (
		<>
			<ActivePlan />
		</>
	)
}
function ActivePlan() {
	const snap = useSnapshot(state)

	return snap.plan === 'Basic' ? <Basic /> : snap.plan === 'Kblue' ? <Kblue /> : <Premium />
}

function Basic() {
	const [isShowing, setIsShowing] = useState(false)

	function toggle(e) {
		const element = e.currentTarget.querySelector('.accordion__pulltab')

		element.offsetHeight === 0 ? (element.style.maxHeight = `${element.scrollHeight}px`) : (element.style.maxHeight = 0)
		setIsShowing(!isShowing)
	}

	const content = useRouter().locale === 'en' ? enPricing : frPricing

	return (
		<>
			<div className='accordion accordion--pricing accordion--mobile' onClick={toggle}>
				<div className='accordion__title accordion__title--pricing'>
					<div>
						<p>{content.cms.title}</p>
						<p>{content.cms.basic}</p>
					</div>
					<img src='/images/drop-down.svg' alt='arrow' className={isShowing ? 'rotate' : ''} />
				</div>
				<div className='accordion__pulltab accordion__pulltab--pricing'>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.cms.line1}</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.cms.line2}</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>SEO</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.cms.line4}</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.cms.line5}</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.cms.line6}</p>

							<img src='/images/cross.svg' alt='cross' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.cms.line7}</p>

							<img src='/images/cross.svg' alt='cross' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.cms.line8}</p>

							<img src='/images/cross.svg' alt='cross' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.cms.line9}</p>

							<img src='/images/cross.svg' alt='cross' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
				</div>
			</div>
			<div className='accordion accordion--pricing accordion--mobile' onClick={toggle}>
				<div className='accordion__title accordion__title--pricing'>
					<div>
						<p>{content.lms.title}</p>
						<p>{content.lms.basic}</p>
					</div>
					<img src='/images/drop-down.svg' alt='arrow' className={isShowing ? 'rotate' : ''} />
				</div>
				<div className='accordion__pulltab accordion__pulltab--pricing'>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.lms.line1}</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.lms.line2}</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.lms.line3}</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.lms.line4}</p>

							<img src='/images/cross.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.lms.line5}</p>

							<img src='/images/cross.svg' alt='cross' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.lms.line6}</p>

							<img src='/images/cross.svg' alt='cross' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.lms.line7}</p>

							<img src='/images/cross.svg' alt='cross' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.lms.line8}</p>

							<img src='/images/cross.svg' alt='cross' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
				</div>
			</div>
			<div className='accordion accordion--pricing accordion--mobile' onClick={toggle}>
				<div className='accordion__title accordion__title--pricing'>
					<div>
						<p>{content.ems.title}</p>
						<p>{content.ems.basic}</p>
					</div>
					<img src='/images/drop-down.svg' alt='arrow' className={isShowing ? 'rotate' : ''} />
				</div>
				<div className='accordion__pulltab accordion__pulltab--pricing'>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.ems.line1}</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.ems.line2}</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.ems.line3}</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.ems.line4}</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.ems.line5}</p>

							<img src='/images/cross.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.ems.line6}</p>

							<img src='/images/cross.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.ems.line7}</p>

							<img src='/images/cross.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.ems.line8}</p>

							<img src='/images/cross.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.ems.line9}</p>

							<img src='/images/cross.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.ems.line10}</p>

							<img src='/images/cross.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.ems.line11}</p>

							<img src='/images/cross.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
				</div>
			</div>
		</>
	)
}

function Kblue() {
	const [isShowing, setIsShowing] = useState(false)

	function toggle(e) {
		const element = e.currentTarget.querySelector('.accordion__pulltab')

		element.offsetHeight === 0 ? (element.style.maxHeight = `${element.scrollHeight}px`) : (element.style.maxHeight = 0)
		setIsShowing(!isShowing)
	}

	const content = useRouter().locale === 'en' ? enPricing : frPricing
	return (
		<>
			<div className='accordion accordion--pricing accordion--mobile' onClick={toggle}>
				<div className='accordion__title accordion__title--pricing'>
					<div>
						<p>{content.cms.title}</p>
						<p>{content.cms.kblue}</p>
					</div>
					<img src='/images/drop-down.svg' alt='arrow' className={isShowing ? 'rotate' : ''} />
				</div>
				<div className='accordion__pulltab accordion__pulltab--pricing'>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.cms.line1}</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.cms.line2}</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.cms.line3}</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.cms.line4}</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.cms.line5}</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.cms.line6}</p>

							<img src='/images/checkmark.svg' alt='cross' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.cms.line7}</p>

							<img src='/images/cross.svg' alt='cross' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.cms.line8}</p>

							<img src='/images/cross.svg' alt='cross' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.cms.line9}</p>

							<img src='/images/cross.svg' alt='cross' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
				</div>
			</div>
			<div className='accordion accordion--pricing accordion--mobile' onClick={toggle}>
				<div className='accordion__title accordion__title--pricing'>
					<div>
						<p>{content.lms.title}</p>
						<p>{content.lms.kblue}</p>
					</div>
					<img src='/images/drop-down.svg' alt='arrow' className={isShowing ? 'rotate' : ''} />
				</div>
				<div className='accordion__pulltab accordion__pulltab--pricing'>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.lms.line1}</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.lms.line2}</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.lms.line3}</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.lms.line4}</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.lms.line5}</p>

							<img src='/images/cross.svg' alt='cross' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.lms.line6}</p>

							<img src='/images/cross.svg' alt='cross' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.lms.line7}</p>

							<img src='/images/cross.svg' alt='cross' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.lms.line8}</p>

							<img src='/images/cross.svg' alt='cross' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
				</div>
			</div>
			<div className='accordion accordion--pricing accordion--mobile' onClick={toggle}>
				<div className='accordion__title accordion__title--pricing'>
					<div>
						<p>{content.ems.title}</p>
						<p>{content.ems.kblue}</p>
					</div>
					<img src='/images/drop-down.svg' alt='arrow' className={isShowing ? 'rotate' : ''} />
				</div>
				<div className='accordion__pulltab accordion__pulltab--pricing'>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.ems.line1}</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.ems.line2}</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.ems.line3}</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.ems.line4}</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.ems.line5}</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.ems.line6}</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.ems.line7}</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.ems.line8}</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.ems.line9}</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.ems.line10}</p>

							<img src='/images/cross.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.ems.line11}</p>

							<img src='/images/cross.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
				</div>
			</div>
		</>
	)
}

function Premium() {
	const [isShowing, setIsShowing] = useState(false)

	function toggle(e) {
		const element = e.currentTarget.querySelector('.accordion__pulltab')

		element.offsetHeight === 0 ? (element.style.maxHeight = `${element.scrollHeight}px`) : (element.style.maxHeight = 0)
		setIsShowing(!isShowing)
	}

	const content = useRouter().locale === 'en' ? enPricing : frPricing
	return (
		<>
			<div className='accordion accordion--pricing accordion--mobile' onClick={toggle}>
				<div className='accordion__title accordion__title--pricing'>
					<div>
						<p>{content.cms.title}</p>
						<p>{content.cms.premium}</p>
					</div>
					<img src='/images/drop-down.svg' alt='arrow' className={isShowing ? 'rotate' : ''} />
				</div>
				<div className='accordion__pulltab accordion__pulltab--pricing'>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.cms.line1}</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.cms.line2}</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.cms.line3}</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.cms.line4}</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.cms.line5}</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.cms.line6}</p>

							<img src='/images/checkmark.svg' alt='checkmark' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.cms.line7}</p>

							<img src='/images/checkmark.svg' alt='checkmark' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.cms.line8}</p>

							<img src='/images/checkmark.svg' alt='checkmark' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.cms.line9}</p>

							<img src='/images/checkmark.svg' alt='checkmark' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
				</div>
			</div>
			<div className='accordion accordion--pricing accordion--mobile' onClick={toggle}>
				<div className='accordion__title accordion__title--pricing'>
					<div>
						<p>{content.lms.title}</p>
						<p>{content.lms.premium}</p>
					</div>
					<img src='/images/drop-down.svg' alt='arrow' className={isShowing ? 'rotate' : ''} />
				</div>
				<div className='accordion__pulltab accordion__pulltab--pricing'>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.lms.line1}</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.lms.line2}</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.lms.line3}</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.lms.line4}</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.lms.line5}</p>

							<img src='/images/checkmark.svg' alt='checkmark' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.lms.line6}</p>

							<img src='/images/checkmark.svg' alt='checkmark' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.lms.line7}</p>

							<p>{content.quote}</p>
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.lms.line8}</p>

							<p>{content.quote}</p>
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
				</div>
			</div>
			<div className='accordion accordion--pricing accordion--mobile' onClick={toggle}>
				<div className='accordion__title accordion__title--pricing'>
					<div>
						<p>{content.ems.title}</p>
						<p>{content.ems.premium}</p>
					</div>
					<img src='/images/drop-down.svg' alt='arrow' className={isShowing ? 'rotate' : ''} />
				</div>
				<div className='accordion__pulltab accordion__pulltab--pricing'>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.ems.line1}</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.ems.line2}</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.ems.line3}</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.ems.line4}</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.ems.line5}</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.ems.line6}</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.ems.line7}</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.ems.line8}</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.ems.line9}</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.ems.line10}</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.ems.line11}</p>

							<p>{content.quote}</p>
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
				</div>
			</div>
		</>
	)
}
