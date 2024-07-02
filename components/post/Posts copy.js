'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FadeInBottom, FadeInLeft } from '../../scripts/_anims'
import { fetchData } from '../../utils/utils'

export default function ListProject({ index, projects, skills, types, sectors }) {
    // Dropdown
    const [isactive, setIsActive] = useState(null)

    const handleDropdown = filter => {
        if (isactive === filter) {
            setIsActive(null)
        } else {
            setIsActive(filter)
        }
    }

    const isActive = filter => {
        return isactive === filter
    }

    // Filters
    const [filters, setFilters] = useState({
        skills: [],
        types: [],
        sectors: [],
    })

    const [idToNameMap, setIdToNameMap] = useState({
        skills: {},
        types: {},
        sectors: {},
    })

    const handleFilterChange = (filterId, filterType, filterName) => {
        setFilters(prevFilters => {
            const currentFilters = prevFilters[filterType]
            const updatedFilters = currentFilters.includes(filterId)
                ? currentFilters.filter(item => item !== filterId)
                : [...currentFilters, filterId]
            return { ...prevFilters, [filterType]: updatedFilters }
        })

        setIdToNameMap(prevMap => {
            const currentMap = { ...prevMap[filterType] }
            if (currentMap[filterId]) {
                delete currentMap[filterId]
            } else {
                currentMap[filterId] = filterName
            }
            return { ...prevMap, [filterType]: currentMap }
        })
    }

    // Get projects
    const [data, setData] = useState(null)
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        async function fetchDataFunc() {
            let url = `wp/v2/posts?orderby=date&order=desc&per_page=100`

            if (filters.skills.length > 0) {
                url += `&categorie_bibliotheque=${filters.skills.join(',')}`
            }
            if (filters.types.length > 0) {
                url += `&type_bibliotheque=${filters.types.join(',')}`
            }
            if (filters.sectors.length > 0) {
                url += `&secteur_bibliotheque=${filters.sectors.join(',')}`
            }

            const res = await fetchData(url)

            const postsWithImages = await Promise.all(
                res.map(async post => {
                    if (post.featured_media) {
                        const media = await fetchData(`wp/v2/media/${post.featured_media}`)

                        post.featuredImage = media && media.source_url ? media.source_url : null
                        post.featuredImageAlt = media && media.alt_text ? media.alt_text : ''
                    }

                    return post
                })
            )

            setData(postsWithImages)
        }

        fetchDataFunc()
    }, [filters])

    useEffect(() => {
        if (data) setLoaded(true)
    }, [data])

    return (
        <section key={index} className="other-project">
            {/* Filters */}
            <div className="container-sm">
                <div className="filter">
                    <FadeInBottom>
                        <div className="filters">
                            <div
                                className={`filter-option ${isActive('Compétences') ? 'active' : ''}`}
                                onClick={() => handleDropdown('Compétences')}
                            >
                                <p className="value">Compétences</p>
                                <Image src="/images/icon-plus-green.svg" alt="" width={15} height={15} />
                                <div className="dropdown">
                                    {skills &&
                                        skills.map((item, index) => (
                                            <div
                                                key={index}
                                                className="filter-options"
                                                onClick={() => handleFilterChange(item.id, 'skills', item.name)}
                                            >
                                                <p>{item.name}</p>
                                            </div>
                                        ))}
                                </div>
                            </div>

                            <div
                                className={`filter-option ${isActive('Types') ? 'active' : ''}`}
                                onClick={() => handleDropdown('Types')}
                            >
                                <p className="value">Type de contenus</p>
                                <Image src="/images/icon-plus-green.svg" alt="" width={15} height={15} />
                                <div className="dropdown">
                                    {types &&
                                        types.map((item, index) => (
                                            <div
                                                key={index}
                                                className="filter-options"
                                                onClick={() => handleFilterChange(item.id, 'types', item.name)}
                                            >
                                                <p>{item.name}</p>
                                                <Image src="/images/icon-plus-gray.svg" alt="" width={15} height={15} />
                                            </div>
                                        ))}
                                </div>
                            </div>

                            <div
                                className={`filter-option ${isActive('Secteurs') ? 'active' : ''}`}
                                onClick={() => handleDropdown('Secteurs')}
                            >
                                <p className="value">Secteurs</p>
                                <Image src="/images/icon-plus-green.svg" alt="" width={15} height={15} />
                                <div className="dropdown">
                                    {sectors &&
                                        sectors.map((item, index) => (
                                            <div
                                                key={index}
                                                className="filter-options"
                                                onClick={() => handleFilterChange(item.id, 'sectors', item.name)}
                                            >
                                                <p>{item.name}</p>
                                                <Image src="/images/icon-plus-gray.svg" alt="" width={15} height={15} />
                                            </div>
                                        ))}
                                </div>
                            </div>
                        </div>

                        <div className="current-options">
                            {Object.keys(idToNameMap.skills).map((item, index) => (
                                <div
                                    key={index}
                                    onClick={() =>
                                        handleFilterChange(parseInt(item), 'skills', idToNameMap.skills[item])
                                    }
                                >
                                    <p>{idToNameMap.skills[item]}</p>
                                    <Image src="/images/icon-plus-gray.svg" alt="Icon" width={10} height={10} />
                                </div>
                            ))}
                            {Object.keys(idToNameMap.types).map((item, index) => (
                                <div
                                    key={index}
                                    onClick={() => handleFilterChange(parseInt(item), 'types', idToNameMap.types[item])}
                                >
                                    <p>{idToNameMap.types[item]}</p>
                                    <Image src="/images/icon-plus-gray.svg" alt="Icon" width={10} height={10} />
                                </div>
                            ))}
                            {Object.keys(idToNameMap.sectors).map((item, index) => (
                                <div
                                    key={index}
                                    onClick={() =>
                                        handleFilterChange(parseInt(item), 'sectors', idToNameMap.sectors[item])
                                    }
                                >
                                    <p>{idToNameMap.sectors[item]}</p>
                                    <Image src="/images/icon-plus-gray.svg" alt="Icon" width={10} height={10} />
                                </div>
                            ))}
                        </div>
                    </FadeInBottom>
                </div>
            </div>

            {/* Projects */}
            <div className="container-sm">
                <div className="other-project_grid other-project_grid_list">
                    {data && data.length > 0 ? (
                        data.map((post, index) => (
                            <>
                                <FadeInLeft>
                                    {post.featuredImage && (
                                        <Image
                                            className="full a-1-1"
                                            src={post.featuredImage}
                                            alt={post.featuredImageAlt}
                                            width={1}
                                            height={1}
                                            sizes="100vw"
                                            quality="70"
                                        />
                                    )}
                                </FadeInLeft>
                                <FadeInBottom>
                                    <h3>{(post.title.rendered)}</h3>
                                </FadeInBottom>
                            </>
                        ))
                    ) : projects && projects.length > 0 && !loaded ? (
                        projects.map((post, index) => (
                            <Link key={index} href={replaceDomain(post.link)}>
                                <FadeInLeft>
                                    {post.featuredImage && (
                                        <Image
                                            className="full a-1-1"
                                            src={post.featuredImage}
                                            alt={post.featuredImageAlt}
                                            width={1}
                                            height={1}
                                            sizes="100vw"
                                            quality="70"
                                        />
                                    )}
                                </FadeInLeft>
                                <FadeInBottom>
                                    <h3>{(post.title.rendered)}</h3>
                                </FadeInBottom>
                            </Link>
                        ))
                    ) : (
                        <p>Aucun projet ne correspond aux filtres sélectionnés.</p>
                    )}
                </div>
            </div>
        </section>
    )
}
