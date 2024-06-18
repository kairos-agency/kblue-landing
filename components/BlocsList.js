'use client'

import dynamic from 'next/dynamic'

const componentMapping = {
    hero: dynamic(() => import('./hero/HeroHome')),
    logo_grid: dynamic(() => import('./content/LogoGrid')),
    showcase: dynamic(() => import('./content/Showcase')),
}

export default function BlocsList({ index, bloc }) {
    const Component = componentMapping[bloc.acf_fc_layout] || null

    if (!Component) {
        return null
    }

    return <Component index={index} bloc={bloc} />
}
