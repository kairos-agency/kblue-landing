'use client'
import Link from 'next/link'
import { FadeInLeft, FadeInBottom } from '../../scripts/_anims'
import Image from 'next/image'

export default function PostsGrid({ data }) {
    return (
        <>
            <div className="filters">
                {categoriesData &&
                    categoriesData.map((category, categoryIndex) => {
                        if (category.slug === 'non-classe') {
                            return null
                        } else {
                            return <button key={categoryIndex}>{category.name}</button>
                        }
                    })}
            </div>
            <div className="other-project_grid other-project_grid_list">
                {data &&
                    data.map((post, dataIndex) => {
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
                        const categoriesNumber = post.categories

                        return (
                            <Link key={dataIndex} href={`blog/${data.slug}`} prefetch={true}>
                                <FadeInLeft>
                                    <Image
                                        className="full image-full"
                                        src={data.image.url}
                                        alt={data.image.alt}
                                        width={1}
                                        height={1}
                                        sizes="80vw"
                                        quality="70"
                                        priority
                                    />
                                </FadeInLeft>
                                <FadeInBottom>
                                    <h3 dangerouslySetInnerHTML={{ __html: data.title }}></h3>
                                    <div className="details">
                                        <p>{data.author}</p>
                                        <p>{data.date}</p>
                                    </div>
                                    <div className="tags">
                                        {data.categoriesNumber &&
                                            data.categoriesNumber.map((categoryId, categoryIndex) => {
                                                return <span key={categoryIndex}>{data.categoryName}</span>
                                            })}
                                    </div>
                                </FadeInBottom>
                            </Link>
                        )
                    })}
            </div>
        </>
    )
}
