import { RichText } from 'prismic-reactjs';
import { getApi } from '../config/prismicConfig.js';

// Could plug into something like this: https://www.form.io/ for submission
// Also sendgrid has something that can be used as well.
const ContactForm = ({name_label, email_label, phone_label, message_label, send_label}) => (
  <form name="sentMessage" id="contactForm">
    <div className="control-group">
      <div className="form-group floating-label-form-group controls">
        <label>{name_label}</label>
        <input type="text" className="form-control" placeholder="Name" id="name" required />
        <p className="help-block text-danger"></p>
      </div>
    </div>
    <div className="control-group">
      <div className="form-group floating-label-form-group controls">
        <label>{email_label}</label>
        <input type="email" className="form-control" placeholder="Email Address" id="email" required />
        <p className="help-block text-danger"></p>
      </div>
    </div>
    <div className="control-group">
      <div className="form-group col-xs-12 floating-label-form-group controls">
        <label>{phone_label}</label>
        <input type="tel" className="form-control" placeholder="Phone Number" id="phone" required />
        <p className="help-block text-danger"></p>
      </div>
    </div>
    <div className="control-group">
      <div className="form-group floating-label-form-group controls">
        <label>{message_label}</label>
        <textarea rows="5" className="form-control" placeholder="Message" id="message" required data-validation-required-message="Please enter a message."></textarea>
        <p className="help-block text-danger"></p>
      </div>
    </div>
    <br/>
    <div id="success"></div>
    <div className="form-group">
      <button type="submit" className="btn btn-primary" id="sendMessageButton">{send_label}</button>
    </div>
  </form>
);

const Contact = ({title, subtitle, content, background_image, ...props}) => (
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
          <ContactForm {...props}/>
        </div>
      </div>
    </div>
  </React.Fragment>
);

Contact.getInitialProps = () => {
  return getApi().then( api => {
    return api.getSingle('contact_page');
  }).then( ({data: contactPage}) => {
    return contactPage;
  });
};

export default Contact;
