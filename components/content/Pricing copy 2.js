import Link from 'next/link'
import { FadeInLeft, FadeIn } from '../../scripts/_anims'
import AnimatedText from '../../utils/anims/anims'
import Image from 'next/image'
import { useState } from 'react'

export default function Pricing({ index, bloc }) {
    const cards = Array.isArray(bloc.cards) ? bloc.cards : []
    const [selected, setSelected] = useState(0)
    function toogleSelected(cardIndex) {
        setSelected(cardIndex)
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
                        <PricingAccordion bloc={bloc} />
                        <PricingAccordionMobile selected={selected} />
                    </div>
                </div>
            </div>
        </section>
    )
}
function PricingAccordion({ bloc }) {
    const [isShowing, setIsShowing] = useState(false)

    function toggle(e) {
        const element = e.currentTarget.querySelector('.accordion__pulltab')

        element.offsetHeight === 0
            ? (element.style.maxHeight = `${element.scrollHeight}px`)
            : (element.style.maxHeight = 0)
        setIsShowing(!isShowing)
    }
    return (
        <>
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
        </>
    )
}
function PricingAccordionMobile(selected) {
    return (
        <>
            <Plan plan={selected} />
        </>
    )
}

function Plan({plan}) {
    const [isShowing, setIsShowing] = useState(false)

    function toggle(e) {
        const element = e.currentTarget.querySelector('.accordion__pulltab')

        element.offsetHeight === 0
            ? (element.style.maxHeight = `${element.scrollHeight}px`)
            : (element.style.maxHeight = 0)
        setIsShowing(!isShowing)
    }
    return (
        <>
            <div className="accordion accordion--pricing accordion--mobile" onClick={toggle}>
                <div className="accordion__title accordion__title--pricing">
                    <div>
                        <p>{content.cms.title}</p>
                        <p>{content.cms.basic}</p>
                    </div>
                    <Image
                        src="/images/drop-down.svg"
                        alt="arrow"
                        className={isShowing ? 'rotate' : ''}
                        width={28}
                        height={28}
                    />
                </div>
                <div className="accordion__pulltab accordion__pulltab--pricing">
                    {/* TODO bloc.map <div className="pulltab--wrapper">
                        <div>
                            <p>{content.cms.line1}</p>

                            <Image src="/images/checkmark.svg" alt="check" width={28} height={28} />
                        </div>
                        <Image src="/images/drop-down.svg" alt="" width={28} height={28} />
                    </div> */}
                </div>
            </div>
        </>
    )
}