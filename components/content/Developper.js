import Link from 'next/link.js'
import { FadeInBottom, FadeInLeft, FadeInRight, FadeIn } from '../../scripts/_anims.js'
import localFont from 'next/font/local'
const requila = localFont({ src: '../../fonts/Requila.woff' })

export default function Developper() {
    return (
        <>
            <section>
                <div className="container-sm">
                    <FadeInBottom>
                        <p className="overtitle">Developper ?</p>
                    </FadeInBottom>
                    <FadeIn>
                        <h2>
                            Contribute to <span className={requila.className}>the project</span>
                        </h2>
                    </FadeIn>
                    <FadeIn>
                        <div className="github-btn">
                            <Link href="/" className="btn-primary">
                                GitHub
                            </Link>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </>
    )
}
