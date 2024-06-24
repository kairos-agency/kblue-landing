import localFont from 'next/font/local'
import Image from 'next/image'
const requila = localFont({ src: '../../fonts/Requila.woff' })
export default function StatisticsImage({ bloc, index }) {
    return (
        <div key={index}>
            <div className="container">
                <section className="statistics-image-layout">
                    <div className="statistics">
                        <h2>
                            {bloc.title1}
                            <span className={requila.className}>{bloc.title2}</span>
                        </h2>
                        <p>{bloc.text}</p>
                        <div className="statistics-grid">
                            {bloc.statistics.map((statistic, index) => (
                                <div key={index} className="statistics-item">
                                    <h3 className={requila.className}>{statistic.value}</h3>
                                    <p>{statistic.wording}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div
                        className="image-layout"
                        style={{
                            position: 'relative',
                            width: '100%',
                            height: 'auto',
                            aspectRatio: '1/1',
                            borderRadius: '26px',
                            overflow: 'hidden',
                        }}
                    >
                        <Image
                            src={bloc.image.url}
                            alt={bloc.image.alt}
                            sizes="1200px"
                            fill
                            style={{
                                objectFit: 'cover',
                            }}
                        />
                    </div>
                </section>
            </div>
        </div>
    )
}
