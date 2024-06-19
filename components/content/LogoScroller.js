/* eslint-disable @next/next/no-img-element */
import { FadeInBottom, FadeInLeft, FadeInRight, FadeIn } from '../../scripts/_anims.js'
import AnimatedText from '../../utils/anims/anims.js'
import Image from 'next/image.js'

export default function LogoScroller({ index, bloc }) {
    return (
        <section key={index} id="APIs">
            <div className="container-sm">
                <FadeInBottom>
                    <p className="overtitle">{bloc.overtitle}</p>
                </FadeInBottom>
                <FadeIn>
                    <h2>{bloc.title}</h2>
                </FadeIn>
                <div>
                    <AnimatedText classname="medium grey animated animated_centered" text={bloc.description} />
                </div>
            </div>
            <div className="marquee">
                <div className="marquee__group">
                    {bloc.logos.map((logo, index) => {
                        return <Image key={index} src={logo.image.url} alt={logo.image.alt} width={180} height={50} />
                    })}
                </div>
                <div aria-hidden="true" className="marquee__group">
                    {bloc.logos.map((logo, index) => {
                        return <Image key={index} src={logo.image.url} alt={logo.image.alt} width={180} height={50} />
                    })}
                </div>
            </div>{' '}
            <hr className="marquee-bar" />
        </section>
    )
}
