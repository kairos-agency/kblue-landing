/* eslint-disable @next/next/no-img-element */
import { FadeInBottom, FadeInLeft, FadeInRight, FadeIn } from '../../scripts/_anims.js'

import { useRouter } from 'next/router.js'

import { enLogoGrid } from '../../lang/en.js'
import { frLogoGrid } from '../../lang/fr.js'
import Image from 'next/image.js'

export default function LogoGrid({ index, bloc }) {
    // const content = useRouter().locale === 'en' ? enLogoGrid : frLogoGrid
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
