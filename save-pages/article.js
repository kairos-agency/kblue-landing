import ArticleTitle from '../components/content/article/Title'
import ArticleBody from '../components/content/article/Body'

import { article } from '../utils/pages/article'

export default function Article() {
	return (
		<>
			<ArticleTitle article={article} />
			<ArticleBody article={article} />
		</>
	)
}
