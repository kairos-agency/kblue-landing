/* eslint-disable @next/next/no-img-element */
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
						<img src={article.img} alt={article.alt} />
					</div>
				</section>
			</header>
		</>
	)
}
