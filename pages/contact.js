import { useRouter } from 'next/router'
import Form from '../components/content/Form'
import { enContact } from '../lang/en'
import { frContact } from '../lang/fr'
import FadeInBottom, { FadeInRight } from '../scripts/_anims'
import AnimatedText from '../utils/anims/anims'

function Contact() {
	const content = useRouter().locale === 'en' ? enContact : frContact

	return (
		<section>
			<div className='container'>
				<div className='demo-container'>
					<div className='demo-wrapper'>
						<FadeInBottom>
							<div>
								<h2>{content.title}</h2>
								<AnimatedText classname='grey medium animated' text={content.description} />
							</div>
						</FadeInBottom>
						<FadeInRight>
							<Form />
						</FadeInRight>
					</div>
				</div>
			</div>
		</section>
	)
}
export default Contact
