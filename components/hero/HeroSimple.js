import React from 'react'
import localFont from 'next/font/local'
const requila = localFont({ src: '../../fonts/Requila.woff' })
import { FadeInBottom } from '../../scripts/_anims.js'

export default function HeroSimple({ index, bloc }) {
    return (
        <div key={index}>
            <header className="hero">
                <section>
                    <div className="container-sm">
                        <div className="title">
                            <FadeInBottom>
                                <h1>
                                    {bloc.title1} <span className={requila.className}>{bloc.title2}</span>
                                </h1>
                            </FadeInBottom>
                        </div>
                    </div>
                </section>
            </header>
        </div>
    )
}
