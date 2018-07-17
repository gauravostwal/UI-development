import React from 'react';
import Logo from '../../assets/loader1.gif';

class Loader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
<div className="loader-down">
             <img src={Logo} className="imagePlay justify-content-center" alt="Image" />
            {/*  <h6>Enter a name in the Searchbar to get the info</h6> */}
</div>
);
    }
}
export default Loader;
