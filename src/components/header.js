import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import '../styles/variables.css';

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `var(--top-nav-bar-margin-bottom)`,
    }}
  >
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        margin: `0 auto`,
        maxWidth: 960,
        padding: `12px 1.0875rem`,
        height: '80px',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
