import { RichText } from 'prismic-reactjs';
import { getApi } from '../config/prismicConfig.js';

const Home = ({title, subtitle, content, background_image = {}}) => (
  <React.Fragment>
    <header className="masthead" style={{backgroundImage: `url(${background_image.url})`}}>
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <div className="page-heading">
              <h1>{title}</h1>
              <span className="subheading">{subtitle}</span>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-10 mx-auto">
          { RichText.render(content) }
        </div>
      </div>
    </div>
  </React.Fragment>
);

Home.getInitialProps = () => {
  return getApi().then( api => {
    return api.getSingle('home_page');
  }).then( ({data: homePage}) => {
    return homePage;
  });
};

export default Home;
