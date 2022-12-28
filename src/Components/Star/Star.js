import React from 'react'
import { Rating } from 'react-simple-star-rating'
import { Button } from 'react-bootstrap';
import Border from "../../Images/border.png";
// import { transform } from 'lodash';
const Star = () => {
const print=()=>{
  window.print()
}

  return (
    <div className="rating" style={{size:"a4", display:"flex",flexDirection:"column"}}>
      <img
        style={{  width:"300px"}}
        src={Border}
        className="d-flex justify-content-end"
      />
      <div style={{marginLeft:"50px"}}>
      <div style={{ marginLeft: "140px", paddingBottom: "40px",marginTop:"-100px" }}>
        <h2 className="center" style={{ marginLeft: "110px",  color: "rgb(37, 55, 89)",}}>
          
          ScoreCard
        </h2>
        <h4 style={{fontFamily:"Josefin Sans"}}>( Based on Practices and Assenssments)</h4>
        <h2
          className="center"
          style={{
            color: "rgb(37, 55, 89)",
            marginLeft:"26px"
            
          }}
        >
          Web Application Developer
        </h2>
        
      </div>
      <div style={{ marginLeft: "115px",marginBottom:"6px" }}>
        <div className="d-flex">
          <h5 style={{fontFamily:"Josefin Sans"}} >HTML </h5>
          <span style={{ marginLeft: "140px" }}>
          <Rating />
          </span>
        </div>

        <div className="d-flex">
          <h5 style={{fontFamily:"Josefin Sans"}}>CSS</h5>
          <span style={{ marginLeft: "160px" }}>
            <Rating />
          </span>
        </div>

        <div className="d-flex">
          <h5 style={{fontFamily:"Josefin Sans"}}>Git & Gitlab</h5>
          <span style={{ marginLeft: "96px" }}>
            <Rating />
          </span>
        </div>

        <div className="d-flex">
          <h5 style={{fontFamily:"Josefin Sans"}}>JavaScript</h5>
          <span style={{ marginLeft: "113px" }}>
            <Rating />
          </span>
        </div>

        <div className="d-flex">
          <h5 style={{fontFamily:"Josefin Sans"}}>jQuery</h5>
          <span style={{ marginLeft: "140px" }}>
            <Rating />
          </span>
        </div>

        <div className="d-flex">
          <h5 style={{fontFamily:"Josefin Sans"}}>Bootstrap</h5>
          <span style={{ marginLeft: "118px" }}>
            <Rating />
          </span>
        </div>

        <div className="d-flex">
          <h5 style={{fontFamily:"Josefin Sans"}}>SASS</h5>
          <span style={{ marginLeft: "148px" }}>
            <Rating />
          </span>
        </div>

        <div className="d-flex">
          <h5 style={{fontFamily:"Josefin Sans"}}>React js</h5>
          <span style={{ marginLeft: "130px" }}>
            <Rating />
          </span>
        </div>
      </div>
      <Button style={{marginLeft:"14rem",width:"150px"}}
      color="success"
      className="print_hide"
      onClick={print}
    >
      download the file
    </Button>
    </div>
      <div className="last-img">
        <img src={Border}
         style={{width:"300px",marginTop:"", marginLeft:"450px", transform:"rotate(180deg)" }}/>
      </div>
    </div>
  )
}

export default Star