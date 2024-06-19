import { FadeInBottom, FadeIn } from '../../scripts/_anims.js'
import { Accordion } from '../../utils/Accordion.js'

export default function Qna({ index, bloc }) {
    return (
        <section key={index}>
            <div className="container">
                <FadeInBottom>
                    <p className="overtitle">{bloc.overtitle}</p>
                </FadeInBottom>
                <FadeIn>
                    <h2>{bloc.title}</h2>
                </FadeIn>
                <div className="accordion-container">
                    {bloc.questions.map((question, index) => {
                        return <Accordion key={index} title={question.title} content={question.answer} />
                    })}
                </div>
            </div>
        </section>
    )
}
