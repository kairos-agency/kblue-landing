/* eslint-disable @next/next/no-img-element */
import Image from 'next/image.js'

export default function LogoFeatured({ index, bloc }) {
    return (
        <section key={index}>
            <div className="logos-featured">
                <span>{bloc.title}</span>
                <div className="logos-featured-grid">
                    {bloc.logos.map((logo, index) => (
                        <div key={index} className="logo-featured-item">
                            <Image
                                src={logo.image.url}
                                alt={logo.image.alt}
                                width={logo.image.width}
                                height={logo.image.height}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
