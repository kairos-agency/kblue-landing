import { fetchData } from '../../../utils/utils'
import { notFound } from 'next/navigation'
import PostPage from '../../../components/post/PostPage'

export async function generateMetadata({ params }) {
    const data = await fetchData(`wp/v2/posts?slug=${params.slug}&acf_format=standard`)

    return {
        title: data[0] ? data[0].yoast_head_json.title : 'Erreur 404',
        description: data[0] ? data[0].yoast_head_json.description : "La page n'existe pas.",
    }
}

async function getData(params) {
    const data = await fetchData(`wp/v2/posts?slug=${params.slug}&acf_format=standard`)

    if (data && Array.isArray(data)) {
        const postsWithData = await Promise.all(
            data.map(async post => {
                if (post.author) {
                    const user = await fetchData(`wp/v2/users/${post.author}`)
                    post.author = user && user.name ? user.name : null
                } else {
                    post.author = null
                }

                return post
            })
        )

        return postsWithData[0]
    } else {
        return null
    }
}

export default async function Page({ params }) {
    const data = await getData(params)

    if (data) {
        return (
            <>
                <PostPage data={data} />
            </>
        )
    } else {
        return notFound()
    }
}
