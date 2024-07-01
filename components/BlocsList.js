'use client'

import dynamic from 'next/dynamic'
const componentMapping = {
    hero: dynamic(() => import('./hero/HeroHomeCopy')),
    logo_grid: dynamic(() => import('./content/LogoGrid')),
    showcase: dynamic(() => import('./content/Showcase')),
    table: dynamic(() => import('./content/Table')),
    logo_scroller: dynamic(() => import('./content/LogoScroller')),
    logo_featured: dynamic(() => import('./content/LogoFeatured')),
    q_and_a: dynamic(() => import('./content/Qna')),
    pricing: dynamic(() => import('./content/Pricing')),
    pricing_accordion: dynamic(() => import('./content/PricingAccordion')),
    legal_noticies: dynamic(() => import('./content/LegalNotices')),
    text_image_full_layout: dynamic(() => import('./content/TextImageFullLayout')),
    statistics_image: dynamic(() => import('./content/StatisticsImage')),
    solutions: dynamic(() => import('./content/Solutions')),
    team: dynamic(() => import('./content/Team')),
    section_blog: dynamic(() => import('./content/SectionBlog')),
    cta: dynamic(() => import('./content/Cta')),
    short_cta: dynamic(() => import('./content/ShortCta')),
    testimonials: dynamic(() => import('./content/Testimonials')),
    pricing_section: dynamic(() => import('./content/PricingSection')),
}

export default function BlocsList({ index, bloc }) {
    const Component = componentMapping[bloc.acf_fc_layout] || null

    if (!Component) {
        return null
    }

    return <Component index={index} bloc={bloc} />
}
