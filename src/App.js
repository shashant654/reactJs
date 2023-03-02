// import logo from './logo.svg';
// import './App.css';
import Card from "./components/Card"
import Avtar from './components/Avtar';
// import firstImg from './components/NatureImg/agustin-visconti-pk11NMBIMig-unsplash - Copy.jpg'

function App() {
  
  // const myName = "shashant"
  const gridBox = {
    display:'grid',
    gridTemplateColumns:'repeat(3,1fr)'
  }

  return (

    // <div>
    //   <Card name="Shashant Shekhar" email="shahsantshkhar11@gmail.com" />
 
    // </div>




    <div style={gridBox}>
    <Card name="Shashant Shkhar" email="shahsantshkhar11@gmail.com"  image="https://images.unsplash.com/photo-1677566133417-a86d5eb7fab0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8&auto=format&fit=crop&w=360&q=60" />

    <Card name="Shashant Shkharr" email="shahsantshkhar111@gmail.com" image="https://images.unsplash.com/photo-1677568556685-09e40967e1f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=360&q=60"/>

    <Card name="Shashantt Shkhar" email="shahsantshkhar1111@gmail.com" image="https://images.unsplash.com/photo-1677567998996-1e6a16ccca2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=360&q=60"/>



    <Card name="Shashantt Shkhar" email="shahsantshkhar1111@gmail.com" image="https://images.unsplash.com/photo-1677567998996-1e6a16ccca2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=60"/>


    <Avtar name="Random" image="./components/NatureImg/agustin-visconti-pk11NMBIMig-unsplash.jpg"/>
  </div>
)

  
}

export default App;


