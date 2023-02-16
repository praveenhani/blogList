// Write your JS code here
import BlogItem from '../BlogItem'

import './index.css'

const BlogList = props => {
  const {blogsList} = props

  return (
    <ul className="blog-list">
      {blogsList.map(eachList => (
        <BlogItem key={eachList.id} blogItem={eachList} />
      ))}
    </ul>
  )
}

export default BlogList
