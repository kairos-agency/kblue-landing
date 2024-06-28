import localFont from 'next/font/local'
const requila = localFont({ src: '../../fonts/Requila.woff' })
import Image from 'next/image'

export default function Cta({ index, bloc }) {
    return (
        <section className="cta__container" key={index}>
            <div className="cta container">
                <div className="cta__grid">
                    <div className="cta__image">
                        <Image
                            src={bloc.image.url}
                            alt={bloc.image.alt}
                            width={bloc.image.width}
                            height={bloc.image.height}
                        />
                    </div>
                    <div className="cta__content">
                        <h2>
                            {bloc.title1}&nbsp;
                            <span className={requila.className}>{bloc.title2}</span>
                        </h2>
                        <p>{bloc.text}</p>
                        <a className="btn btn-primary" href={bloc.button.url}>
                            {bloc.button.title}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
