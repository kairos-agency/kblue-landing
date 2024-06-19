/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'

export function Accordion({ title, content }) {
    const [isShowing, setIsShowing] = useState(false)

    function toggle(e) {
        const element = e.currentTarget.querySelector('.accordion__pulltab')

        element.offsetHeight === 0
            ? (element.style.maxHeight = `${element.scrollHeight}px`)
            : (element.style.maxHeight = 0)
        setIsShowing(!isShowing)
    }

    return (
        <div className="accordion" onClick={toggle}>
            <div className="accordion__title">
                <p>{title}</p>
                <img src="/images/drop-down.svg" alt="arrow" className={isShowing ? 'rotate' : ''} />
            </div>
            <div className="accordion__pulltab">
                <div>
                    <p>{content}</p>
                </div>
            </div>
        </div>
    )
}
