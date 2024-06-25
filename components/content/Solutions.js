import localFont from 'next/font/local'
import Image from 'next/image'

const requila = localFont({ src: '../../fonts/Requila.woff' })

export default function Solutions({ index, bloc }) {
    return (
        <section key={index} className="container">
            <div className="solutions">
                <div className="solutions-introduction">
                    <p className="overtitle">{bloc.overtitle}</p>
                    <h2>
                        {bloc.title1}
                        <span className={requila.className}>{bloc.title2}</span>
                    </h2>
                    <p>{bloc.text}</p>
                </div>
                <div className="solutions-grid">
                    {bloc.solutions.map((solution, solutionIndex) => {
                        return (
                            <div key={solutionIndex} className="solution-item">
                                {solution.image ? (
                                    <Image
                                        src={solution.image.url}
                                        alt={solution.image.alt}
                                        width={solution.image.width}
                                        height={solution.image.height}
                                    />
                                ) : (
                                    <Image src="/images/icons/solution.svg" alt="" width="35" height="35" />
                                )}
                                <h3>{solution.title}</h3>
                                <p>{solution.text}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
