import { FadeIn } from '../../scripts/_anims.js'
import React, { useState } from 'react'
import AnimatedText from '../../utils/anims/anims.js'
import Image from 'next/image.js'
import localFont from 'next/font/local'

const requila = localFont({ src: '../../fonts/Requila.woff' })

export default function Table({ index, bloc }) {
    const [activeTab, setActiveTab] = useState(bloc.column[0].name)
    const [activeItem, setActiveItem] = useState(() => {
        const activeColumn = bloc.column.find(col => col.name === activeTab)
        if (activeColumn) {
            return activeColumn.line[0].name
        } else {
            return 'Quizz'
        }
    })

    const handleClickTab = tab => {
        setActiveTab(tab)
        const activeColumn = bloc.column.find(col => col.name === tab)
        if (activeColumn) {
            setActiveItem(activeColumn.line[0].name)
        }
    }

    const handleClickItem = item => {
        setActiveItem(item)
    }

    const activeColumn = bloc.column.find(col => col.name === activeTab)

    return (
        <section id="Features" key={index}>
            <div className="container">
                <FadeIn>
                    <h2>
                        {bloc.title1} <span className={requila.className}>{bloc.title2}</span>
                    </h2>
                </FadeIn>
                <div>
                    <AnimatedText classname="animated animated_centered medium grey" text={bloc.description} />
                </div>
                <div className="table">
                    <div className="tabs">
                        {bloc.column.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => handleClickTab(item.name)}
                                className={activeTab === item.name ? 'tab active' : 'tab'}
                            >
                                <h3>{item.name}</h3>
                            </div>
                        ))}
                    </div>
                    <div className="content-container">
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
                    </div>
                </div>
            </div>
        </section>
    )
}
