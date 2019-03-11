const Post = ({title, summary, author, date, uid}) => (
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
        &nbsp;on {date} </p>
    </div>
    <hr/>
  </React.Fragment>
);

const Blog = () => (
  <React.Fragment>

    <header class="masthead" style={{backgroundImage: "url(/static/img/home-bg.jpg)"}}>
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="site-heading">
              <h1>Clean Blog</h1>
              <span class="subheading">A Blog Theme by Start Bootstrap</span>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <Post author="bill" title="summary" date="Jan 8, 2019" summary="It was a good night learning about headless CMS's" uid="bla"/>
          <div class="clearfix">
            <a class="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default Blog;
