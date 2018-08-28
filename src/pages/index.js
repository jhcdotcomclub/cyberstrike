import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({data}) => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <h1>Index</h1>
    {data.allMarkdownRemark.edges.map(post=>(
      <a href={post.node.frontmatter.path}>{post.node.frontmatter.title}</a>
    ))}
  </div>
)

export const pageQuery = graphql`
query IndexQuery {
  allMarkdownRemark{
    edges{
      node{
        frontmatter{
          title
          path
        }
      }
    }
  }
}
`

export default IndexPage
