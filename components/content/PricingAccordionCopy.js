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
    const snap = useSnapshot(state)
    return (
        <>
            <section id="Pricing">
                <div className="container-xl">
                    <div className="container">
                        <p className="grey medium">titre</p>
                        <PricingAccordion />
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

        element.offsetHeight === 0
            ? (element.style.maxHeight = `${element.scrollHeight}px`)
            : (element.style.maxHeight = 0)
        setIsShowing(!isShowing)
    }

    return (
        <>
            <div className="accordion accordion--pricing" onClick={toggle}>
                <div className="accordion__title accordion__title--pricing">
                    <div>
                        <p>Lorem ipsum dolor sit amet</p>
                        <p>Consectetur adipiscing elit</p>
                        <p>Sed do eiusmod tempor incididunt</p>
                        <p>Ut labore et dolore magna aliqua</p>
                    </div>
                    <img src="/images/drop-down.svg" alt="arrow" className={isShowing ? 'rotate' : ''} />
                </div>
                <div className="accordion__pulltab accordion__pulltab--pricing" style={{ maxHeight: `591px` }}>
                    <div className="pulltab--wrapper">
                        <div>
                            <p>Lorem ipsum dolor sit amet</p>

                            <img src="/images/checkmark.svg" alt="check" />
                            <img src="/images/checkmark.svg" alt="check" />
                            <img src="/images/checkmark.svg" alt="check" />
                        </div>
                        <img src="/images/drop-down.svg" alt="emptyness" />
                    </div>
                    <div className="pulltab--wrapper">
                        <div>
                            <p>Lorem ipsum dolor sit amet</p>

                            <img src="/images/checkmark.svg" alt="check" />
                            <img src="/images/checkmark.svg" alt="check" />
                            <img src="/images/checkmark.svg" alt="check" />
                        </div>
                        <img src="/images/drop-down.svg" alt="emptyness" />
                    </div>
                    <div className="pulltab--wrapper">
                        <div>
                            <p>Lorem ipsum dolor sit amet</p>

                            <img src="/images/checkmark.svg" alt="check" />
                            <img src="/images/checkmark.svg" alt="check" />
                            <img src="/images/checkmark.svg" alt="check" />
                        </div>
                        <img src="/images/drop-down.svg" alt="emptyness" />
                    </div>
                    <div className="pulltab--wrapper">
                        <div>
                            <p>Lorem ipsum dolor sit amet</p>

                            <img src="/images/checkmark.svg" alt="check" />
                            <img src="/images/checkmark.svg" alt="check" />
                            <img src="/images/checkmark.svg" alt="check" />
                        </div>
                        <img src="/images/drop-down.svg" alt="emptyness" />
                    </div>
                    <div className="pulltab--wrapper">
                        <div>
                            <p>Lorem ipsum dolor sit amet</p>

                            <img src="/images/checkmark.svg" alt="check" />
                            <img src="/images/checkmark.svg" alt="check" />
                            <img src="/images/checkmark.svg" alt="check" />
                        </div>
                        <img src="/images/drop-down.svg" alt="emptyness" />
                    </div>
                    <div className="pulltab--wrapper">
                        <div>
                            <p>Lorem ipsum dolor sit amet</p>

                            <img src="/images/checkmark.svg" alt="check" className="hidden" />
                            <img src="/images/checkmark.svg" alt="check" />
                            <img src="/images/checkmark.svg" alt="check" />
                        </div>
                        <img src="/images/drop-down.svg" alt="emptyness" />
                    </div>
                    <div className="pulltab--wrapper">
                        <div>
                            <p>Lorem ipsum dolor sit amet</p>

                            <img src="/images/checkmark.svg" alt="check" className="hidden" />
                            <img src="/images/checkmark.svg" alt="check" className="hidden" />
                            <img src="/images/checkmark.svg" alt="check" />
                        </div>
                        <img src="/images/drop-down.svg" alt="emptyness" />
                    </div>
                    <div className="pulltab--wrapper">
                        <div>
                            <p>Lorem ipsum dolor sit amet</p>

                            <img src="/images/checkmark.svg" alt="check" className="hidden" />
                            <img src="/images/checkmark.svg" alt="check" className="hidden" />
                            <img src="/images/checkmark.svg" alt="check" />
                        </div>
                        <img src="/images/drop-down.svg" alt="emptyness" />
                    </div>
                    <div className="pulltab--wrapper">
                        <div>
                            <p>Lorem ipsum dolor sit amet</p>

                            <img src="/images/checkmark.svg" alt="check" className="hidden" />
                            <img src="/images/checkmark.svg" alt="check" className="hidden" />
                            <img src="/images/checkmark.svg" alt="check" />
                        </div>
                        <img src="/images/drop-down.svg" alt="emptyness" />
                    </div>
                </div>
            </div>
        </>
    )
}
