import "./styles.scss";

import mailIcon from "../../assets/mail-icon.svg";

function Newsletter(props) {
  return (
    <div className="newsletter">
      <div className="newsletter__info">
        <h3 className="title">
          <img alt="mail icon" src={mailIcon} />
          Sign Up & Stay Connected
        </h3>
        <p className="description">
          Sign up for the newsletter and get 20% off! Gain access to exclusive
          offers and be the first to know when new stuff drops!
        </p>
        {!props.isMobile && (
          <form className="subscribe-form">
            <input type="text" placeholder="Enter Your Email Address" />
            <button class="cta button button--secondary button--secondary--with-border">
              SUBSCRIBE
            </button>
          </form>
        )}
      </div>
      {props.isMobile && (
        <button className="cta button button--secondary button--secondary--with-border">
          SUBSCRIBE
        </button>
      )}
    </div>
  );
}

export default Newsletter;
