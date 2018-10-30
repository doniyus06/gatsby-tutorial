export default ({data}) => (
  <div>
    <h1>About {data.site.siteMetadata.title}</h1>
    <p>
      Ini random article, to show how easy to use gatsby js to develop our website.
      I think I should make a website deuh.
    </p>
  </div>
);

export const query = graphql `
    query AboutQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`
