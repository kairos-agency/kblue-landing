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
        <div key={index} className="pricing">

        </div>
    )
}
