import { FadeInBottom, FadeInLeft, FadeInRight, FadeIn } from '../../scripts/_anims.js'
import React, { useState } from 'react'
import { enTable, enCmsContent, enEmsContent, enLmsContent } from '../../lang/en.js'
import { frTable, frCmsContent, frEmsContent, frLmsContent } from '../../lang/fr.js'

import AnimatedText from '../../utils/anims/anims.js'
import { useRouter } from 'next/router.js'
import Image from 'next/image.js'

export default function Table({ index, bloc }) {
    // const content = useRouter().locale === 'en' ? enTable : frTable

    const [activeTab, setActiveTab] = useState(bloc.column[0].name)
    const handleClick = tab => {
        setActiveTab(tab)
    }
    // console.log(bloc.column)

    return (
        <section id="Features" key={index}>
            <div className="container">
                <FadeIn>
                    <h2>
                        {bloc.title1} <span>{bloc.title2}</span>
                    </h2>
                </FadeIn>
                <div>
                    <AnimatedText classname="animated animated_centered medium grey" text={bloc.description} />
                </div>
                <div className="table">
                    <div className="tabs">
                        {bloc.column.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    onClick={() => handleClick(item.name)}
                                    className={activeTab === item.name ? 'tab active' : 'tab'}
                                >
                                    <h3>{item.name}</h3>
                                </div>
                            )
                        })}
                        {/* // <div onClick={() => handleClick('CMS')} className={activeTab === 'CMS' ? 'tab active' : 'tab'}>
                        //     <h3>CMS</h3>
                        // </div>
                        // <div onClick={() => handleClick('LMS')} className={activeTab === 'LMS' ? 'tab active' : 'tab'}>
                        //     <h3>LMS</h3>
                        // </div>
                        // <div onClick={() => handleClick('EMS')} className={activeTab === 'EMS' ? 'tab active' : 'tab'}>
                        //     <h3>EMS</h3>
                        // </div> */}
                    </div>
                    <div className="content-container">
                        <ColumnContent activeTab={activeTab} bloc={bloc} />
                        {/* {activeTab === 'CMS' && <CmsContent />}
                        {activeTab === 'EMS' && <EmsContent />}
                        {activeTab === 'LMS' && <LmsContent />} */}
                    </div>
                </div>
            </div>
        </section>
    )
}

function ColumnContent({ activeTab, bloc }) {
    // const content = useRouter().locale === 'en' ? enCmsContent : frCmsContent

    console.log('active tab, lines : ', bloc) // show the lines where the column.name == activeTab
    // const [activeItem, setActiveItem] = useState(activeColumn.line[0].name)
    const activeColumn = bloc.column.find(col => col.name === activeTab)

    const [activeItem, setActiveItem] = useState(() => {
        if (activeColumn) {
            return activeColumn.line[0].name
        } else {
            return 'Quizz'
        }
    })
    const handleClickItem = item => {
        setActiveItem(item)
    }
    return (
        <>
            <div className="items">
                {activeColumn.line.map((line, index) => (
                    <div
                        key={index}
                        onClick={() => handleClickItem(line.name)}
                        className={activeItem === line.name ? 'active' : ''}
                    >
                        <p>{line.name}</p>
                    </div>
                ))}
                {/* {column.map(key => (
                    <div
                        key={key}
                        onClick={() => handleClickCmsItem(key)}
                        className={activeCmsItem === key ? 'active' : ''}
                    >
                        <p>{content[key].btnTitle}</p>
                    </div>
                ))} */}
            </div>
            <div className="content">
                {activeItem && (
                    <>
                        {activeColumn.line.map((line, index) => {
                            if (line.name === activeItem) {
                                return (
                                    <div key={index}>
                                        <h4>{line.title}</h4>
                                        <p
                                            className="grey"
                                            dangerouslySetInnerHTML={{
                                                __html: line.description,
                                            }}
                                        />
                                        <Image
                                            src={line.image.url}
                                            alt={line.image.alt}
                                            width={1}
                                            height={1}
                                            sizes="80vw"
                                            quality="70"
                                            priority
                                        />
                                    </div>
                                )
                            }
                            return null
                        })}
                    </>
                )}
            </div>
        </>
    )
}
