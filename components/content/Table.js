/* eslint-disable @next/next/no-img-element */
import { FadeInBottom, FadeInLeft, FadeInRight, FadeIn } from '../../scripts/_anims.js'
import React, { useState } from 'react'
import cmsContent from '../../utils/components/cmsContent.js'
import emsContent from '../../utils/components/emsContent.js'
import lmsContent from '../../utils/components/lmsContent.js'

export default function Table() {
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
							Outside the <span>norm</span>
						</h2>
					</FadeIn>
					<FadeIn>
						<p className='medium grey'>
							Discover the secret to unparalleled content management with Kairos blue! Our revolutionary platform
							skillfully combines a content management system (CMS), a learning management system (LMS) and an
							enterprise data management system (EMS).
						</p>
					</FadeIn>
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
	const [activeCmsItem, setActiveCmsItem] = useState('item1')
	const handleClickCmsItem = (item) => {
		setActiveCmsItem(item)
	}
	return (
		<>
			<div className='items'>
				{Object.keys(cmsContent).map((key) => (
					<div key={key} onClick={() => handleClickCmsItem(key)} className={activeCmsItem === key ? 'active' : ''}>
						<p>{cmsContent[key].btnTitle}</p>
					</div>
				))}
			</div>
			<div className='content'>
				<div>
					<h4>{cmsContent[activeCmsItem].title}</h4>
					<p
						className='grey'
						dangerouslySetInnerHTML={{
							__html: cmsContent[activeCmsItem].description
						}}
					/>
					<img src={cmsContent[activeCmsItem].image} alt='placeholder' />
				</div>
			</div>
		</>
	)
}

function EmsContent() {
	const [activeEmsItem, setActiveEmsItem] = useState('item1')
	const handleClickEmsItem = (item) => {
		setActiveEmsItem(item)
	}

	return (
		<>
			<div className='items'>
				{Object.keys(emsContent).map((key) => (
					<div key={key} onClick={() => handleClickEmsItem(key)} className={activeEmsItem === key ? 'active' : ''}>
						<p>{emsContent[key].btnTitle}</p>
					</div>
				))}
			</div>
			<div className='content'>
				<div>
					<h4>{emsContent[activeEmsItem].title}</h4>
					<p
						className='grey'
						dangerouslySetInnerHTML={{
							__html: emsContent[activeEmsItem].description
						}}
					/>
					<img src={emsContent[activeEmsItem].image} alt='placeholder' />
				</div>
			</div>
		</>
	)
}

function LmsContent() {
	const [activeLmsItem, setActiveLmsItem] = useState('item1')
	const handleClickLmsItem = (item) => {
		setActiveLmsItem(item)
	}

	return (
		<>
			<div className='items'>
				{Object.keys(lmsContent).map((key) => (
					<div key={key} onClick={() => handleClickLmsItem(key)} className={activeLmsItem === key ? 'active' : ''}>
						<p>{lmsContent[key].btnTitle}</p>
					</div>
				))}
			</div>
			<div className='content'>
				<div>
					<h4>{lmsContent[activeLmsItem].title}</h4>
					<p
						className='grey'
						dangerouslySetInnerHTML={{
							__html: lmsContent[activeLmsItem].description
						}}
					/>
					<img src={lmsContent[activeLmsItem].image} alt='placeholder' />
				</div>
			</div>
		</>
	)
}
