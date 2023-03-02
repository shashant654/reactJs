import React from "react";
import Avtar from "./Avtar";

function Card({name, ...props}) {


    const cardStyle ={
      padding:'10px',
      border:'2px solid black',
      margin:'20px',
      boxShadow :'2px 2px 2px gray',
    //   height:'300px'
    //   display:'flex'
      
    }

    const btnStyle = {
        backgroundColor : '#0c0bed',
        color : 'white',
        border :'none',
        borderRadius:'15px',
        width:'150px',
        height :'40px',
        marginBottom:'40px'
    }

    // const imgStyle = {
    //     height:'200px',
    //     width:'300px'
    // }

    // const paraStyle ={
    //     // marginBottom:'100px'
    // }

    function btnclik(event) {
        event.preventDefault();
      console.log("downloaded");

    }


  
    return (
      <div style={cardStyle}>
        <Avtar image ={props.image} name ={name}/>
        
        {/* <img style={imgStyle} className="imageClass" src="./NatureImg/agustin-visconti-pk11NMBIMig-unsplash - Copy.jpg" alt="" /> */}
        <p>{name}</p>
        <p>{props.email}</p>
        <button onClick={btnclik} style={btnStyle} className="bttn">Download</button>

      </div>
    )
  }

  export default Card;