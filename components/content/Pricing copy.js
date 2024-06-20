/* eslint-disable @next/next/no-img-element */
import Link from 'next/link.js'
import { FadeInLeft, FadeIn } from '../../scripts/_anims.js'
// import { useState } from 'react'
// import { PricingAccordionMobile } from './pricingMobile.js'

import { state } from '../../utils/store.js'
import { useSnapshot } from 'valtio'

import AnimatedText from '../../utils/anims/anims.js'
export default function Pricing({ index, bloc }) {
    const cards = Array.isArray(bloc.cards) ? bloc.cards : []
    console.log('cards', bloc.steps[0].text)
    const snap = useSnapshot(state)
    return (
        <section key={index} id="Pricing">
            <div className="container">
                <FadeIn>
                    <h2>{bloc.title}</h2>
                </FadeIn>

                <div>
                    <AnimatedText classname={'medium grey animated animated_centered'} text={bloc.description} />
                </div>
                <div className="tuto">
                    <div className="cards">
                        {bloc.steps.map((step, index) => {
                            return (
                                <div key={index}>
                                    <FadeInLeft>
                                        <div className="card">
                                            <p>{index + 1}</p>
                                            <p>{step.text}</p>
                                        </div>
                                    </FadeInLeft>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="container-xl">
                <div className="pricing">
                    <div className="cards">
                        {cards.map((card, index) => {
                            return (
                                <div key={index} className="card">
                                    <div className="card__title">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 18">
                                            <g fill="#000" stroke="#000" strokeWidth=".5">
                                                <path d="M12.2886 12.8262c-.0752 0-.1496-.0174-.219-.0513L1.34416 7.51885c-.10209-.05056-.18915-.13494-.25034-.24265-.06119-.10771-.093821-.23399-.093821-.36311 0-.12913.032631-.25541.093821-.36311.06119-.10771.14825-.1921.25034-.24266L12.0696 1.05125C12.139 1.01742 12.2134 1 12.2886 1c.0752 0 .1497.01742.2191.05125l10.7254 5.25608c.1021.05056.1891.13494.2503.24265.0612.10771.0939.23399.0939.36311 0 .12913-.0327.2554-.0939.36311-.0612.10771-.1482.1921-.2503.24266L12.5077 12.7749c-.0694.0339-.1439.0513-.2191.0513ZM3.01733 6.91309l9.27127 4.54261 9.2713-4.54261-9.2713-4.54256-9.27127 4.54256Z" />
                                                <path d="M12.2886 17.1266c-.0752 0-.1496-.0171-.219-.0503l-10.724-5.1604c-.13801-.0663-.24731-.1927-.30383-.3511-.02799-.0785-.042179-.1625-.04176-.2472.00042-.0848.01543-.1686.04419-.2467s.0707-.1489.12342-.2085c.05272-.0596.1152-.1067.18386-.1387.13866-.0646.2941-.0636.43212.0028l10.505 5.0545 10.5051-5.0545c.0683-.0329.1416-.05.2158-.0505.0741-.0005.1476.0157.2163.0477.0686.032.1311.0791.1838.1387.0528.0596.0947.1304.1235.2085.0287.0781.0437.1619.0441.2467.0005.0847-.0137.1687-.0417.2472-.028.0784-.0692.1498-.1214.2101-.0521.0603-.1141.1082-.1825.141l-10.724 5.1604c-.0693.0332-.1438.0503-.219.0503Z" />
                                            </g>
                                        </svg>
                                        <h3>{card.title}</h3>
                                    </div>
                                    <div className="card__content">
                                        {card.card_features.map((feature, index) => {
                                            return (
                                                <div key={index}>
                                                    <img src="/images/checkmark.svg" alt="check" />
                                                    <p className="small blue--light">{feature.text}</p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div className="card__price">
                                        <Link href="/" className="btn btn-primary btn-outline">
                                            {bloc.button_text}
                                        </Link>
                                        <p className="blue--light">{}</p>
                                    </div>
                                </div>
                                //                                 <div
                                //     key={index}
                                //     onClick={() => {
                                //         state.plan = 'Basic'
                                //     }}
                                //     className={snap.plan === 'Basic' ? 'card active' : 'card'}
                                // >
                                //     <div className="card__title">
                                //         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 18">
                                //             <g fill="#000" stroke="#000" strokeWidth=".5">
                                //                 <path d="M12.2886 12.8262c-.0752 0-.1496-.0174-.219-.0513L1.34416 7.51885c-.10209-.05056-.18915-.13494-.25034-.24265-.06119-.10771-.093821-.23399-.093821-.36311 0-.12913.032631-.25541.093821-.36311.06119-.10771.14825-.1921.25034-.24266L12.0696 1.05125C12.139 1.01742 12.2134 1 12.2886 1c.0752 0 .1497.01742.2191.05125l10.7254 5.25608c.1021.05056.1891.13494.2503.24265.0612.10771.0939.23399.0939.36311 0 .12913-.0327.2554-.0939.36311-.0612.10771-.1482.1921-.2503.24266L12.5077 12.7749c-.0694.0339-.1439.0513-.2191.0513ZM3.01733 6.91309l9.27127 4.54261 9.2713-4.54261-9.2713-4.54256-9.27127 4.54256Z" />
                                //                 <path d="M12.2886 17.1266c-.0752 0-.1496-.0171-.219-.0503l-10.724-5.1604c-.13801-.0663-.24731-.1927-.30383-.3511-.02799-.0785-.042179-.1625-.04176-.2472.00042-.0848.01543-.1686.04419-.2467s.0707-.1489.12342-.2085c.05272-.0596.1152-.1067.18386-.1387.13866-.0646.2941-.0636.43212.0028l10.505 5.0545 10.5051-5.0545c.0683-.0329.1416-.05.2158-.0505.0741-.0005.1476.0157.2163.0477.0686.032.1311.0791.1838.1387.0528.0596.0947.1304.1235.2085.0287.0781.0437.1619.0441.2467.0005.0847-.0137.1687-.0417.2472-.028.0784-.0692.1498-.1214.2101-.0521.0603-.1141.1082-.1825.141l-10.724 5.1604c-.0693.0332-.1438.0503-.219.0503Z" />
                                //             </g>
                                //         </svg>
                                //         <h3>{card.title}</h3>
                                //     </div>
                                //     <div className="card__content">
                                //         {card.card_features.map((feature, index) => {
                                //             return (
                                //                 <div key={index}>
                                //                     <img src="/images/checkmark.svg" alt="check" />
                                //                     <p className="small blue--light">{feature.text}</p>
                                //                 </div>
                                //             )
                                //         })}
                                //     </div>
                                //     <div className="card__price">
                                //         <Link href="/" className="btn btn-primary btn-outline">
                                //             {bloc.button_text}
                                //         </Link>
                                //         <p className="blue--light">{}</p>
                                //     </div>
                                // </div>
                            )
                        })}
                    </div>
                </div>
                <div className="container">
                    {/*  <p className="grey medium">{content.smallTitle}</p>*/}
                    {/* <PricingAccordion />
                    <PricingAccordionMobile /> */}
                </div>
            </div>
        </section>
    )
}

// function PricingAccordion() {
//     const [isShowing, setIsShowing] = useState(false)

//     function toggle(e) {
//         const element = e.currentTarget.querySelector('.accordion__pulltab')

//         element.offsetHeight === 0
//             ? (element.style.maxHeight = `${element.scrollHeight}px`)
//             : (element.style.maxHeight = 0)
//         setIsShowing(!isShowing)
//     }

//     return (
//         <>
//             <div className="accordion accordion--pricing" onClick={toggle}>
//                 <div className="accordion__title accordion__title--pricing">
//                     <div>
//                         <p>{content.cms.title}</p>
//                         <p>{content.cms.basic}</p>
//                         <p>{content.cms.kblue}</p>
//                         <p>{content.cms.premium}</p>
//                     </div>
//                     <img src="/images/drop-down.svg" alt="arrow" className={isShowing ? 'rotate' : ''} />
//                 </div>
//                 <div className="accordion__pulltab accordion__pulltab--pricing" style={{ maxHeight: `591px` }}>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.cms.line1}</p>

//                             <img src="/images/checkmark.svg" alt="check" />
//                             <img src="/images/checkmark.svg" alt="check" />
//                             <img src="/images/checkmark.svg" alt="check" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.cms.line2}</p>

//                             <img src="/images/checkmark.svg" alt="check" />
//                             <img src="/images/checkmark.svg" alt="check" />
//                             <img src="/images/checkmark.svg" alt="check" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.cms.line3}</p>

//                             <img src="/images/checkmark.svg" alt="check" />
//                             <img src="/images/checkmark.svg" alt="check" />
//                             <img src="/images/checkmark.svg" alt="check" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.cms.line4}</p>

//                             <img src="/images/checkmark.svg" alt="check" />
//                             <img src="/images/checkmark.svg" alt="check" />
//                             <img src="/images/checkmark.svg" alt="check" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.cms.line5}</p>

//                             <img src="/images/checkmark.svg" alt="check" />
//                             <img src="/images/checkmark.svg" alt="check" />
//                             <img src="/images/checkmark.svg" alt="check" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.cms.line6}</p>

//                             <img src="/images/checkmark.svg" alt="check" className="hidden" />
//                             <img src="/images/checkmark.svg" alt="check" />
//                             <img src="/images/checkmark.svg" alt="check" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.cms.line7}</p>

//                             <img src="/images/checkmark.svg" alt="check" className="hidden" />
//                             <img src="/images/checkmark.svg" alt="check" className="hidden" />
//                             <img src="/images/checkmark.svg" alt="check" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.cms.line8}</p>

//                             <img src="/images/checkmark.svg" alt="check" className="hidden" />
//                             <img src="/images/checkmark.svg" alt="check" className="hidden" />
//                             <img src="/images/checkmark.svg" alt="check" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.cms.line9}</p>

//                             <img src="/images/checkmark.svg" alt="check" className="hidden" />
//                             <img src="/images/checkmark.svg" alt="check" className="hidden" />
//                             <img src="/images/checkmark.svg" alt="check" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                 </div>
//             </div>
//             <div className="accordion accordion--pricing" onClick={toggle}>
//                 <div className="accordion__title accordion__title--pricing">
//                     <div>
//                         <p>{content.lms.title}</p>
//                         <p>{content.lms.basic}</p>
//                         <p>{content.lms.kblue}</p>
//                         <p>{content.lms.premium}</p>
//                     </div>
//                     <img src="/images/drop-down.svg" alt="arrow" className={isShowing ? 'rotate' : ''} />
//                 </div>
//                 <div className="accordion__pulltab accordion__pulltab--pricing">
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.lms.line1}</p>

//                             <img src="/images/checkmark.svg" alt="check" />
//                             <img src="/images/checkmark.svg" alt="check" />
//                             <img src="/images/checkmark.svg" alt="check" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.lms.line2}</p>

//                             <img src="/images/checkmark.svg" alt="check" />
//                             <img src="/images/checkmark.svg" alt="check" />
//                             <img src="/images/checkmark.svg" alt="check" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.lms.line3}</p>

//                             <img src="/images/checkmark.svg" alt="check" />
//                             <img src="/images/checkmark.svg" alt="check" />
//                             <img src="/images/checkmark.svg" alt="check" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.lms.line4}</p>

//                             <img src="/images/checkmark.svg" alt="check" className="hidden" />
//                             <img src="/images/checkmark.svg" alt="check" />
//                             <img src="/images/checkmark.svg" alt="check" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.lms.line5}</p>

//                             <img src="/images/checkmark.svg" alt="check" className="hidden" />
//                             <img src="/images/checkmark.svg" alt="check" className="hidden" />
//                             <img src="/images/checkmark.svg" alt="check" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.lms.line6}</p>

//                             <img src="/images/checkmark.svg" alt="check" className="hidden" />
//                             <img src="/images/checkmark.svg" alt="check" className="hidden" />
//                             <img src="/images/checkmark.svg" alt="check" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.lms.line7}</p>

//                             <img src="/images/checkmark.svg" alt="check" className="hidden" />
//                             <img src="/images/checkmark.svg" alt="check" className="hidden" />
//                             <p>{content.quote}</p>
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.lms.line8}</p>

//                             <img src="/images/checkmark.svg" alt="check" className="hidden" />
//                             <img src="/images/checkmark.svg" alt="check" className="hidden" />
//                             <p>{content.quote}</p>
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                 </div>
//             </div>
//             <div className="accordion accordion--pricing last" onClick={toggle}>
//                 <div className="accordion__title accordion__title--pricing">
//                     <div>
//                         <p>{content.ems.title}</p>
//                         <p>{content.ems.basic}</p>
//                         <p>{content.ems.kblue}</p>
//                         <p>{content.ems.premium}</p>
//                     </div>
//                     <img src="/images/drop-down.svg" alt="arrow" className={isShowing ? 'rotate' : ''} />
//                 </div>
//                 <div className="accordion__pulltab accordion__pulltab--pricing">
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.ems.line1}</p>

//                             <img src="/images/checkmark.svg" alt="check" />
//                             <img src="/images/checkmark.svg" alt="check" />
//                             <img src="/images/checkmark.svg" alt="check" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.ems.line2}</p>

//                             <img src="/images/checkmark.svg" alt="check" />
//                             <img src="/images/checkmark.svg" alt="check" />
//                             <img src="/images/checkmark.svg" alt="check" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.ems.line3}</p>

//                             <img src="/images/checkmark.svg" alt="check" />
//                             <img src="/images/checkmark.svg" alt="check" />
//                             <img src="/images/checkmark.svg" alt="check" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.ems.line4}</p>

//                             <img src="/images/checkmark.svg" alt="check" />
//                             <img src="/images/checkmark.svg" alt="check" />
//                             <img src="/images/checkmark.svg" alt="check" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.ems.line5}</p>

//                             <img src="/images/checkmark.svg" alt="check" className="hidden" />
//                             <img src="/images/checkmark.svg" alt="check" />
//                             <img src="/images/checkmark.svg" alt="check" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.ems.line6}</p>

//                             <img src="/images/checkmark.svg" alt="check" className="hidden" />
//                             <img src="/images/checkmark.svg" alt="check" />
//                             <img src="/images/checkmark.svg" alt="check" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.ems.line7}</p>

//                             <img src="/images/checkmark.svg" alt="check" className="hidden" />
//                             <img src="/images/checkmark.svg" alt="check" />
//                             <img src="/images/checkmark.svg" alt="check" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.ems.line8}</p>

//                             <img src="/images/checkmark.svg" alt="check" className="hidden" />
//                             <img src="/images/checkmark.svg" alt="check" />
//                             <img src="/images/checkmark.svg" alt="check" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.ems.line9}</p>

//                             <img src="/images/checkmark.svg" alt="check" className="hidden" />
//                             <img src="/images/checkmark.svg" alt="check" />
//                             <img src="/images/checkmark.svg" alt="check" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.ems.line10}</p>

//                             <img src="/images/checkmark.svg" alt="check" className="hidden" />
//                             <img src="/images/checkmark.svg" alt="check" className="hidden" />
//                             <img src="/images/checkmark.svg" alt="check" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.ems.line11}</p>

//                             <img src="/images/checkmark.svg" alt="check" className="hidden" />
//                             <img src="/images/checkmark.svg" alt="check" className="hidden" />
//                             <p>{content.quote}</p>
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }
