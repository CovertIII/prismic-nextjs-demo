import Prismic from 'prismic-javascript';
import { RichText } from 'prismic-reactjs';
import { getApi } from '../config/prismicConfig.js';

const Post = ({title, summary, author, published_at, uid}) => (
  <React.Fragment>
    <div class="post-preview">
      <a href={`/blog-post?id=${uid}`}>
        <h2 class="post-title">
          {title}
        </h2>
        <h3 class="post-subtitle">
          {summary}
        </h3>
      </a>
      <p class="post-meta">Posted by&nbsp;
        <a>{author}</a>
        &nbsp;on {published_at} </p>
    </div>
    <hr/>
  </React.Fragment>
);

const Blog = ({blogPage, posts}) => (
  <React.Fragment>

    <header class="masthead" style={{backgroundImage: `url(${blogPage['background-image'].url})`}}>
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="site-heading">
              <h1>{blogPage.title}</h1>
              <span class="subheading">{blogPage.subtitle}</span>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          { posts.map( ({data: post, uid}) => (
            <Post {...post} uid={uid} />
          ))}

          {/* TODO get this working...
          <div class="clearfix">
            <a class="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
          </div>
          */}
        </div>
      </div>
    </div>
  </React.Fragment>
);

Blog.getInitialProps = () => {
  return getApi().then( api => {
    return Promise.all([
      api.getSingle('blog_page'),
      api.query(
        Prismic.Predicates.at('document.type', 'blog_post'),
        { orderings : '[my.blog_post.publishedAt]' }
      )
    ]);
  }).then( ([{data: blogPage}, {results: posts}]) => {
    return {
      blogPage,
      posts
    };
  });
};

export default Blog;
