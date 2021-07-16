import {articles} from '../../../data'

// http://localhost:3000/api/articles/${id}
export default function handler({ query: { id }}, res) {
    const filtered = articles.filter(article => article.id === id)
    
    if (filtered.length > 0) {
        res.status(200).json(filtered[0])
    } else {
        // 404 for not found
        res.status(404).json({message: '${id} not found'})
    }
}