import { fetchData } from '../utils/utils'
import BlocsList from '../components/BlocsList'
import { notFound } from 'next/navigation'

export async function generateMetadata() {
    const data = await fetchData('wp/v2/pages?slug=page-d-exemple&acf_format=standard')

    return {
        title: data[0] ? data[0].yoast_head_json.title : 'Erreur 404',
        description: data[0] ? data[0].yoast_head_json.description : "La page n'existe pas."
    }
}

async function getData() {
    const data = await fetchData('wp/v2/pages?slug=page-d-exemple&acf_format=standard')

    return data[0] || null
}

export default async function Page() {
    const data = await getData()

    if (!data) {
        return notFound()
    }

    if (data && data.acf && data.acf.blocs) {
        return (
            <>
                {data.acf.blocs.map((bloc, index) => (
                    <BlocsList key={index} index={index} bloc={bloc} />
                ))}
            </>
        )
    }
}
