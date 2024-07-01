'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function PostPage({ data }) {
    const [formattedDate, setFormattedDate] = useState('')

    useEffect(() => {
        const date = new Date(data.date).toLocaleString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
        setFormattedDate(date)
    }, [data.date])

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
                            <p>{formattedDate}</p>
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
