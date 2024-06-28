import Image from 'next/image'
import localFont from 'next/font/local'
const requila = localFont({ src: '../../fonts/Requila.woff' })
export default function Testimonials({ index, bloc }) {
    return (
        <>
            <section className="container">
                <div className="testimonials">
                    <div className="testimonials__grid">
                        {bloc.testimonials.map((testimonial, testimonialIndex) => (
                            <div className="testimonial__item" key={testimonialIndex}>
                                <span className={requila.className}>{testimonial.title}</span>
                                <p className="testimonial__text">“{testimonial.text}”</p>
                                <div className="testimonial__author">
                                    <Image
                                        src={testimonial.image.url}
                                        alt={testimonial.image.alt}
                                        width={80}
                                        height={80}
                                    />
                                    <div className="testimonial__author__infos">
                                        <h4>{testimonial.name}</h4>
                                        <p>
                                            {testimonial.role}, {testimonial.company}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
