import Link from 'next/link'
import { FadeInLeft, FadeIn } from '../../scripts/_anims'
import AnimatedText from '../../utils/anims/anims'
import Image from 'next/image'
import { useState } from 'react'

export default function Pricing({ index, bloc }) {
    const cards = Array.isArray(bloc.cards) ? bloc.cards : []
    const [isShowing, setIsShowing] = useState(false)
    const [selected, setSelected] = useState(0)
    function toogleSelected(cardIndex) {
        setSelected(cardIndex)
    }
    function toggle(e) {
        const element = e.currentTarget.querySelector('.accordion__pulltab')

        element.offsetHeight === 0
            ? (element.style.maxHeight = `${element.scrollHeight}px`)
            : (element.style.maxHeight = 0)
        setIsShowing(!isShowing)
    }
    return (
        <section key={index} id="Pricing">
            <div className="container">
                <FadeIn>
                    <h2>{bloc.title}</h2>
                </FadeIn>

                <div>
                    <AnimatedText className="medium grey animated animated_centered" text={bloc.description} />
                </div>
                <div className="tuto">
                    <div className="cards">
                        {bloc.steps.map((step, stepIndex) => (
                            <div key={stepIndex}>
                                <FadeInLeft>
                                    <div className="card">
                                        <p>{stepIndex + 1}</p>
                                        <p>{step.text}</p>
                                    </div>
                                </FadeInLeft>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="container-xl">
                <div className="pricing">
                    <div className="cards">
                        {cards.map((card, cardIndex) => (
                            <div
                                key={cardIndex}
                                className={cardIndex == selected ? 'card active' : 'card'}
                                onClick={() => toogleSelected(cardIndex)}
                            >
                                <div className="title">
                                    <div className="card__title">
                                        <Image src={card.image.url} alt={card.image.alt} width={23} height={23} />
                                        <h3>{card.title}</h3>
                                        {cardIndex == 1 && (
                                            <div className="badge">
                                                <p>{bloc.badge}</p>
                                            </div>
                                        )}
                                    </div>
                                    <div className="card__content">
                                        {card.card_features.map((feature, featureIndex) => (
                                            <div key={featureIndex}>
                                                <Image src="/images/checkmark.svg" alt="check" width={20} height={20} />
                                                <p className="small blue--light">{feature.text}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="card__price">
                                    <Link
                                        href="/"
                                        className={cardIndex == 1 ? 'btn btn-primary' : 'btn btn-primary btn-outline'}
                                    >
                                        {bloc.button_text}
                                    </Link>
                                    <p className="blue--light">{card.conditions}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="container">
                        <p className="grey medium">{bloc.table_title}</p>
                        {bloc.rows.map((row, rowIndex) => (
                            <div key={rowIndex} className="accordion accordion--pricing" onClick={toggle}>
                                <div className="accordion__title accordion__title--pricing">
                                    <div>
                                        <p>{row.title}</p>
                                        <p>{row.first_column}</p>
                                        <p>{row.second_column}</p>
                                        <p>{row.third_column}</p>
                                    </div>
                                    <Image
                                        src="/images/drop-down.svg"
                                        alt="Dropdown icon"
                                        className={isShowing ? 'rotate' : ''}
                                        width={28}
                                        height={28}
                                    />
                                </div>
                                <div className="accordion__pulltab accordion__pulltab--pricing">
                                    {row.features.map((feature, featureIndex) => (
                                        <div key={featureIndex} className="pulltab--wrapper">
                                            <div>
                                                <p>{feature.title}</p>
                                                <Image
                                                    src="/images/checkmark.svg"
                                                    alt="check"
                                                    className={feature.is_first_column ? '' : 'hidden'}
                                                    width={20}
                                                    height={20}
                                                />
                                                <Image
                                                    src="/images/checkmark.svg"
                                                    alt="check"
                                                    className={feature.is_second_column ? '' : 'hidden'}
                                                    width={20}
                                                    height={20}
                                                />
                                                {!feature.is_first_column &&
                                                !feature.is_second_column &&
                                                !feature.is_third_column ? (
                                                    <p>Sur devis</p>
                                                ) : (
                                                    <Image
                                                        src="/images/checkmark.svg"
                                                        alt="check"
                                                        className={feature.is_third_column ? '' : 'hidden'}
                                                        width={20}
                                                        height={20}
                                                    />
                                                )}
                                            </div>
                                            <Image src="/images/drop-down.svg" alt="emptyness" width={20} height={20} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

// function PricingAccordionMobile() {
//     return (
//         <>
//             <ActivePlan />
//         </>
//     )
// }
// function ActivePlan() {
//     // const snap = useSnapshot(state)
//     // return snap.plan === 'Basic' ? <Basic /> : snap.plan === 'Kblue' ? <Kblue /> : <Premium />
// }

// function Basic() {
//     const [isShowing, setIsShowing] = useState(false)

//     function toggle(e) {
//         const element = e.currentTarget.querySelector('.accordion__pulltab')

//         element.offsetHeight === 0
//             ? (element.style.maxHeight = `${element.scrollHeight}px`)
//             : (element.style.maxHeight = 0)
//         setIsShowing(!isShowing)
//     }

//     const content = useRouter().locale === 'en' ? enPricing : frPricing

//     return (
//         <>
//             <div className="accordion accordion--pricing accordion--mobile" onClick={toggle}>
//                 <div className="accordion__title accordion__title--pricing">
//                     <div>
//                         <p>{content.cms.title}</p>
//                         <p>{content.cms.basic}</p>
//                     </div>
//                     <img src="/images/drop-down.svg" alt="arrow" className={isShowing ? 'rotate' : ''} />
//                 </div>
//                 <div className="accordion__pulltab accordion__pulltab--pricing">
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.cms.line1}</p>

//                             <img src="/images/checkmark.svg" alt="check" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.cms.line2}</p>

//                             <img src="/images/checkmark.svg" alt="check" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>SEO</p>

//                             <img src="/images/checkmark.svg" alt="check" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.cms.line4}</p>

//                             <img src="/images/checkmark.svg" alt="check" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.cms.line5}</p>

//                             <img src="/images/checkmark.svg" alt="check" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.cms.line6}</p>

//                             <img src="/images/cross.svg" alt="cross" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.cms.line7}</p>

//                             <img src="/images/cross.svg" alt="cross" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.cms.line8}</p>

//                             <img src="/images/cross.svg" alt="cross" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.cms.line9}</p>

//                             <img src="/images/cross.svg" alt="cross" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                 </div>
//             </div>
//             <div className="accordion accordion--pricing accordion--mobile" onClick={toggle}>
//                 <div className="accordion__title accordion__title--pricing">
//                     <div>
//                         <p>{content.lms.title}</p>
//                         <p>{content.lms.basic}</p>
//                     </div>
//                     <img src="/images/drop-down.svg" alt="arrow" className={isShowing ? 'rotate' : ''} />
//                 </div>
//                 <div className="accordion__pulltab accordion__pulltab--pricing">
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.lms.line1}</p>

//                             <img src="/images/checkmark.svg" alt="check" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.lms.line2}</p>

//                             <img src="/images/checkmark.svg" alt="check" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.lms.line3}</p>

//                             <img src="/images/checkmark.svg" alt="check" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.lms.line4}</p>

//                             <img src="/images/cross.svg" alt="check" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.lms.line5}</p>

//                             <img src="/images/cross.svg" alt="cross" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.lms.line6}</p>

//                             <img src="/images/cross.svg" alt="cross" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.lms.line7}</p>

//                             <img src="/images/cross.svg" alt="cross" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.lms.line8}</p>

//                             <img src="/images/cross.svg" alt="cross" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                 </div>
//             </div>
//             <div className="accordion accordion--pricing accordion--mobile" onClick={toggle}>
//                 <div className="accordion__title accordion__title--pricing">
//                     <div>
//                         <p>{content.ems.title}</p>
//                         <p>{content.ems.basic}</p>
//                     </div>
//                     <img src="/images/drop-down.svg" alt="arrow" className={isShowing ? 'rotate' : ''} />
//                 </div>
//                 <div className="accordion__pulltab accordion__pulltab--pricing">
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.ems.line1}</p>

//                             <img src="/images/checkmark.svg" alt="check" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.ems.line2}</p>

//                             <img src="/images/checkmark.svg" alt="check" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.ems.line3}</p>

//                             <img src="/images/checkmark.svg" alt="check" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.ems.line4}</p>

//                             <img src="/images/checkmark.svg" alt="check" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.ems.line5}</p>

//                             <img src="/images/cross.svg" alt="check" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.ems.line6}</p>

//                             <img src="/images/cross.svg" alt="check" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.ems.line7}</p>

//                             <img src="/images/cross.svg" alt="check" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.ems.line8}</p>

//                             <img src="/images/cross.svg" alt="check" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.ems.line9}</p>

//                             <img src="/images/cross.svg" alt="check" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.ems.line10}</p>

//                             <img src="/images/cross.svg" alt="check" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.ems.line11}</p>

//                             <img src="/images/cross.svg" alt="check" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// function Kblue() {
//     const [isShowing, setIsShowing] = useState(false)

//     function toggle(e) {
//         const element = e.currentTarget.querySelector('.accordion__pulltab')

//         element.offsetHeight === 0
//             ? (element.style.maxHeight = `${element.scrollHeight}px`)
//             : (element.style.maxHeight = 0)
//         setIsShowing(!isShowing)
//     }

//     const content = useRouter().locale === 'en' ? enPricing : frPricing
//     return (
//         <>
//             <div className="accordion accordion--pricing accordion--mobile" onClick={toggle}>
//                 <div className="accordion__title accordion__title--pricing">
//                     <div>
//                         <p>{content.cms.title}</p>
//                         <p>{content.cms.kblue}</p>
//                     </div>
//                     <img src="/images/drop-down.svg" alt="arrow" className={isShowing ? 'rotate' : ''} />
//                 </div>
//                 <div className="accordion__pulltab accordion__pulltab--pricing">
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.cms.line1}</p>

//                             <img src="/images/checkmark.svg" alt="check" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.cms.line2}</p>

//                             <img src="/images/checkmark.svg" alt="check" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.cms.line3}</p>

//                             <img src="/images/checkmark.svg" alt="check" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.cms.line4}</p>

//                             <img src="/images/checkmark.svg" alt="check" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.cms.line5}</p>

//                             <img src="/images/checkmark.svg" alt="check" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.cms.line6}</p>

//                             <img src="/images/checkmark.svg" alt="cross" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.cms.line7}</p>

//                             <img src="/images/cross.svg" alt="cross" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.cms.line8}</p>

//                             <img src="/images/cross.svg" alt="cross" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.cms.line9}</p>

//                             <img src="/images/cross.svg" alt="cross" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                 </div>
//             </div>
//             <div className="accordion accordion--pricing accordion--mobile" onClick={toggle}>
//                 <div className="accordion__title accordion__title--pricing">
//                     <div>
//                         <p>{content.lms.title}</p>
//                         <p>{content.lms.kblue}</p>
//                     </div>
//                     <img src="/images/drop-down.svg" alt="arrow" className={isShowing ? 'rotate' : ''} />
//                 </div>
//                 <div className="accordion__pulltab accordion__pulltab--pricing">
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.lms.line1}</p>

//                             <img src="/images/checkmark.svg" alt="check" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.lms.line2}</p>

//                             <img src="/images/checkmark.svg" alt="check" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.lms.line3}</p>

//                             <img src="/images/checkmark.svg" alt="check" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.lms.line4}</p>

//                             <img src="/images/checkmark.svg" alt="check" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.lms.line5}</p>

//                             <img src="/images/cross.svg" alt="cross" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.lms.line6}</p>

//                             <img src="/images/cross.svg" alt="cross" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.lms.line7}</p>

//                             <img src="/images/cross.svg" alt="cross" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.lms.line8}</p>

//                             <img src="/images/cross.svg" alt="cross" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                 </div>
//             </div>
//             <div className="accordion accordion--pricing accordion--mobile" onClick={toggle}>
//                 <div className="accordion__title accordion__title--pricing">
//                     <div>
//                         <p>{content.ems.title}</p>
//                         <p>{content.ems.kblue}</p>
//                     </div>
//                     <img src="/images/drop-down.svg" alt="arrow" className={isShowing ? 'rotate' : ''} />
//                 </div>
//                 <div className="accordion__pulltab accordion__pulltab--pricing">
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.ems.line1}</p>

//                             <img src="/images/checkmark.svg" alt="check" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.ems.line2}</p>

//                             <img src="/images/checkmark.svg" alt="check" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.ems.line3}</p>

//                             <img src="/images/checkmark.svg" alt="check" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.ems.line4}</p>

//                             <img src="/images/checkmark.svg" alt="check" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.ems.line5}</p>

//                             <img src="/images/checkmark.svg" alt="check" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.ems.line6}</p>

//                             <img src="/images/checkmark.svg" alt="check" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.ems.line7}</p>

//                             <img src="/images/checkmark.svg" alt="check" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.ems.line8}</p>

//                             <img src="/images/checkmark.svg" alt="check" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.ems.line9}</p>

//                             <img src="/images/checkmark.svg" alt="check" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.ems.line10}</p>

//                             <img src="/images/cross.svg" alt="check" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.ems.line11}</p>

//                             <img src="/images/cross.svg" alt="check" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// function Premium() {
//     const [isShowing, setIsShowing] = useState(false)

//     function toggle(e) {
//         const element = e.currentTarget.querySelector('.accordion__pulltab')

//         element.offsetHeight === 0
//             ? (element.style.maxHeight = `${element.scrollHeight}px`)
//             : (element.style.maxHeight = 0)
//         setIsShowing(!isShowing)
//     }

//     const content = useRouter().locale === 'en' ? enPricing : frPricing
//     return (
//         <>
//             <div className="accordion accordion--pricing accordion--mobile" onClick={toggle}>
//                 <div className="accordion__title accordion__title--pricing">
//                     <div>
//                         <p>{content.cms.title}</p>
//                         <p>{content.cms.premium}</p>
//                     </div>
//                     <img src="/images/drop-down.svg" alt="arrow" className={isShowing ? 'rotate' : ''} />
//                 </div>
//                 <div className="accordion__pulltab accordion__pulltab--pricing">
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.cms.line1}</p>

//                             <img src="/images/checkmark.svg" alt="check" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.cms.line2}</p>

//                             <img src="/images/checkmark.svg" alt="check" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.cms.line3}</p>

//                             <img src="/images/checkmark.svg" alt="check" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.cms.line4}</p>

//                             <img src="/images/checkmark.svg" alt="check" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.cms.line5}</p>

//                             <img src="/images/checkmark.svg" alt="check" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.cms.line6}</p>

//                             <img src="/images/checkmark.svg" alt="checkmark" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.cms.line7}</p>

//                             <img src="/images/checkmark.svg" alt="checkmark" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.cms.line8}</p>

//                             <img src="/images/checkmark.svg" alt="checkmark" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.cms.line9}</p>

//                             <img src="/images/checkmark.svg" alt="checkmark" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                 </div>
//             </div>
//             <div className="accordion accordion--pricing accordion--mobile" onClick={toggle}>
//                 <div className="accordion__title accordion__title--pricing">
//                     <div>
//                         <p>{content.lms.title}</p>
//                         <p>{content.lms.premium}</p>
//                     </div>
//                     <img src="/images/drop-down.svg" alt="arrow" className={isShowing ? 'rotate' : ''} />
//                 </div>
//                 <div className="accordion__pulltab accordion__pulltab--pricing">
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.lms.line1}</p>

//                             <img src="/images/checkmark.svg" alt="check" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.lms.line2}</p>

//                             <img src="/images/checkmark.svg" alt="check" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.lms.line3}</p>

//                             <img src="/images/checkmark.svg" alt="check" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.lms.line4}</p>

//                             <img src="/images/checkmark.svg" alt="check" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.lms.line5}</p>

//                             <img src="/images/checkmark.svg" alt="checkmark" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.lms.line6}</p>

//                             <img src="/images/checkmark.svg" alt="checkmark" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.lms.line7}</p>

//                             <p>{content.quote}</p>
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.lms.line8}</p>

//                             <p>{content.quote}</p>
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                 </div>
//             </div>
//             <div className="accordion accordion--pricing accordion--mobile" onClick={toggle}>
//                 <div className="accordion__title accordion__title--pricing">
//                     <div>
//                         <p>{content.ems.title}</p>
//                         <p>{content.ems.premium}</p>
//                     </div>
//                     <img src="/images/drop-down.svg" alt="arrow" className={isShowing ? 'rotate' : ''} />
//                 </div>
//                 <div className="accordion__pulltab accordion__pulltab--pricing">
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.ems.line1}</p>

//                             <img src="/images/checkmark.svg" alt="check" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.ems.line2}</p>

//                             <img src="/images/checkmark.svg" alt="check" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.ems.line3}</p>

//                             <img src="/images/checkmark.svg" alt="check" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.ems.line4}</p>

//                             <img src="/images/checkmark.svg" alt="check" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.ems.line5}</p>

//                             <img src="/images/checkmark.svg" alt="check" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.ems.line6}</p>

//                             <img src="/images/checkmark.svg" alt="check" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.ems.line7}</p>

//                             <img src="/images/checkmark.svg" alt="check" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.ems.line8}</p>

//                             <img src="/images/checkmark.svg" alt="check" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.ems.line9}</p>

//                             <img src="/images/checkmark.svg" alt="check" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.ems.line10}</p>

//                             <img src="/images/checkmark.svg" alt="check" />
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                     <div className="pulltab--wrapper">
//                         <div>
//                             <p>{content.ems.line11}</p>

//                             <p>{content.quote}</p>
//                         </div>
//                         <img src="/images/drop-down.svg" alt="emptyness" />
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }
