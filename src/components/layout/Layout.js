import React from 'react'
import PropTypes from 'prop-types'

// Components
import Header from '../header/Header'

// Styles
import styles from './Layout.module.css'

const Layout = ({ children }) => (
  <>
    <Header />
    <main className={ styles.ContentWrapper }>
      { children }
    </main>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
