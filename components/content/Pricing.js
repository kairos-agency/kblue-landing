/* eslint-disable @next/next/no-img-element */
import Link from 'next/link.js'
import { FadeInBottom, FadeInLeft, FadeInRight, FadeIn } from '../../scripts/_anims.js'
import { useState } from 'react'
import { PricingAccordionMobile } from '../../utils/components/pricingMobile.js'

import { state } from '../../utils/store.js'
import { useSnapshot } from 'valtio'

export default function Pricing() {
	const snap = useSnapshot(state)
	return (
		<>
			<section id='Pricing'>
				<div className='container'>
					<FadeIn>
						<h2>Pricing</h2>
					</FadeIn>
					<FadeIn>
						<p className='medium grey'>Adapt or evolve the features you need at any time. No commitment.</p>
					</FadeIn>
					<div className='tuto'>
						<div className='cards'>
							<FadeInLeft>
								<div className='card'>
									<p>1</p>
									<p>Pick a starter plan : Basic, Kblue or Premium</p>
								</div>
							</FadeInLeft>
							<FadeInLeft>
								<div className='card'>
									<p>2</p>
									<p>Add on-demand tailor-made features </p>
								</div>
							</FadeInLeft>
						</div>
					</div>
				</div>
				<div className='container-xl'>
					<div className='pricing'>
						<div className='cards'>
							<div
								onClick={() => {
									state.plan = 'Basic'
								}}
								className={snap.plan === 'Basic' ? 'card active' : 'card'}
							>
								<div className='card__title'>
									<img src='/images/stack-basic.svg' alt='Basic' />
									<h3>Basic</h3>
								</div>
								<div className='card__content'>
									<div>
										<img src='/images/checkmark.svg' alt='check' />
										<p className='small blue--light'>
											Accesio estis sunt <strong>et planea</strong>
										</p>
									</div>
									<div>
										<img src='/images/checkmark.svg' alt='check' />
										<p className='small blue--light'>
											Moltes <strong>planetarum</strong> actis
										</p>
									</div>
									<div>
										<img src='/images/checkmark.svg' alt='check' />
										<p className='small blue--light'>Intelo et factis et dasilania</p>
									</div>
								</div>
								<div className='card__price'>
									<Link href='/' className='btn btn-primary btn-outline'>
										Subscribe
									</Link>
									<p className='blue--light'>300$ install fee then 45$/m</p>
								</div>
							</div>
							<div
								onClick={() => {
									state.plan = 'Kblue'
								}}
								className={snap.plan === 'Kblue' ? 'card active' : 'card'}
							>
								<div className='card__title'>
									<div className='title'>
										<img src='/images/stack-kblue.svg' alt='Kblue' />
										<h3>Kblue</h3>
									</div>
									<div className='badge'>
										<p>Most popular</p>
									</div>
								</div>
								<div className='card__content'>
									<div>
										<img src='/images/checkmark.svg' alt='check' />
										<p className='small blue--light'>
											Accesio estis sunt <strong>et planea</strong>
										</p>
									</div>
									<div>
										<img src='/images/checkmark.svg' alt='check' />
										<p className='small blue--light'>
											Moltes <strong>planetarum</strong> actis
										</p>
									</div>
									<div>
										<img src='/images/checkmark.svg' alt='check' />
										<p className='small blue--light'>Intelo et factis et dasilania</p>
									</div>
								</div>
								<div className='card__price'>
									<Link href='/' className='btn btn-primary'>
										Subscribe
									</Link>
									<p className='blue--light'>2000$ install fee then 110$/m</p>
								</div>
							</div>
							<div
								onClick={() => {
									state.plan = 'Premium'
								}}
								className={snap.plan === 'Premium' ? 'card active' : 'card '}
							>
								<div className='card__title'>
									<img src='/images/stack-premium.svg' alt='Premium' />
									<h3>Premium</h3>
								</div>
								<div className='card__content'>
									<div>
										<img src='/images/checkmark.svg' alt='check' />
										<p className='small blue--light'>
											Accesio estis sunt <strong>et planea</strong>
										</p>
									</div>
									<div>
										<img src='/images/checkmark.svg' alt='check' />
										<p className='small blue--light'>
											Moltes <strong>planetarum</strong> actis
										</p>
									</div>
									<div>
										<img src='/images/checkmark.svg' alt='check' />
										<p className='small blue--light'>Intelo et factis et dasilania</p>
									</div>
								</div>
								<div className='card__price'>
									<Link href='/' className='btn btn-primary btn-outline'>
										Subscribe
									</Link>
									<p className='blue--light'>2500$ install fee then 190$/m</p>
								</div>
							</div>
						</div>
					</div>
					<div className='container'>
						<p className='grey medium'>Compare features</p>
						<PricingAccordion />
						<PricingAccordionMobile />
					</div>
				</div>
			</section>
		</>
	)
}

