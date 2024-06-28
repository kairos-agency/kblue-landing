import Link from 'next/link.js'
import localFont from 'next/font/local'
const requila = localFont({ src: '../../fonts/Requila.woff' })
import Image from 'next/image'
export default function Blog() {
    return (
        <>
            <section className="container">
                <div className="last-blogs">
                    <div className="introduction">
                        <p className="overtitle">Rester au courant des avancées ?</p>
                        <h2>
                            Kairos Blue <span className={requila.className}>Blog</span>
                        </h2>
                    </div>
                    <div className="last-blogs-grid">
                        <div className="blog">
                            <div className="blog-image">
                                <Image src="/images/home-fr.webp" alt="Picture of the author" sizes="700px" fill />
                            </div>
                            <span>Ressources</span>
                            <h3>Kairos Blue n’a jamais été aussi performant</h3>
                            <p>
                                Nous avons conçu Kairos Blue avec notre expertise d’agence web.{' '}
                                <a href="/">Lire plus → </a>
                            </p>
                        </div>
                        <div className="blog">
                            <div className="blog-image">
                                <Image src="/images/home-fr.webp" alt="Picture of the author" sizes="700px" fill />
                            </div>
                            <span>Ressources</span>
                            <h3>Kairos Blue n’a jamais été aussi performant</h3>
                            <p>
                                Nous avons conçu Kairos Blue avec notre expertise d’agence web.{' '}
                                <a href="/">Lire plus → </a>
                            </p>
                        </div>
                    </div>
                    <div className="cta">
                        <Link href="/">
                            <p className="btn btn-primary btn-outline">Voir plus d'articles</p>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}
