

const BlogPostPage = () => (
  <React.Fragment>

    <header class="masthead" style={{backgroundImage: 'url(img/post-bg.jpg)'}}>
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="post-heading">
              <h1>Man must explore, and this is exploration at its greatest</h1>
              <h2 class="subheading">Problems look mighty small from 150 miles up</h2>
              <span class="meta">Posted by&nbsp;
                <a href="#">Start Bootstrap</a>
                &nbsp;on August 24, 2019</span>
            </div>
          </div>
        </div>
      </div>
    </header>

    <article>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            Content - to be filled in by CMS
          </div>
        </div>
      </div>
    </article>

  </React.Fragment>
);

export default BlogPostPage;

