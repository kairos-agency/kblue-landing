import { FadeInBottom, FadeInLeft } from '../../scripts/_anims'
export default function LegalNoticies({ index, bloc }) {
    return (
        <section key={index} className="legal">
            <div className="container-xs">
                <FadeInBottom>
                    <h2>{bloc.title}</h2>
                </FadeInBottom>
                {bloc.sections.map((section, sectionIndex) => {
                    return (
                        <div key={sectionIndex}>
                            <FadeInLeft>
                                <div>
                                    <h3>{section.title}</h3>
                                </div>
                            </FadeInLeft>
                            {/* <FadeInLeft> */}
                            <div>
                                <p
                                    style={{ whiteSpace: 'pre-line' }}
                                    dangerouslySetInnerHTML={{ __html: section.content }}
                                ></p>
                            </div>
                            {/* </FadeInLeft> */}
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
