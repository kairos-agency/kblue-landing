/* eslint-disable @next/next/no-img-element */
import Link from 'next/link.js'
import { FadeInBottom, FadeInLeft, FadeInRight, FadeIn } from '../../scripts/_anims.js'
import { useState } from 'react'
import { PricingAccordionMobile } from './pricingMobile.js'

import { state } from '../../utils/store.js'
import { useSnapshot } from 'valtio'

import AnimatedText from '../../utils/anims/anims.js'

import { useRouter } from 'next/router.js'

import { enPricing } from '../../lang/en.js'
import { frPricing } from '../../lang/fr.js'

export default function Pricing() {
	const content = useRouter().locale === 'en' ? enPricing : frPricing

	const snap = useSnapshot(state)
	return (
		<>
			<section id='Pricing'>
				<div className='container'>
					<FadeIn>
						<h2>{content.title}</h2>
					</FadeIn>

					<div>
						<AnimatedText classname={'medium grey animated animated_centered'} text={content.description} />
					</div>
					<div className='tuto'>
						<div className='cards'>
							<FadeInLeft>
								<div className='card'>
									<p>1</p>
									<p>{content.tuto1}</p>
								</div>
							</FadeInLeft>
							<FadeInLeft>
								<div className='card'>
									<p>2</p>
									<p>{content.tuto2}</p>
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
									<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 18'>
										<g fill='#000' stroke='#000' strokeWidth='.5'>
											<path d='M12.2886 12.8262c-.0752 0-.1496-.0174-.219-.0513L1.34416 7.51885c-.10209-.05056-.18915-.13494-.25034-.24265-.06119-.10771-.093821-.23399-.093821-.36311 0-.12913.032631-.25541.093821-.36311.06119-.10771.14825-.1921.25034-.24266L12.0696 1.05125C12.139 1.01742 12.2134 1 12.2886 1c.0752 0 .1497.01742.2191.05125l10.7254 5.25608c.1021.05056.1891.13494.2503.24265.0612.10771.0939.23399.0939.36311 0 .12913-.0327.2554-.0939.36311-.0612.10771-.1482.1921-.2503.24266L12.5077 12.7749c-.0694.0339-.1439.0513-.2191.0513ZM3.01733 6.91309l9.27127 4.54261 9.2713-4.54261-9.2713-4.54256-9.27127 4.54256Z' />
											<path d='M12.2886 17.1266c-.0752 0-.1496-.0171-.219-.0503l-10.724-5.1604c-.13801-.0663-.24731-.1927-.30383-.3511-.02799-.0785-.042179-.1625-.04176-.2472.00042-.0848.01543-.1686.04419-.2467s.0707-.1489.12342-.2085c.05272-.0596.1152-.1067.18386-.1387.13866-.0646.2941-.0636.43212.0028l10.505 5.0545 10.5051-5.0545c.0683-.0329.1416-.05.2158-.0505.0741-.0005.1476.0157.2163.0477.0686.032.1311.0791.1838.1387.0528.0596.0947.1304.1235.2085.0287.0781.0437.1619.0441.2467.0005.0847-.0137.1687-.0417.2472-.028.0784-.0692.1498-.1214.2101-.0521.0603-.1141.1082-.1825.141l-10.724 5.1604c-.0693.0332-.1438.0503-.219.0503Z' />
										</g>
									</svg>
									<h3>{content.card1.title}</h3>
								</div>
								<div className='card__content'>
									<div>
										<img src='/images/checkmark.svg' alt='check' />
										<p className='small blue--light'>{content.card1.description1}</p>
									</div>
									<div>
										<img src='/images/checkmark.svg' alt='check' />
										<p className='small blue--light'>{content.card1.description2}</p>
									</div>
									<div>
										<img src='/images/checkmark.svg' alt='check' />
										<p className='small blue--light'>{content.card1.description3}</p>
									</div>
								</div>
								<div className='card__price'>
									<Link href='/' className='btn btn-primary btn-outline'>
										{content.card1.cta}
									</Link>
									<p className='blue--light'>{content.card1.price}</p>
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
										<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 21'>
											<g fill='#000' stroke='#000' strokeWidth='.5'>
												<path d='M11.5998 12.147c-.0752 0-.1497-.0174-.219-.0513L.655315 6.83965C.553228 6.78909.466171 6.70471.404977 6.597c-.061193-.10771-.093821-.23398-.093821-.36311s.032628-.2554.093821-.36311c.061194-.10771.148252-.1921.250338-.24265L11.3808.372051c.0693-.033827.1438-.051248.219-.051248.0752 0 .1496.017421.219.051248L22.5443 5.62813c.102.05056.1891.13494.2503.24265.0612.10771.0938.23399.0938.36311 0 .12913-.0326.25541-.0938.36311-.0612.10771-.1483.1921-.2503.24266L11.8188 12.0957c-.0694.0339-.1438.0513-.219.0513ZM2.32848 6.23389l9.27132 4.54261 9.2713-4.54261-9.2713-4.54256-9.27132 4.54256Z' />
												<path d='M11.5998 16.4474c-.0752 0-.1497-.0171-.219-.0503L.656761 11.2367c-.138018-.0663-.247311-.1927-.303834-.3511-.027988-.0785-.042178-.1625-.041761-.2472.000417-.0848.015434-.1686.044193-.2467.028759-.0781.070697-.1489.123419-.2085.052723-.0596.115197-.1067.183856-.1387.138663-.0646.294101-.0636.432116.0028l10.50505 5.0545 10.505-5.0545c.0684-.0329.1417-.05004.2158-.05052.0742-.00048.1477.01572.2163.04772.0687.032.1312.0791.1839.1387.0527.0596.0946.1304.1234.2085.0288.0781.0438.162.0442.2467.0004.0847-.0138.1687-.0418.2472-.0279.0784-.0692.1498-.1213.2101-.0521.0603-.1142.1082-.1825.141l-10.724 5.1604c-.0694.0332-.1438.0503-.219.0503Z' />
												<path d='M11.5998 20.7478c-.0752 0-.1497-.0171-.219-.0503L.656761 15.5372c-.138018-.0664-.247311-.1927-.303834-.3512-.056524-.1585-.055649-.3361.002432-.4938.058082-.1578.168612-.2827.307275-.3473.138663-.0646.294101-.0636.432116.0028l10.50505 5.0546 10.505-5.0546c.0684-.0329.1417-.05.2158-.0505.0742-.0005.1477.0157.2163.0477.0687.032.1312.0791.1839.1387.0527.0596.0946.1305.1234.2086.0288.0781.0438.1619.0442.2466.0004.0847-.0138.1687-.0418.2472-.0279.0785-.0692.1499-.1213.2101-.0521.0603-.1142.1082-.1825.1411l-10.724 5.1603c-.0694.0332-.1438.0503-.219.0503Z' />
											</g>
										</svg>
										<h3>{content.card2.title}</h3>
									</div>
									<div className='badge'>
										<p>{content.card2.badge}</p>
									</div>
								</div>
								<div className='card__content'>
									<div>
										<img src='/images/checkmark.svg' alt='check' />
										<p className='small blue--light'>{content.card2.description1}</p>
									</div>
									<div>
										<img src='/images/checkmark.svg' alt='check' />
										<p className='small blue--light'>{content.card2.description2}</p>
									</div>
									<div>
										<img src='/images/checkmark.svg' alt='check' />
										<p className='small blue--light'>{content.card2.description3}</p>
									</div>
								</div>
								<div className='card__price'>
									<Link href='/' className='btn btn-primary'>
										{content.card2.cta}
									</Link>
									<p className='blue--light'>{content.card2.price}</p>
								</div>
							</div>
							<div
								onClick={() => {
									state.plan = 'Premium'
								}}
								className={snap.plan === 'Premium' ? 'card active' : 'card '}
							>
								<div className='card__title'>
									<svg width='24' height='30' viewBox='0 0 24 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
										<g id='Group 615'>
											<path
												id='Vector'
												d='M12.2886 12.8262C12.2134 12.8262 12.139 12.8088 12.0696 12.7749L1.34416 7.51885C1.24207 7.46829 1.15501 7.38391 1.09382 7.2762C1.03263 7.16849 0.999999 7.04221 0.999999 6.91309C0.999999 6.78396 1.03263 6.65768 1.09382 6.54998C1.15501 6.44227 1.24207 6.35788 1.34416 6.30732L12.0696 1.05125C12.139 1.01742 12.2134 1 12.2886 1C12.3638 1 12.4383 1.01742 12.5077 1.05125L23.2331 6.30733C23.3352 6.35789 23.4222 6.44227 23.4834 6.54998C23.5446 6.65769 23.5773 6.78397 23.5773 6.91309C23.5773 7.04222 23.5446 7.16849 23.4834 7.2762C23.4222 7.38391 23.3352 7.4683 23.2331 7.51886L12.5077 12.7749C12.4383 12.8088 12.3638 12.8262 12.2886 12.8262ZM3.01733 6.91309L12.2886 11.4557L21.5599 6.91309L12.2886 2.37053L3.01733 6.91309Z'
												fill='black'
												stroke='black'
												strokeWidth='0.5'
											/>
											<path
												id='Vector_2'
												d='M12.2886 17.1266C12.2134 17.1266 12.139 17.1095 12.0696 17.0763L1.3456 11.9159C1.20759 11.8496 1.09829 11.7232 1.04177 11.5648C1.01378 11.4863 0.999591 11.4023 1.00001 11.3176C1.00043 11.2328 1.01544 11.149 1.0442 11.0709C1.07296 10.9928 1.1149 10.922 1.16762 10.8624C1.22034 10.8028 1.28282 10.7557 1.35148 10.7237C1.49014 10.6591 1.64558 10.6601 1.7836 10.7265L12.2886 15.781L22.7937 10.7265C22.862 10.6936 22.9353 10.6765 23.0095 10.676C23.0836 10.6755 23.1571 10.6917 23.2258 10.7237C23.2944 10.7557 23.3569 10.8028 23.4096 10.8624C23.4624 10.922 23.5043 10.9928 23.5331 11.0709C23.5618 11.149 23.5768 11.2328 23.5772 11.3176C23.5777 11.4023 23.5635 11.4863 23.5355 11.5648C23.5075 11.6432 23.4663 11.7146 23.4141 11.7749C23.362 11.8352 23.3 11.8831 23.2316 11.9159L12.5076 17.0763C12.4383 17.1095 12.3638 17.1266 12.2886 17.1266Z'
												fill='black'
												stroke='black'
												strokeWidth='0.5'
											/>
											<path
												id='Vector_3'
												d='M12.2886 21.427C12.2134 21.427 12.139 21.4099 12.0696 21.3767L1.3456 16.2164C1.20759 16.15 1.09829 16.0237 1.04177 15.8652C0.985246 15.7067 0.986121 15.5291 1.0442 15.3713C1.10228 15.2136 1.21281 15.0887 1.35148 15.0241C1.49014 14.9595 1.64558 14.9605 1.7836 15.0269L12.2886 20.0815L22.7937 15.0269C22.862 14.994 22.9353 14.9769 23.0095 14.9764C23.0836 14.9759 23.1571 14.9921 23.2258 15.0241C23.2944 15.0561 23.3569 15.1032 23.4096 15.1628C23.4624 15.2224 23.5043 15.2933 23.5331 15.3714C23.5618 15.4495 23.5768 15.5333 23.5772 15.618C23.5777 15.7027 23.5635 15.7867 23.5355 15.8652C23.5075 15.9437 23.4663 16.0151 23.4141 16.0753C23.362 16.1356 23.3 16.1835 23.2316 16.2164L12.5076 21.3767C12.4383 21.4099 12.3638 21.427 12.2886 21.427Z'
												fill='black'
												stroke='black'
												strokeWidth='0.5'
											/>
											<path
												id='Vector_4'
												d='M12.2886 25.4506C12.2134 25.4506 12.139 25.4335 12.0696 25.4003L1.3456 20.24C1.20759 20.1736 1.09829 20.0473 1.04177 19.8888C0.985246 19.7303 0.986121 19.5527 1.0442 19.395C1.10228 19.2372 1.21281 19.1123 1.35148 19.0477C1.49014 18.9831 1.64558 18.9841 1.7836 19.0505L12.2886 24.1051L22.7937 19.0505C22.862 19.0177 22.9353 19.0005 23.0095 19C23.0836 18.9995 23.1571 19.0158 23.2258 19.0477C23.2944 19.0797 23.3569 19.1269 23.4096 19.1864C23.4624 19.246 23.5043 19.3169 23.5331 19.395C23.5618 19.4731 23.5768 19.5569 23.5772 19.6416C23.5777 19.7264 23.5635 19.8104 23.5355 19.8888C23.5075 19.9673 23.4663 20.0387 23.4141 20.0989C23.362 20.1592 23.3 20.2071 23.2316 20.24L12.5076 25.4003C12.4383 25.4335 12.3638 25.4506 12.2886 25.4506Z'
												fill='black'
												stroke='black'
												strokeWidth='0.5'
											/>
											<path
												id='Vector_5'
												d='M12.2886 29.4506C12.2134 29.4506 12.139 29.4335 12.0696 29.4003L1.3456 24.24C1.20759 24.1736 1.09829 24.0473 1.04177 23.8888C0.985246 23.7303 0.986121 23.5527 1.0442 23.395C1.10228 23.2372 1.21281 23.1123 1.35148 23.0477C1.49014 22.9831 1.64558 22.9841 1.7836 23.0505L12.2886 28.1051L22.7937 23.0505C22.862 23.0177 22.9353 23.0005 23.0095 23C23.0836 22.9995 23.1571 23.0158 23.2258 23.0477C23.2944 23.0797 23.3569 23.1269 23.4096 23.1864C23.4624 23.246 23.5043 23.3169 23.5331 23.395C23.5618 23.4731 23.5768 23.5569 23.5772 23.6416C23.5777 23.7264 23.5635 23.8104 23.5355 23.8888C23.5075 23.9673 23.4663 24.0387 23.4141 24.0989C23.362 24.1592 23.3 24.2071 23.2316 24.24L12.5076 29.4003C12.4383 29.4335 12.3638 29.4506 12.2886 29.4506Z'
												fill='black'
												stroke='black'
												strokeWidth='0.5'
											/>
										</g>
									</svg>
									<h3>{content.card3.title}</h3>
								</div>
								<div className='card__content'>
									<div>
										<img src='/images/checkmark.svg' alt='check' />
										<p className='small blue--light'>{content.card3.description1}</p>
									</div>
									<div>
										<img src='/images/checkmark.svg' alt='check' />
										<p className='small blue--light'>{content.card3.description2}</p>
									</div>
									<div>
										<img src='/images/checkmark.svg' alt='check' />
										<p className='small blue--light'>{content.card3.description3}</p>
									</div>
								</div>
								<div className='card__price'>
									<Link href='/' className='btn btn-primary btn-outline'>
										{content.card3.cta}
									</Link>
									<p className='blue--light'>{content.card3.price}</p>
								</div>
							</div>
						</div>
					</div>
					<div className='container'>
						<p className='grey medium'>{content.smallTitle}</p>
						<PricingAccordion />
						<PricingAccordionMobile />
					</div>
				</div>
			</section>
		</>
	)
}

