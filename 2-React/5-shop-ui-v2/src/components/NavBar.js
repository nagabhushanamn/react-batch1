// import React, { Component } from 'react';
// way-1: class syntax
// import PropTypes from 'prop-types'
// class NavBar extends Component {
//     render() {
//         let { title } = this.props;
//         return (
//             <div>
//                 <nav className="navbar navbar-light bg-primary">
//                     <a className="navbar-brand" href="/">{title}</a>
//                 </nav>
//             </div>
//         );
//     }
// }

// NavBar.propTypes = {
//     title: PropTypes.string
// };

// export default NavBar;

//-------------------------------------------------------------------------------------

// way-2 : function syntax


import React from 'react';

// export default function navBar(props) {
//     let { title } = props;
//     return (
//         <div>
//             <nav className="navbar navbar-light bg-primary">
//                 <a className="navbar-brand" href="/">{title}</a>
//             </nav>
//         </div>
//     );
// }
// or
// export default function navBar({ title }) {
//     return (
//         <div>
//             <nav className="navbar navbar-light bg-primary">
//                 <a className="navbar-brand" href="/">{title}</a>
//             </nav>
//         </div>
//     );
// }
// or

export default ({ title }) => {
    return (
        <div>
            <nav className="navbar navbar-light bg-primary">
                <a className="navbar-brand" href="/">{title}</a>
            </nav>
        </div>
    );
}


//-------------------------------------------------------------------------------------