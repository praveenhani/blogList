// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogItem} = props

  const {title, description, publishedDate} = blogItem

  return (
    <li className="blog-item">
      <div className="description-container">
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
      </div>
      <p className="publishedDate">{publishedDate}</p>
    </li>
  )
}

export default BlogItem
