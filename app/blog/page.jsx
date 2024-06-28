import { fetchData } from '../../utils/utils'
import Posts from '../../components/post/Posts'

export default async function Page({ params }) {
    const data = await fetchData(`wp/v2/posts`)
    data.map(post => {
        // console.log(post)
        // console.log(post.date)
    })
    return (
        <>
            <Posts data={data} />
        </>
    )
}
