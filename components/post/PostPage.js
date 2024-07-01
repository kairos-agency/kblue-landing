import Image from 'next/image'

export default function PostPage({ data }) {
    const date = new Date(data.date).toLocaleString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
    return (
        <>
            <header className="article">
                <section>
                    <div className="container">
                        <h1
                            dangerouslySetInnerHTML={{
                                __html: data.title.rendered,
                            }}
                        ></h1>
                        <div>
                            <p>{data.author}</p>
                            <p>{date}</p>
                        </div>
                        <div className="image-container">
                            <Image src={data.acf.image_header.url} alt={data.acf.image_header.alt} sizes="300px" fill />
                        </div>
                    </div>
                </section>
            </header>
            <section className="article">
                <div
                    className="container-xs"
                    dangerouslySetInnerHTML={{
                        __html: data.content.rendered,
                    }}
                ></div>
            </section>
        </>
    )
}
