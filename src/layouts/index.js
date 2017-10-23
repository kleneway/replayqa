import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import './index.css';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Replay QA - software testing with real user sessions"
      meta={[
        {
          name: 'description',
          content: 'Test your site with recorded user sessions'
        },
        {
          name: 'keywords',
          content:
            'software testing, selenium, qa, user testing, automated testing'
        }
      ]}
      link={[
        {
          rel: 'icon',
          sizes: '16x16',
          href: require('./favicon.png')
        }
      ]}
    />
    {children()}
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
