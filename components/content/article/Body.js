/* eslint-disable @next/next/no-img-element */

import Link from 'next/link'

export default function ArticleBody({ article }) {
	return (
		<>
			{/* <div
				dangerouslySetInnerHTML={{
					__html: article.body
				}}
			/> */}
			<section className='article'>
				<div className='container-xs'>
					<h2>This is an H2</h2>
					<h3>This is an H3</h3>
					<h4>This is an H4</h4>
					<h5>This is an H5</h5>
					<h6>This is an H6</h6>
					<p>
						This is a paragraph.
						<br />
						Mollit velit id et incididunt reprehenderit anim labore.
						Reprehenderit aliqua consequat culpa. Fugiat elit laborum pariatur
						excepteur pariatur. Cillum incididunt reprehenderit officia veniam
						reprehenderit ea. Cillum duis non ipsum dolore ea irure minim et
						elit laborum. Voluptate aute eu cupidatat enim aliqua culpa ipsum.
						Id eu sit consectetur esse reprehenderit esse culpa consectetur
						ipsum. Reprehenderit ad ad labore culpa adipisicing fugiat aliquip
						enim dolor minim laborum pariatur enim ea. Proident et excepteur
						reprehenderit. Aliqua do proident ullamco aliqua consequat officia.
						Aliquip sunt quis cillum excepteur pariatur Lorem eu duis proident
						do. Duis qui velit amet amet pariatur eiusmod reprehenderit fugiat.
						Laboris tempor deserunt ex. Cillum elit enim reprehenderit esse sit
						exercitation culpa. Sunt ea exercitation labore cupidatat veniam
						ipsum laborum enim ex. Qui id enim fugiat aliquip. Laborum labore
						nulla duis ut excepteur esse.
					</p>
					<p>
						This line is <s>striked through</s>.
					</p>
					<p>
						This line is <strong>bold</strong>.
					</p>
					<p>
						This line is <em>italic</em>.
					</p>
					<ul>
						<li>
							<p>Création de Kairos agency</p>
						</li>
						<li>
							<p>Accompagnement de la transition numérique de l'entreprise</p>
						</li>
					</ul>
					<ol>
						<li>
							<p>Création de Kairos agency</p>
						</li>
						<li>
							<p>Accompagnement de la transition numérique de l'entreprise</p>
						</li>
					</ol>
					<code>
						export default function KairosBlue()&#123;
						return(&#123;very.complicated.code.things &#125;)&#125;
					</code>
					<img src='/images/placeholder.png' alt='' />
					<Link href='/'>
						<p className='btn btn-primary'>Visiter le site</p>
					</Link>
					<blockquote>
						<p>
							Nous parlons de l'instant T, de l'importance du moment présent. De
							l'opportunité à saisir. Nous reflétons par ce nom notre agilité,
							notre passion et notre soif de création.
						</p>
					</blockquote>
				</div>
			</section>
		</>
	)
}
