import { node } from 'prop-types';

import Footer from "./components/Footer"
import Header from "./components/Header"

const Wrapper = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

Wrapper.propTypes = {
    children: node.isRequired,
};
  
export default Wrapper
  