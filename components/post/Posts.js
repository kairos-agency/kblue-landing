'use client'
import Link from 'next/link'
import { FadeInLeft, FadeInRight, FadeInBottom } from '../../scripts/_anims'
import Image from 'next/image'
import { fetchData } from '../../utils/utils'

export default async function Posts({ data }) {
    const catagoriesData = await fetchData(`wp/v2/categories`)

    const getCategoryNameById = id => {
        const category = catagoriesData.find(cat => cat.id === id)
        return category ? category.name : 'Unknown'
    }

    return (
        <>
            <section className="other-project">
                <div className="container">
                    {/* <div className="filters">
                        {catagoriesData.map((catagory, catagoryIndex) => {
                            return (
                                <button key={catagoryIndex} onClick={() => console.log('clicked')}>
                                    {catagory.name}
                                </button>
                            )
                        })}
                    </div> */}
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
                            const categoriesNumber = post.categories

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
                                        <div className="tags">
                                            {categoriesNumber.map((categoryId, categoryIndex) => {
                                                const categoryName = getCategoryNameById(categoryId)
                                                return <span key={categoryIndex}>{categoryName}</span>
                                            })}
                                        </div>
                                    </FadeInBottom>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}
