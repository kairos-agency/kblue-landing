import localFont from 'next/font/local'
import Image from 'next/image'
import Link from 'next/link'

const requila = localFont({ src: '../../fonts/Requila.woff' })

export default function Team({ index, bloc }) {
    return (
        <section key={index} className="container">
            <div className="team">
                <div className="team-introduction">
                    <p className="overtitle">{bloc.overtitle}</p>
                    <h2>
                        {bloc.title1}
                        <span className={requila.className}>{bloc.title2}</span>
                    </h2>
                    <p>{bloc.text}</p>
                </div>
                <div className="team-grid">
                    {bloc.members.map((member, memberIndex) => {
                        return (
                            <div key={memberIndex} className="team-item">
                                <Image src={member.image.url} alt={member.image.alt} width="80" height="80" />
                                <span>
                                    {member.name} - {member.role}
                                </span>
                                <p>{member.text}</p>
                                <div className="team-socials">
                                    {member.socials.map((social, socialIndex) => {
                                        return (
                                            <a key={socialIndex} href={social.link} target="_blank" rel="noreferrer">
                                                <Image
                                                    src={social.icon.url}
                                                    alt={social.icon.alt}
                                                    width="24"
                                                    height="24"
                                                />
                                            </a>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="team-cta">
                    <h2>
                        {bloc.cta_title1}
                        <span className={requila.className}>{bloc.cta_title2}</span>
                    </h2>
                    <Link href={bloc.link.url} target="_blank">
                        <p className="btn btn-primary btn-outline">{bloc.link.title}</p>
                    </Link>
                </div>
            </div>
        </section>
    )
}
