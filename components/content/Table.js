import { FadeIn } from '../../scripts/_anims.js'
import React, { useState } from 'react'
import AnimatedText from '../../utils/anims/anims.js'
import Image from 'next/image.js'

export default function Table({ index, bloc }) {
    const [activeTab, setActiveTab] = useState(bloc.column[0].name)
    const handleClick = tab => {
        setActiveTab(tab)
    }

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
                    </div>
                    <div className="content-container">
                        <ColumnContent activeTab={activeTab} bloc={bloc} />
                    </div>
                </div>
            </div>
        </section>
    )
}

function ColumnContent({ activeTab, bloc }) {
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
