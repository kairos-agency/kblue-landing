import { FadeInBottom, FadeInLeft, FadeInRight, FadeIn } from '../../scripts/_anims.js'
import { Accordion } from '../../utils/Accordion.js'

import { useRouter } from 'next/router.js'

import { enQna } from '../../lang/en.js'
import { frQna } from '../../lang/fr.js'

export default function Qna() {
	const content = useRouter().locale === 'en' ? enQna : frQna

	return (
		<>
			<section>
				<div className='container'>
					<FadeInBottom>
						<p className='overtitle'>{content.overtitle}</p>
					</FadeInBottom>
					<FadeIn>
						<h2>{content.title}</h2>
					</FadeIn>
					<div className='accordion-container'>
						<Accordion title={content.accordion.item1.title} content={content.accordion.item1.content} />
						<Accordion title={content.accordion.item2.title} content={content.accordion.item2.content} />
						<Accordion title={content.accordion.item3.title} content={content.accordion.item3.content} />
						<Accordion title={content.accordion.item4.title} content={content.accordion.item4.content} />
						<Accordion title={content.accordion.item5.title} content={content.accordion.item5.content} />
						<Accordion title={content.accordion.item6.title} content={content.accordion.item6.content} />
						<Accordion title={content.accordion.item7.title} content={content.accordion.item7.content} />
					</div>
				</div>
			</section>
		</>
	)
}
