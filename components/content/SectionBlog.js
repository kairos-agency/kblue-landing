'use client'
import Link from 'next/link.js'
import { fetchData } from '../../utils/utils.js'
import localFont from 'next/font/local'
const requila = localFont({ src: '../../fonts/Requila.woff' })
import Image from 'next/image'
import { useState, useEffect, Suspense } from 'react'

export default function SectionBlog({ index, bloc }) {
    const [articles, setArticles] = useState([])
    const [categoriesMap, setCategoriesMap] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchArticlesAndCategories = async () => {
            setLoading(true)
            const articlesData = await fetchData(`wp/v2/posts?orderby=date&order=desc&per_page=${bloc.articles_number}`)
            const categoriesData = await fetchData(`wp/v2/categories`)

            const categoriesMap = categoriesData.reduce((map, category) => {
                map[category.id] = category.name
                return map
            }, {})

            // Fetch image data for each article
            for (let post of articlesData) {
                if (post.acf && post.acf.image_highlight) {
                    const media = await fetchData(`wp/v2/media/${post.acf.image_highlight}`)
                    post.image = media
                        ? {
                              url: media.source_url,
                              alt: media.alt_text,
                          }
                        : null
                } else {
                    post.image = null
                }
            }
            setLoading(false)
            setArticles(articlesData)
            setCategoriesMap(categoriesMap)
        }

        fetchArticlesAndCategories()
    }, [bloc.articles_number])

    return (
        <>
            <section className="container" key={index}>
                <div className="last-blogs">
                    <div className="introduction">
                        <p className="overtitle">{bloc.overtitle}</p>
                        <h2>
                            {bloc.title1} <span className={requila.className}>{bloc.title2}</span>
                        </h2>
                    </div>
                    <div className="last-blogs-grid">
                        {loading ? (
                            <div>{bloc.loading_text}</div>
                        ) : (
                            articles.map((post, dataIndex) => {
                                let categoryNames = []
                                if (post.categories) {
                                    categoryNames = post.categories.map(categoryId => categoriesMap[categoryId])
                                }
                                return (
                                    <Link href={`/blog/${post.slug}`} key={dataIndex} className="blog">
                                        <div className="blog-image">
                                            <Image
                                                src={post.image ? post.image.url : ''}
                                                alt={post.image ? post.image.alt : "Image de l'article"}
                                                sizes="700px"
                                                fill
                                            />
                                        </div>
                                        <span>{categoryNames.join(' ')}</span>
                                        <h3 dangerouslySetInnerHTML={{ __html: post.title.rendered }}></h3>
                                        <p>
                                            {post.excerpt.rendered.replace(/<[^>]*>?/gm, '')}
                                            <a href={`/blog/${post.slug}`}>Lire plus → </a>
                                        </p>
                                    </Link>
                                )
                            })
                        )}
                    </div>
                    <div className="cta">
                        <Link href={bloc.all_articles.url}>
                            <p className="btn btn-primary btn-outline">{bloc.all_articles.title}</p>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}
