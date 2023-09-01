/* eslint-disable @next/next/no-img-element */

import { useState } from 'react'
import { useSnapshot } from 'valtio'
import { state } from '../../utils/store.js'

export function PricingAccordionMobile() {
	return (
		<>
			<ActivePlan />
		</>
	)
}
function ActivePlan() {
	const snap = useSnapshot(state)
	console.log(snap.plan)
	return snap.plan === 'Basic' ? <Basic /> : snap.plan === 'Kblue' ? <Kblue /> : <Premium />
}

function Basic() {
	const [isShowing, setIsShowing] = useState(false)

	function toggle(e) {
		const element = e.currentTarget.querySelector('.accordion__pulltab')

		element.offsetHeight === 0 ? (element.style.maxHeight = `${element.scrollHeight}px`) : (element.style.maxHeight = 0)
		setIsShowing(!isShowing)
	}
	return (
		<>
			<div className='accordion accordion--pricing accordion--mobile' onClick={toggle}>
				<div className='accordion__title accordion__title--pricing'>
					<div>
						<p>CMS</p>
						<p>Basic</p>
					</div>
					<img src='/images/drop-down.svg' alt='arrow' className={isShowing ? 'rotate' : ''} />
				</div>
				<div className='accordion__pulltab accordion__pulltab--pricing'>
					<div className='pulltab--wrapper'>
						<div>
							<p>Starter web template</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>Text and media customization</p>

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
							<p>Unlimited webpages</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>Blog</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>Advanced web-page template</p>

							<img src='/images/cross.svg' alt='cross' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>Tailor-made web-page template</p>

							<img src='/images/cross.svg' alt='cross' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>Job center</p>

							<img src='/images/cross.svg' alt='cross' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>Events</p>

							<img src='/images/cross.svg' alt='cross' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
				</div>
			</div>
			<div className='accordion accordion--pricing accordion--mobile' onClick={toggle}>
				<div className='accordion__title accordion__title--pricing'>
					<div>
						<p>LMS</p>
						<p>Basic</p>
					</div>
					<img src='/images/drop-down.svg' alt='arrow' className={isShowing ? 'rotate' : ''} />
				</div>
				<div className='accordion__pulltab accordion__pulltab--pricing'>
					<div className='pulltab--wrapper'>
						<div>
							<p>Course</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>Statistics</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>Quiz</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>Solo challenges</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>Team challenges</p>

							<img src='/images/cross.svg' alt='cross' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>Advanced gamification</p>

							<img src='/images/cross.svg' alt='cross' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>Custom game</p>

							<img src='/images/cross.svg' alt='cross' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>Educational engineering</p>

							<img src='/images/cross.svg' alt='cross' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
				</div>
			</div>
			<div className='accordion accordion--pricing accordion--mobile' onClick={toggle}>
				<div className='accordion__title accordion__title--pricing'>
					<div>
						<p>EMS</p>
						<p>Basic</p>
					</div>
					<img src='/images/drop-down.svg' alt='arrow' className={isShowing ? 'rotate' : ''} />
				</div>
				<div className='accordion__pulltab accordion__pulltab--pricing'>
					<div className='pulltab--wrapper'>
						<div>
							<p>User rights</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>Documentary database</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>Q&A</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>Directory</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>Internal messaging</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>Forum</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>After Sale Service</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>Appointment booking</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>Subscription / payment</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>Statistics</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>APIs</p>

							<p>Quotation</p>
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
	return (
		<>
			<div className='accordion accordion--pricing accordion--mobile' onClick={toggle}>
				<div className='accordion__title accordion__title--pricing'>
					<div>
						<p>CMS</p>
						<p>Kblue</p>
					</div>
					<img src='/images/drop-down.svg' alt='arrow' className={isShowing ? 'rotate' : ''} />
				</div>
				<div className='accordion__pulltab accordion__pulltab--pricing'>
					<div className='pulltab--wrapper'>
						<div>
							<p>Starter web template</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>Text and media customization</p>

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
							<p>Unlimited webpages</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>Blog</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>Advanced web-page template</p>

							<img src='/images/cross.svg' alt='cross' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>Tailor-made web-page template</p>

							<img src='/images/cross.svg' alt='cross' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>Job center</p>

							<img src='/images/cross.svg' alt='cross' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>Events</p>

							<img src='/images/cross.svg' alt='cross' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
				</div>
			</div>
			<div className='accordion accordion--pricing accordion--mobile' onClick={toggle}>
				<div className='accordion__title accordion__title--pricing'>
					<div>
						<p>LMS</p>
						<p>Kblue</p>
					</div>
					<img src='/images/drop-down.svg' alt='arrow' className={isShowing ? 'rotate' : ''} />
				</div>
				<div className='accordion__pulltab accordion__pulltab--pricing'>
					<div className='pulltab--wrapper'>
						<div>
							<p>Course</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>Statistics</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>Quiz</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>Solo challenges</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>Team challenges</p>

							<img src='/images/cross.svg' alt='cross' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>Advanced gamification</p>

							<img src='/images/cross.svg' alt='cross' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>Custom game</p>

							<img src='/images/cross.svg' alt='cross' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>Educational engineering</p>

							<img src='/images/cross.svg' alt='cross' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
				</div>
			</div>
			<div className='accordion accordion--pricing accordion--mobile' onClick={toggle}>
				<div className='accordion__title accordion__title--pricing'>
					<div>
						<p>EMS</p>
						<p>Kblue</p>
					</div>
					<img src='/images/drop-down.svg' alt='arrow' className={isShowing ? 'rotate' : ''} />
				</div>
				<div className='accordion__pulltab accordion__pulltab--pricing'>
					<div className='pulltab--wrapper'>
						<div>
							<p>User rights</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>Documentary database</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>Q&A</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>Directory</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>Internal messaging</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>Forum</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>After Sale Service</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>Appointment booking</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>Subscription / payment</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>Statistics</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>APIs</p>

							<p>Quotation</p>
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
	return (
		<>
			<div className='accordion accordion--pricing accordion--mobile' onClick={toggle}>
				<div className='accordion__title accordion__title--pricing'>
					<div>
						<p>CMS</p>
						<p>Premium</p>
					</div>
					<img src='/images/drop-down.svg' alt='arrow' className={isShowing ? 'rotate' : ''} />
				</div>
				<div className='accordion__pulltab accordion__pulltab--pricing'>
					<div className='pulltab--wrapper'>
						<div>
							<p>Starter web template</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>Text and media customization</p>

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
							<p>Unlimited webpages</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>Blog</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>Advanced web-page template</p>

							<img src='/images/cross.svg' alt='cross' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>Tailor-made web-page template</p>

							<img src='/images/cross.svg' alt='cross' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>Job center</p>

							<img src='/images/cross.svg' alt='cross' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>Events</p>

							<img src='/images/cross.svg' alt='cross' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
				</div>
			</div>
			<div className='accordion accordion--pricing accordion--mobile' onClick={toggle}>
				<div className='accordion__title accordion__title--pricing'>
					<div>
						<p>LMS</p>
						<p>Premium</p>
					</div>
					<img src='/images/drop-down.svg' alt='arrow' className={isShowing ? 'rotate' : ''} />
				</div>
				<div className='accordion__pulltab accordion__pulltab--pricing'>
					<div className='pulltab--wrapper'>
						<div>
							<p>Course</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>Statistics</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>Quiz</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>Solo challenges</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>Team challenges</p>

							<img src='/images/cross.svg' alt='cross' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>Advanced gamification</p>

							<img src='/images/cross.svg' alt='cross' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>Custom game</p>

							<img src='/images/cross.svg' alt='cross' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>Educational engineering</p>

							<img src='/images/cross.svg' alt='cross' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
				</div>
			</div>
			<div className='accordion accordion--pricing accordion--mobile' onClick={toggle}>
				<div className='accordion__title accordion__title--pricing'>
					<div>
						<p>EMS</p>
						<p>Premium</p>
					</div>
					<img src='/images/drop-down.svg' alt='arrow' className={isShowing ? 'rotate' : ''} />
				</div>
				<div className='accordion__pulltab accordion__pulltab--pricing'>
					<div className='pulltab--wrapper'>
						<div>
							<p>User rights</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>Documentary database</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>Q&A</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>Directory</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>Internal messaging</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>Forum</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>After Sale Service</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>Appointment booking</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>Subscription / payment</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>Statistics</p>

							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>APIs</p>

							<p>Quotation</p>
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
				</div>
			</div>
		</>
	)
}
