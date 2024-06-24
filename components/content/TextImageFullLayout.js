import localFont from 'next/font/local'
import Image from 'next/image'
const requila = localFont({ src: '../../fonts/Requila.woff' })
export default function TextImageFullLayout({ bloc, index }) {
    return (
        <div key={index}>
            <div className="container">
                <section className="text-image-layout">
                    <div className="text-layout">
                        <div>
                            <p className="overtitle">{bloc.overtitle}</p>
                            <h2>
                                {bloc.title1}
                                <span className={requila.className}>{bloc.title2}</span>
                            </h2>
                        </div>
                        <p>{bloc.text}</p>
                    </div>
                    <div
                        className="image-layout"
                        style={{
                            position: 'relative',
                            width: '100%',
                            height: 'auto',
                            aspectRatio: '16/9',
                            borderRadius: '26px',
                            overflow: 'hidden',
                        }}
                    >
                        <Image
                            src={bloc.image.url}
                            alt={bloc.image.alt}
                            sizes="1200px"
                            fill
                            style={{
                                objectFit: 'cover',
                            }}
                        />
                    </div>
                </section>
            </div>
        </div>
    )
}
