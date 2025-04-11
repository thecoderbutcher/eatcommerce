import PropTypes from 'prop-types';
import Header from './components/Header';
import Footer from './components/Footer';
const Layout = ({ children }) => {
  return (
    <div className='text-white'>
        <Header />
        {children}
        <Footer />
    </div>
  )
}

export default Layout

Layout.propTypes = { children: PropTypes.node.isRequired };