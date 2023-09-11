import Image from 'next/image'

export default function ArticleTitle({ article }) {
	return (
		<>
			<header className='article'>
				<section>
					<div className='container'>
						<h1>{article.title}</h1>
						<div>
							<p>{article.author}</p>
							<p>{article.date}</p>
						</div>
						<Image src={article.img} alt={article.alt} width={1} height={1} sizes='80vw' quality='70' priority />
					</div>
				</section>
			</header>
		</>
	)
}
