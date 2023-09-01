import { useLenis } from '@studio-freight/react-lenis'
import Link from 'next/link'

function Nav() {
	const lenis = useLenis()

	const stopScroll = () => lenis.stop()
	const resumeScroll = () => lenis.start()

	// console.log(lenis)

	let isActive = false

	const openMenu = (e) => {
		e.currentTarget.closest('nav').classList.toggle('active')
		isActive = !isActive
		isActive ? stopScroll() : resumeScroll()
	}

	const closeMenu = (e) => {
		e.currentTarget.closest('nav').classList.remove('active')
		resumeScroll()
		isActive = false
	}

	return (
		<>
			<nav>
				<div className='container'>
					<Link href='/'>
						<img src='/images/kairos-blue-logo.svg' alt='Logo Kairos Blue' />
					</Link>
					<div className='center'>
						<Link href='#Features'>Features</Link>
						<Link href='#APIs'>APIs</Link>
						<Link href='#Pricing'>Pricing</Link>
						<Link href='#Ressources'>Ressources</Link>
					</div>
					<div className='links'>
						<Link href='/'>Login</Link>
						<Link className='btn-primary' href='/'>
							Demo
						</Link>
					</div>

					<div className='nav_mobile'>
						<div onClick={openMenu}>
							<div className='burger'>
								<span></span>
								<span></span>
							</div>
						</div>
					</div>

					<Link href='/' className='lang'>
						<p>FR</p>
					</Link>
				</div>
				<div className='menu'>
					<ul>
						<li>
							<Link onClick={closeMenu} href='#Features'>
								Features
							</Link>
						</li>
						<li>
							<Link onClick={closeMenu} href='#APIs'>
								APIs
							</Link>
						</li>
						<li>
							<Link onClick={closeMenu} href='#Pricing'>
								Pricing
							</Link>
						</li>
						<li>
							<Link onClick={closeMenu} href='#Ressources'>
								Ressources
							</Link>
						</li>
					</ul>
					<div className='links'>
						<Link href='/'>Login</Link>
						<Link className='btn-primary' href='/'>
							Demo
						</Link>
						<Link href='/'>FR</Link>
					</div>
				</div>
			</nav>
		</>
	)
}
export default Nav
