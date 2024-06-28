import Link from 'next/link'
import { FadeInLeft, FadeIn } from '../../scripts/_anims'
import AnimatedText from '../../utils/anims/anims'
import Image from 'next/image'
import { useState } from 'react'
import localFont from 'next/font/local'
const requila = localFont({ src: '../../fonts/Requila.woff' })

export default function PricingSection({ index, bloc }) {
    const cards = Array.isArray(bloc.cards) ? bloc.cards : []
    const [selected, setSelected] = useState(0)

    function toggleSelected(cardIndex) {
        setSelected(cardIndex)
    }

    return (
        <section key={index} id="Pricing">
            <div className="container-xl">
                <div className="pricing">
                    <div className="team">
                        <div className="team-introduction">
                            <p className="overtitle">{bloc.overtitle}</p>
                            <h2>
                                {bloc.title1}
                                <span className={requila.className}>{bloc.title2}</span>
                            </h2>
                            <p className="description">{bloc.description}</p>
                        </div>
                    </div>
                    <div className="cards">
                        {cards.map((card, cardIndex) => (
                            <div
                                key={cardIndex}
                                className={cardIndex === selected ? 'card active' : 'card'}
                                onClick={() => toggleSelected(cardIndex)}
                            >
                                <div className="title">
                                    <div className="card__title">
                                        <Image src={card.image.url} alt={card.image.alt} width={23} height={23} />
                                        <h3>{card.title}</h3>
                                        {cardIndex === 1 && (
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
                                        className={cardIndex === 1 ? 'btn btn-primary' : 'btn btn-primary btn-outline'}
                                    >
                                        {bloc.button_text}
                                    </Link>
                                    <p className="blue--light">{card.conditions}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
