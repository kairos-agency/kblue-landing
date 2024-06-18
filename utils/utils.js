export async function fetchData(endpoint) {
    const base64Credentials = btoa(`${process.env.userApi}:${process.env.passwordApi}`)

    const res = await fetch(`${process.env.wordpressApiURL}api/${endpoint}`, {
        headers: {
            Authorization: `Basic ${base64Credentials}`
        },
        next: { revalidate: 1 }
    })

    if (!res.ok) throw new Error('Failed to fetch data')

    return res.json()
}

export const replaceDomain = url => {
    return url.replace(process.env.wordpressApiURL, process.env.websiteURL)
}
