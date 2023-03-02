import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Card from "./components/Card";
import Avtar from "./components/Avtar";



const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



// const name = 'shahsant'
// const headingStyle = {
//   backgroundColor:'red',
//   padding : '20px',
//   border:'2px solid green'
// };

// const sayHi = false

// let subheading = ''
// if (sayHi) {
//   subheading = "Hi"
// } else {
//   subheading = "Bye"
// }




// const myVar = (
//   <div>
//     <h1 style={headingStyle} className="heading">Hello I am in JsX {name}</h1>
//     <p className='subheading'>{sayHi ? "Hi":"Bye"}</p>
//   </div>
// ) ;

// root.render(myVar)


// function myClock() {
//   root.render (
//     <div>
//       <p style={{fontSize: '4rem'}}>{new Date().toLocaleTimeString()}</p>
//       <h2>this will not get re-rendered</h2>
//     </div>
//   );
//     setTimeout(myClock,1000)
// }

// myClock();




// class component 

// class Welcome extends React.Component{
//   render() {
//     return <h1>Hello,{this.props.name}</h1>
//   }
// }

// functional component 

// function Welcome (props) {
//   return <h1>Hello ,{props.name}</h1>
// }