function PricingAccordion() {
	const content = useRouter().locale === 'en' ? enPricing : frPricing

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
						<p>{content.cms.title}</p>
						<p>{content.cms.basic}</p>
						<p>{content.cms.kblue}</p>
						<p>{content.cms.premium}</p>
					</div>
					<img src='/images/drop-down.svg' alt='arrow' className={isShowing ? 'rotate' : ''} />
				</div>
				<div className='accordion__pulltab accordion__pulltab--pricing' style={{ maxHeight: `591px` }}>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.cms.line1}</p>

							<img src='/images/checkmark.svg' alt='check' />
							<img src='/images/checkmark.svg' alt='check' />
							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.cms.line2}</p>

							<img src='/images/checkmark.svg' alt='check' />
							<img src='/images/checkmark.svg' alt='check' />
							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.cms.line3}</p>

							<img src='/images/checkmark.svg' alt='check' />
							<img src='/images/checkmark.svg' alt='check' />
							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.cms.line4}</p>

							<img src='/images/checkmark.svg' alt='check' />
							<img src='/images/checkmark.svg' alt='check' />
							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.cms.line5}</p>

							<img src='/images/checkmark.svg' alt='check' />
							<img src='/images/checkmark.svg' alt='check' />
							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.cms.line6}</p>

							<img src='/images/checkmark.svg' alt='check' className='hidden' />
							<img src='/images/checkmark.svg' alt='check' />
							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.cms.line7}</p>

							<img src='/images/checkmark.svg' alt='check' className='hidden' />
							<img src='/images/checkmark.svg' alt='check' className='hidden' />
							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.cms.line8}</p>

							<img src='/images/checkmark.svg' alt='check' className='hidden' />
							<img src='/images/checkmark.svg' alt='check' className='hidden' />
							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.cms.line9}</p>

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
						<p>{content.lms.title}</p>
						<p>{content.lms.basic}</p>
						<p>{content.lms.kblue}</p>
						<p>{content.lms.premium}</p>
					</div>
					<img src='/images/drop-down.svg' alt='arrow' className={isShowing ? 'rotate' : ''} />
				</div>
				<div className='accordion__pulltab accordion__pulltab--pricing'>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.lms.line1}</p>

							<img src='/images/checkmark.svg' alt='check' />
							<img src='/images/checkmark.svg' alt='check' />
							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.lms.line2}</p>

							<img src='/images/checkmark.svg' alt='check' />
							<img src='/images/checkmark.svg' alt='check' />
							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.lms.line3}</p>

							<img src='/images/checkmark.svg' alt='check' />
							<img src='/images/checkmark.svg' alt='check' />
							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.lms.line4}</p>

							<img src='/images/checkmark.svg' alt='check' className='hidden' />
							<img src='/images/checkmark.svg' alt='check' />
							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.lms.line5}</p>

							<img src='/images/checkmark.svg' alt='check' className='hidden' />
							<img src='/images/checkmark.svg' alt='check' className='hidden' />
							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.lms.line6}</p>

							<img src='/images/checkmark.svg' alt='check' className='hidden' />
							<img src='/images/checkmark.svg' alt='check' className='hidden' />
							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.lms.line7}</p>

							<img src='/images/checkmark.svg' alt='check' className='hidden' />
							<img src='/images/checkmark.svg' alt='check' className='hidden' />
							<p>{content.quote}</p>
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.lms.line8}</p>

							<img src='/images/checkmark.svg' alt='check' className='hidden' />
							<img src='/images/checkmark.svg' alt='check' className='hidden' />
							<p>{content.quote}</p>
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
				</div>
			</div>
			<div className='accordion accordion--pricing last' onClick={toggle}>
				<div className='accordion__title accordion__title--pricing'>
					<div>
						<p>{content.ems.title}</p>
						<p>{content.ems.basic}</p>
						<p>{content.ems.kblue}</p>
						<p>{content.ems.premium}</p>
					</div>
					<img src='/images/drop-down.svg' alt='arrow' className={isShowing ? 'rotate' : ''} />
				</div>
				<div className='accordion__pulltab accordion__pulltab--pricing'>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.ems.line1}</p>

							<img src='/images/checkmark.svg' alt='check' />
							<img src='/images/checkmark.svg' alt='check' />
							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.ems.line2}</p>

							<img src='/images/checkmark.svg' alt='check' />
							<img src='/images/checkmark.svg' alt='check' />
							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.ems.line3}</p>

							<img src='/images/checkmark.svg' alt='check' />
							<img src='/images/checkmark.svg' alt='check' />
							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.ems.line4}</p>

							<img src='/images/checkmark.svg' alt='check' />
							<img src='/images/checkmark.svg' alt='check' />
							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.ems.line5}</p>

							<img src='/images/checkmark.svg' alt='check' className='hidden' />
							<img src='/images/checkmark.svg' alt='check' />
							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.ems.line6}</p>

							<img src='/images/checkmark.svg' alt='check' className='hidden' />
							<img src='/images/checkmark.svg' alt='check' />
							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.ems.line7}</p>

							<img src='/images/checkmark.svg' alt='check' className='hidden' />
							<img src='/images/checkmark.svg' alt='check' />
							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.ems.line8}</p>

							<img src='/images/checkmark.svg' alt='check' className='hidden' />
							<img src='/images/checkmark.svg' alt='check' />
							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.ems.line9}</p>

							<img src='/images/checkmark.svg' alt='check' className='hidden' />
							<img src='/images/checkmark.svg' alt='check' />
							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.ems.line10}</p>

							<img src='/images/checkmark.svg' alt='check' className='hidden' />
							<img src='/images/checkmark.svg' alt='check' className='hidden' />
							<img src='/images/checkmark.svg' alt='check' />
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
					<div className='pulltab--wrapper'>
						<div>
							<p>{content.ems.line11}</p>

							<img src='/images/checkmark.svg' alt='check' className='hidden' />
							<img src='/images/checkmark.svg' alt='check' className='hidden' />
							<p>{content.quote}</p>
						</div>
						<img src='/images/drop-down.svg' alt='emptyness' />
					</div>
				</div>
			</div>
		</>
	)
}
