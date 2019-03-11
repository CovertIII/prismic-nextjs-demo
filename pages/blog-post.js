import { getApi } from '../config/prismicConfig.js';
import { RichText } from 'prismic-reactjs';

const BlogPostPage = ({title, summary, published_at, author, image, content}) => (
  <React.Fragment>
    <header class="masthead" style={{backgroundImage: `url(${image.url})`}}>
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="post-heading">
              <h1>{title}</h1>
              <h2 class="subheading">{summary}</h2>
              <span class="meta">Posted by&nbsp;
                <a href="#">{author}</a>
                &nbsp;{published_at}</span>
            </div>
          </div>
        </div>
      </div>
    </header>

    <article>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            { RichText.render(content) }
          </div>
        </div>
      </div>
    </article>

  </React.Fragment>
);

BlogPostPage.getInitialProps = ({query}) => {
  return getApi().then( api => {
    return api.getByUID('blog_post', query.id);
  }).then( ({data: blogPost}) => {
    return blogPost;
  });
};

export default BlogPostPage;

