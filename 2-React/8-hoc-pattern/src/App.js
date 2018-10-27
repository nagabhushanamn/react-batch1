import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import TopicList from './components/TopicList';
import CommentList from './components/CommentList';

class App extends Component {
  render() {
    return (
      <div className="container">
        <hr />
        <h1> HOC - Pattern </h1>
        <hr />
        <TopicList />
        <hr/>
        <CommentList />
      </div>
    );
  }
}

export default App;













//-------------------------------------------------


// function f1() {
//   console.log('before:log..');
//   console.log('f1()...');
//   console.log('after:log..');
// }
// f1();

// function f2() {
//   console.log('before:log..');
//   console.log('f2()...');
//   console.log('after:log..');
// }
// f2();


// or

// HOF
function logWrapper(f) {
  return function () {
    console.log('before: log');
    f();
    console.log('after: log');
  }
}
function f1() {
  console.log('f1()...');
}
function f2() {
  console.log('f2()...');
}

let f1WithLog = logWrapper(f1);
f1WithLog();


let f2WithLog = logWrapper(f2);
f2WithLog();


//-------------------------------------------------
