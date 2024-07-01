'use client'
import Link from 'next/link'
import { FadeInLeft, FadeInRight, FadeInBottom } from '../../scripts/_anims'
import Image from 'next/image'

export default function Posts({ data }) {
    return (
        <section className="other-project">
            <div className="container-sm">
                <div className="other-project_grid other-project_grid_list">
                    {data.map((post, dataIndex) => {
                        const imageUrl = post.image ? post.image.url : ''
                        const imageAlt = post.image ? post.image.alt : ''
                        const title = post.title.rendered
                        const author = post.author
                        const slug = post.slug
                        const date = new Date(post.date).toLocaleString('fr-FR', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric',
                        })

                        return (
                            <Link key={dataIndex} href={`blog/${slug}`} prefetch={true}>
                                <FadeInLeft>
                                    <Image
                                        className="full image-full"
                                        src={imageUrl}
                                        alt={imageAlt}
                                        width={1}
                                        height={1}
                                        sizes="80vw"
                                        quality="70"
                                        priority
                                    />
                                </FadeInLeft>
                                <FadeInBottom>
                                    <h3 dangerouslySetInnerHTML={{ __html: title }}></h3>
                                    <div className="details">
                                        <p>{author}</p>
                                        <p>{date}</p>
                                    </div>
                                </FadeInBottom>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