function PricingAccordion() {
	const [isShowing, setIsShowing] = useState(false)

	function toggle(e) {
		const element = e.currentTarget.querySelector('.accordion__pulltab')

		element.offsetHeight === 0 ? (element.style.maxHeight = `${element.scrollHeight}px`) : (element.style.maxHeight = 0)
		setIsShowing(!isShowing)
	}

	return (
		<>
			<div className='accordion accordion--pricing' onClick={toggle}>
				<div className='accordion__title accordion__title--pricing'>
					<div>
						<p>CMS</p>
						<p>Basic</p>
						<p>Kblue</p>
						<p>Premium</p>
					</div>
					<img src='/images/drop-down.svg' alt='arrow' className={isShowing ? 'rotate' : ''} />
				</div>
				<div className='accordion__pulltab accordion__pulltab--pricing' style={{ maxHeight: `591px` }}>
					<div className='pulltab--wrapper'>
						<div>
							<p>Starter web template</p>

							<img src='/images/checkmark.svg' alt='check' />
							<img src='/images/checkmark.svg' alt='check' />
							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>Text and media customization</p>

							<img src='/images/checkmark.svg' alt='check' />
							<img src='/images/checkmark.svg' alt='check' />
							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>SEO</p>

							<img src='/images/checkmark.svg' alt='check' />
							<img src='/images/checkmark.svg' alt='check' />
							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>Unlimited webpages</p>

							<img src='/images/checkmark.svg' alt='check' />
							<img src='/images/checkmark.svg' alt='check' />
							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>Blog</p>

							<img src='/images/checkmark.svg' alt='check' />
							<img src='/images/checkmark.svg' alt='check' />
							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>Advanced web-page template</p>

							<img src='/images/checkmark.svg' alt='check' className='hidden' />
							<img src='/images/checkmark.svg' alt='check' />
							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>Tailor-made web-page template</p>

							<img src='/images/checkmark.svg' alt='check' className='hidden' />
							<img src='/images/checkmark.svg' alt='check' className='hidden' />
							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>Job center</p>

							<img src='/images/checkmark.svg' alt='check' className='hidden' />
							<img src='/images/checkmark.svg' alt='check' className='hidden' />
							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>Events</p>

							<img src='/images/checkmark.svg' alt='check' className='hidden' />
							<img src='/images/checkmark.svg' alt='check' className='hidden' />
							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
				</div>
			</div>
			<div className='accordion accordion--pricing' onClick={toggle}>
				<div className='accordion__title accordion__title--pricing'>
					<div>
						<p>LMS</p>
						<p>Basic</p>
						<p>Kblue</p>
						<p>Premium</p>
					</div>
					<img src='/images/drop-down.svg' alt='arrow' className={isShowing ? 'rotate' : ''} />
				</div>
				<div className='accordion__pulltab accordion__pulltab--pricing'>
					<div className='pulltab--wrapper'>
						<div>
							<p>Course</p>

							<img src='/images/checkmark.svg' alt='check' />
							<img src='/images/checkmark.svg' alt='check' />
							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>Statistics</p>

							<img src='/images/checkmark.svg' alt='check' />
							<img src='/images/checkmark.svg' alt='check' />
							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>Quiz</p>

							<img src='/images/checkmark.svg' alt='check' />
							<img src='/images/checkmark.svg' alt='check' />
							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>Solo challenges</p>

							<img src='/images/checkmark.svg' alt='check' className='hidden' />
							<img src='/images/checkmark.svg' alt='check' />
							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>Team challenges</p>

							<img src='/images/checkmark.svg' alt='check' className='hidden' />
							<img src='/images/checkmark.svg' alt='check' className='hidden' />
							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>Advanced gamification</p>

							<img src='/images/checkmark.svg' alt='check' className='hidden' />
							<img src='/images/checkmark.svg' alt='check' className='hidden' />
							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>Custom game</p>

							<img src='/images/checkmark.svg' alt='check' className='hidden' />
							<img src='/images/checkmark.svg' alt='check' className='hidden' />
							<p>Quotation</p>
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>Educational engineering</p>

							<img src='/images/checkmark.svg' alt='check' className='hidden' />
							<img src='/images/checkmark.svg' alt='check' className='hidden' />
							<p>Quotation</p>
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
				</div>
			</div>
			<div className='accordion accordion--pricing last' onClick={toggle}>
				<div className='accordion__title accordion__title--pricing'>
					<div>
						<p>EMS</p>
						<p>Basic</p>
						<p>Kblue</p>
						<p>Premium</p>
					</div>
					<img src='/images/drop-down.svg' alt='arrow' className={isShowing ? 'rotate' : ''} />
				</div>
				<div className='accordion__pulltab accordion__pulltab--pricing'>
					<div className='pulltab--wrapper'>
						<div>
							<p>User rights</p>

							<img src='/images/checkmark.svg' alt='check' />
							<img src='/images/checkmark.svg' alt='check' />
							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>Documentary database</p>

							<img src='/images/checkmark.svg' alt='check' />
							<img src='/images/checkmark.svg' alt='check' />
							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>Q&A</p>

							<img src='/images/checkmark.svg' alt='check' />
							<img src='/images/checkmark.svg' alt='check' />
							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>Directory</p>

							<img src='/images/checkmark.svg' alt='check' />
							<img src='/images/checkmark.svg' alt='check' />
							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>Internal messaging</p>

							<img src='/images/checkmark.svg' alt='check' className='hidden' />
							<img src='/images/checkmark.svg' alt='check' />
							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>Forum</p>

							<img src='/images/checkmark.svg' alt='check' className='hidden' />
							<img src='/images/checkmark.svg' alt='check' />
							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>After Sale Service</p>

							<img src='/images/checkmark.svg' alt='check' className='hidden' />
							<img src='/images/checkmark.svg' alt='check' />
							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>Appointment booking</p>

							<img src='/images/checkmark.svg' alt='check' className='hidden' />
							<img src='/images/checkmark.svg' alt='check' />
							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>Subscription / payment</p>

							<img src='/images/checkmark.svg' alt='check' className='hidden' />
							<img src='/images/checkmark.svg' alt='check' />
							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>Statistics</p>

							<img src='/images/checkmark.svg' alt='check' className='hidden' />
							<img src='/images/checkmark.svg' alt='check' className='hidden' />
							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>APIs</p>

							<img src='/images/checkmark.svg' alt='check' className='hidden' />
							<img src='/images/checkmark.svg' alt='check' className='hidden' />
							<p>Quotation</p>
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
				</div>
			</div>
		</>
	)
}
