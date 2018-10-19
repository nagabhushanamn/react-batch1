console.log('-index.js-');

import React from 'react';
import ReactDOM from 'react-dom'; // virtual DOM
import 'bootstrap/dist/css/bootstrap.css';


//----------------------------------------------------------
/*

    <div class="alert alert-info">
        <span class="badge badge-primary">Hello World!</span>
    </div>

*/
//----------------------------------------------------------


//----------------------------------------------------------
// step-1: define UI component's class
//----------------------------------------------------------

//way-1: pure-javascript


// class Greeting extends React.Component {
//     render() {
//         let spanEle = React.createElement('span', { className: 'badge badge-primary' }, 'Hello World')
//         let divEle = React.createElement('div', { className: 'alert alert-info' }, spanEle);
//         return divEle;
//     }
// }


//----------------------------------------------------------

// way-2: using JSX  
class Greeting extends React.Component {
    render() {
        return (
            <div className="alert alert-info">
                <span className="badge badge-primary">Hello World!</span>
            </div>
        );
    }
}

//----------------------------------------------------------


// step-2: instantiate component & render to virtual DOM
// let greeting1 = React.createElement(Greeting, null, null);
// or
let greeting1 = <Greeting />
ReactDOM.render(greeting1, document.getElementById('root'));

//----------------------------------------------------------



