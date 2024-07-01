import { fetchData } from '../../utils/utils'
import Posts from '../../components/post/Posts'
import { notFound } from 'next/navigation'

async function getData() {
    const data = await fetchData(`wp/v2/posts`)

    if (data && Array.isArray(data)) {
        const postsWithData = await Promise.all(
            data.map(async post => {
                if (post.author) {
                    const user = await fetchData(`wp/v2/users/${post.author}`)
                    post.author = user && user.name ? user.name : null
                } else {
                    post.author = null
                }

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

                return post
            })
        )

        return postsWithData
    } else {
        return null
    }
}

export default async function Page() {
    const data = await getData()

    if (!data || data.length === 0) {
        return notFound()
    }

    return (
        <>
            <Posts data={data} />
        </>
    )
}
