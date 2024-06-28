import Link from 'next/link'
import localFont from 'next/font/local'
const requila = localFont({ src: '../../fonts/Requila.woff' })

export default function ShortCta({ index, bloc }) {
    return (
        <div key={index} className="container team-cta cta__element">
            <h2>
                {bloc.title1}
                <span className={requila.className}>{bloc.title2}</span>
            </h2>
            <Link href={bloc.button.url} target="_blank">
                <p className="btn btn-primary btn-outline">{bloc.button.title}</p>
            </Link>
        </div>
    )
}
