/* eslint-disable @next/next/no-img-element */
import { FadeInBottom, FadeInLeft, FadeInRight, FadeIn } from '../../scripts/_anims.js'
import React, { useState } from 'react'
import { enTable, enCmsContent, enEmsContent, enLmsContent } from '../../lang/en.js'
import { frTable, frCmsContent, frEmsContent, frLmsContent } from '../../lang/fr.js'

import AnimatedText from '../../utils/anims/anims.js'
import { useRouter } from 'next/router.js'

export default function Table() {
	const content = useRouter().locale === 'en' ? enTable : frTable

	const [activeTab, setActiveTab] = useState('CMS')
	const handleClick = (tab) => {
		setActiveTab(tab)
	}

	return (
		<>
			<section id='Features'>
				<div className='container'>
					<FadeIn>
						<h2>
							{content.title} <span>{content.altTitle}</span>
						</h2>
					</FadeIn>
					<div>
						<AnimatedText classname='animated animated_centered medium grey' text={content.description} />
					</div>
					<div className='table'>
						<div className='tabs'>
							<div onClick={() => handleClick('CMS')} className={activeTab === 'CMS' ? 'tab active' : 'tab'}>
								<h3>CMS</h3>
							</div>
							<div onClick={() => handleClick('LMS')} className={activeTab === 'LMS' ? 'tab active' : 'tab'}>
								<h3>LMS</h3>
							</div>
							<div onClick={() => handleClick('EMS')} className={activeTab === 'EMS' ? 'tab active' : 'tab'}>
								<h3>EMS</h3>
							</div>
						</div>
						<div className='content-container'>
							{activeTab === 'CMS' && <CmsContent />}
							{activeTab === 'EMS' && <EmsContent />}
							{activeTab === 'LMS' && <LmsContent />}
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

function CmsContent() {
	const content = useRouter().locale === 'en' ? enCmsContent : frCmsContent

	const [activeCmsItem, setActiveCmsItem] = useState('item1')
	const handleClickCmsItem = (item) => {
		setActiveCmsItem(item)
	}
	return (
		<>
			<div className='items'>
				{Object.keys(content).map((key) => (
					<div key={key} onClick={() => handleClickCmsItem(key)} className={activeCmsItem === key ? 'active' : ''}>
						<p>{content[key].btnTitle}</p>
					</div>
				))}
			</div>
			<div className='content'>
				<div>
					<h4>{content[activeCmsItem].title}</h4>
					<p
						className='grey'
						dangerouslySetInnerHTML={{
							__html: content[activeCmsItem].description
						}}
					/>
					<img src={content[activeCmsItem].image} alt='placeholder' />
				</div>
			</div>
		</>
	)
}

function EmsContent() {
	const content = useRouter().locale === 'en' ? enEmsContent : frEmsContent

	const [activeEmsItem, setActiveEmsItem] = useState('item1')
	const handleClickEmsItem = (item) => {
		setActiveEmsItem(item)
	}

	return (
		<>
			<div className='items'>
				{Object.keys(content).map((key) => (
					<div key={key} onClick={() => handleClickEmsItem(key)} className={activeEmsItem === key ? 'active' : ''}>
						<p>{content[key].btnTitle}</p>
					</div>
				))}
			</div>
			<div className='content'>
				<div>
					<h4>{content[activeEmsItem].title}</h4>
					<p
						className='grey'
						dangerouslySetInnerHTML={{
							__html: content[activeEmsItem].description
						}}
					/>
					<img src={content[activeEmsItem].image} alt='placeholder' />
				</div>
			</div>
		</>
	)
}

function LmsContent() {
	const content = useRouter().locale === 'en' ? enLmsContent : frLmsContent

	const [activeLmsItem, setActiveLmsItem] = useState('item1')
	const handleClickLmsItem = (item) => {
		setActiveLmsItem(item)
	}

	return (
		<>
			<div className='items'>
				{Object.keys(content).map((key) => (
					<div key={key} onClick={() => handleClickLmsItem(key)} className={activeLmsItem === key ? 'active' : ''}>
						<p>{content[key].btnTitle}</p>
					</div>
				))}
			</div>
			<div className='content'>
				<div>
					<h4>{content[activeLmsItem].title}</h4>
					<p
						className='grey'
						dangerouslySetInnerHTML={{
							__html: content[activeLmsItem].description
						}}
					/>
					<img src={content[activeLmsItem].image} alt='placeholder' />
				</div>
			</div>
		</>
	)
}
