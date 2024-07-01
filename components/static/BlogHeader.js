import React from 'react'
import localFont from 'next/font/local'
const requila = localFont({ src: '../../fonts/Requila.woff' })

export default function BlogHeader() {
    return (
        <div>
            <header className="hero">
                <section>
                    <div className="container-sm">
                        <div className="title">
                            <h1>
                                Le Kairos Blue <br></br><span className={requila.className}>blog</span>
                            </h1>
                        </div>
                    </div>
                </section>
            </header>
        </div>
    )
}
