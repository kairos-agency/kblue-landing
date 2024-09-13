/* eslint-disable @next/next/no-img-element */
import { FadeInBottom, FadeIn } from '../../scripts/_anims.js'

import Image from 'next/image.js'

export default function LogoGrid({ index, bloc }) {
    return (
        <section className="logo_grid" key={index}>
            <div className="container-xxs">
                <FadeInBottom>
                    <p className="light-grey small">{bloc.description}</p>
                </FadeInBottom>
                <hr />
                <FadeIn>
                    <div className="grid">
                        {bloc.logos.map((item, subIndex) => {
                            return (
                                <Image key={subIndex} src={item.logo.url} alt={item.logo.alt} width={120} height={40} />
                            )
                        })}
                    </div>
                </FadeIn>
                <hr />
            </div>
        </section>
    )
}
