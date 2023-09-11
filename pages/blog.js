/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { FadeInBottom, FadeInLeft, FadeInRight, FadeIn } from '../scripts/_anims'
import Image from 'next/image'

export default function Blog() {
	return (
		<>
			<section className='other-project'>
				<div className='container-sm'>
					<div className='other-project_grid other-project_grid_list'>
						<Link href='/article'>
							<FadeInLeft>
								<Image
									className='full'
									src='/images/placeholder.png'
									alt='Placeholder'
									width={1}
									height={1}
									sizes='80vw'
									quality='70'
									priority
								/>
							</FadeInLeft>
							<FadeInBottom>
								<h3>Article 1</h3>
								<div className='details'>
									<p>Shirley Jagle</p>
									<p>August 3, 2023</p>
								</div>
							</FadeInBottom>
						</Link>
						<Link href='/article'>
							<FadeInRight>
								<Image
									className='full'
									src='/images/placeholder.png'
									alt='Placeholder'
									width={1}
									height={1}
									sizes='80vw'
									quality='70'
									priority
								/>
							</FadeInRight>
							<FadeInBottom>
								<h3>Article 2</h3>
								<div className='details'>
									<p>Shirley Jagle</p>
									<p>August 3, 2023</p>
								</div>
							</FadeInBottom>
						</Link>
						<Link href='/article'>
							<FadeInLeft>
								<Image
									className='full'
									src='/images/placeholder.png'
									alt='Placeholder'
									width={1}
									height={1}
									sizes='80vw'
									quality='70'
									priority
								/>
							</FadeInLeft>
							<FadeInBottom>
								<h3>Article 3</h3>
								<div className='details'>
									<p>Shirley Jagle</p>
									<p>August 3, 2023</p>
								</div>
							</FadeInBottom>
						</Link>
						<Link href='/article'>
							<FadeInRight>
								<Image
									className='full'
									src='/images/placeholder.png'
									alt='Placeholder'
									width={1}
									height={1}
									sizes='80vw'
									quality='70'
									priority
								/>
							</FadeInRight>
							<FadeInBottom>
								<h3>Article 4</h3>
								<div className='details'>
									<p>Shirley Jagle</p>
									<p>August 3, 2023</p>
								</div>
							</FadeInBottom>
						</Link>
					</div>
				</div>
			</section>
		</>
	)
}
