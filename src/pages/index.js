import React from 'react';
import logo from '../img/webapp.png';
import * as firebase from 'firebase';

var config = {
  apiKey: 'AIzaSyCYmjmHnpdUXaocVbRTDjID1SIEhn3G-aw',
  authDomain: 'replay-qa-landing-page.firebaseapp.com',
  databaseURL: 'https://replay-qa-landing-page.firebaseio.com',
  projectId: 'replay-qa-landing-page',
  storageBucket: '',
  messagingSenderId: '806166173936'
};
firebase.initializeApp(config);

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.saveEmail = this.saveEmail.bind(this);
    this.state = {
      submitted: false
    };
  }

  saveEmail() {
    if (this.state.submitted) {
      return;
    }
    const email = this.refs.email.value;
    if (!email) {
      alert('Please enter a valid email address');
      return;
    }
    const emailRef = firebase.database().ref('emails/');
    const newRow = emailRef.push();
    newRow.set({
      email
    });
    alert(
      'Thanks for signing up! Replay QA is currently in private beta, we will contact you shortly.'
    );
    this.setState({
      submitted: true
    });
  }

  render() {
    return (
      <div>
        <header className="header">
          <div className="container-lrg">
            <div className="col-12 spread">
              <div>
                <a className="logo">Replay QA</a>
              </div>
            </div>
          </div>
          <div className="container-lrg flex">
            <div className="col-6 centervertical">
              <h1 className="heading">
                Test your app with real user sessions.
              </h1>
              <h2 className="paragraph ">
                Record user flows and test your site with replays of real user
                actions. Uncover bugs or regressions with simulated users, not
                real ones.&nbsp;
              </h2>
              <div className="ctas">
                <input
                  ref="email"
                  className="ctas-input"
                  type="text"
                  placeholder="Your Email Address"
                />
                <button className="ctas-button" onClick={this.saveEmail}>
                  Sign Up
                </button>
              </div>
            </div>
            <div className="col-6 sidedevices">
              <div className="computerwrapper">
                <div className="computer">
                  <div className="mask">
                    <img className="mask-img" src={logo} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="feature3">
          <div className="container-lrg flex">
            <div className="col-4">
              <b className="emoji">🏝</b>
              <h3 className="subheading">Setup is a breeze</h3>
              <p className="paragraph">
                Just drop our two lines of javascript into your site and you
                will start recording users sessions instantly.
              </p>
            </div>
            <div className="col-4">
              <b className="emoji">🔧</b>
              <h3 className="subheading">Customizable</h3>
              <p className="paragraph">
                Choose random user sessions or pick those that go through
                critical paths such as a purchase page or a special discount
                banner. Or create your own!
              </p>
            </div>
            <div className="col-4">
              <b className="emoji">🚀</b>
              <h3 className="subheading">Fast</h3>
              <p className="paragraph">
                Our virtual environment is blazing fast and can simulate
                hundreds of users simultanously. Release new code quickly and
                confidently.
              </p>
            </div>
          </div>
        </div>
        <div className="socialproof">
          <div className="container-sml">
            <div className="flex text-center">
              <div className="col-12">
                <h4 className="subheading">
                  "Releasing new code to production used to be the most
                  stressful part of my job. Now we are able to spend more time
                  building new features and less time doing manual testing."
                </h4>
                <p className="paragraph">Kevin Baker - CTO @ Rustic Labs</p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="container-sml text-center">
            <div className="col-12">
              <h5 className="heading">
                Catch bugs with fake users, not real ones. Start today.
              </h5>
              <div className="ctas">
                <input
                  className="ctas-input"
                  type="text"
                  placeholder="Your Email Address"
                />
                <button className="ctas-button" onClick={this.saveEmail}>
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
