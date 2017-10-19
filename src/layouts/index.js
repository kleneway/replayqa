import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import './index.css';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Replay QA - test with real user sessions"
      meta={[
        {
          name: 'description',
          content: 'Test your site with recorded user sessions'
        },
        { name: 'keywords', content: 'testing, qa, test' }
      ]}
    />
    {children()}
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
