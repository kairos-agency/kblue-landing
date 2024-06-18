'use client'

import dynamic from 'next/dynamic'

const componentMapping = {
    // haut_de_page_accueil: dynamic(() => import('./hero/HeroHome'))
}

export default function BlocsList({ index, bloc }) {
    const Component = componentMapping[bloc.acf_fc_layout] || null

    if (!Component) {
        return null
    }

    return <Component index={index} bloc={bloc} />
}
