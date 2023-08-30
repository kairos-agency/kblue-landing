/* eslint-disable @next/next/no-img-element */
import { FadeInBottom, FadeInLeft, FadeInRight, FadeIn } from '../../scripts/_anims.js'
import React, { useState } from 'react'

export default function Table() {
	const [activeTab, setActiveTab] = useState('CMS')
	const handleClick = (tab) => {
		setActiveTab(tab)
	}

	const [activeItem, setActiveItem] = useState('Site web')
	const handleClickItem = (item) => {
		setActiveItem(item)
	}

	return (
		<>
			<section>
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
							<div onClick={() => handleClick('EMS')} className={activeTab === 'EMS' ? 'tab active' : 'tab'}>
								<h3>EMS</h3>
							</div>
							<div onClick={() => handleClick('LMS')} className={activeTab === 'LMS' ? 'tab active' : 'tab'}>
								<h3>LMS</h3>
							</div>
						</div>
						<div className='content-container'>
							<div className='items'>
								<div onClick={() => handleClickItem('Site web')} className={activeItem === 'Site web' ? 'active' : ''}>
									<p>Site web</p>
								</div>
								<div
									onClick={() => handleClickItem('Job center')}
									className={activeItem === 'Job center' ? 'active' : ''}
								>
									<p>Job center</p>
								</div>
								<div onClick={() => handleClickItem('Events')} className={activeItem === 'Events' ? 'active' : ''}>
									<p>Events</p>
								</div>
								<div
									onClick={() => handleClickItem('Elearnning')}
									className={activeItem === 'Elearnning' ? 'active' : ''}
								>
									<p>Elearning</p>
								</div>
								<div
									onClick={() => handleClickItem('User rights')}
									className={activeItem === 'User rights' ? 'active' : ''}
								>
									<p>User rights</p>
								</div>
								<div
									onClick={() => handleClickItem('Documentary base')}
									className={activeItem === 'Documentary base' ? 'active' : ''}
								>
									<p>Documentary base</p>
								</div>
							</div>
							<div className='content'>
								<div>
									<h4>How content management system works ?</h4>
									<p className='grey'>
										Wondering how our content management system works? It's simple and powerful! Kairos blue lets you
										create, organize, and publish engaging content in a snap. With intuitive features and a
										user-friendly interface, you have full control over your content. You can easily upload media, add
										text, design attractive layouts, and even schedule posts in advance. Transform your content
										management experience with Kairos blue and unleash your creativity without limits!
									</p>
									<img src='/images/placeholder.png' alt='placeholder' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
