import Link from 'next/link.js'
import { FadeInBottom, FadeInLeft, FadeInRight, FadeIn } from '../../scripts/_anims.js'

export default function Showcase() {
	return (
		<>
			<section>
				<div className='container-sm'>
					<FadeIn>
						<h2>
							Manage all your web assets <span>on a single dashboard</span>
						</h2>
					</FadeIn>
					<FadeIn>
						<p className='medium grey'>
							Imagine that google drive, wordpress and crossknowledge had a eco-build baby together. One place to manage
							all of your business content, one login portal.
						</p>
					</FadeIn>
					<FadeIn>
						<div className='demo-btn'>
							<p className='medium'>Ask for a demo today</p>
							<Link className='btn-secondary' href='/'>
								Demo
							</Link>
						</div>
					</FadeIn>
				</div>
			</section>
		</>
	)
}
