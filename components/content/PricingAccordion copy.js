import Image from 'next/image'
import { useState } from 'react'
export default function PricingAccordion({ index, bloc }) {
    const [isShowing, setIsShowing] = useState(false)

    function toggle(e) {
        const element = e.currentTarget.querySelector('.accordion__pulltab')

        element.offsetHeight === 0
            ? (element.style.maxHeight = `${element.scrollHeight}px`)
            : (element.style.maxHeight = 0)
        setIsShowing(!isShowing)
    }

    return (
        <div key={index} className="container">
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
                    <div
                        className="accordion__pulltab accordion__pulltab--pricing"
                        style={{ maxHeight: isShowing ? '591px' : '0px' }}
                    >
                        {row.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="pulltab--wrapper">
                                <div>
                                    <p>{feature.title}</p>
                                    {!feature.is_first_column &&
                                    !feature.is_second_column &&
                                    !feature.is_third_column ? (
                                        <p>Sur devis</p>
                                    ) : (
                                        <>
                                            <Image
                                                src="/images/checkmark.svg"
                                                alt="check"
                                                className={feature.is_first_column ? '' : 'hidden'}
                                                width={28}
                                                height={28}
                                            />
                                            <Image
                                                src="/images/checkmark.svg"
                                                alt="check"
                                                className={feature.is_second_column ? '' : 'hidden'}
                                                width={28}
                                                height={28}
                                            />
                                            <Image
                                                src="/images/checkmark.svg"
                                                alt="check"
                                                className={feature.is_third_column ? '' : 'hidden'}
                                                width={28}
                                                height={28}
                                            />
                                        </>
                                    )}
                                </div>
                                <Image src="/images/drop-down.svg" alt="emptyness" width={28} height={28} />
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}
