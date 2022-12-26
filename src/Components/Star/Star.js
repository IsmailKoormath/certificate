import React from 'react'
import { Rating } from 'react-simple-star-rating'
import { Button } from 'react-bootstrap';
const Star = () => {
  return (
    <div className="rating">
      <img
        style={{ marginLeft: "60%" ,marginTop:"80px"}}
        src=""
        className="d-flex justify-content-end"
      />
      <div style={{ marginLeft: "100px", paddingBottom: "40px", }}>
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
        <h1 className="center">
          <span style={{ marginLeft: "84px" }}>
           
            <Rating />
          </span>
        </h1>
      </div>
      <div style={{ marginLeft: "115px",marginBottom:"6px" }}>
        <div className="d-flex">
          <h5 style={{fontFamily:"Josefin Sans"}} >HTML </h5>
          <span style={{ marginLeft: "150px" }}>
            
          </span>
        </div>

        <div className="d-flex">
          <h5 style={{fontFamily:"Josefin Sans"}}>CSS</h5>
          <span style={{ marginLeft: "170px" }}>
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
          <span style={{ marginLeft: "143px" }}>
            <Rating />
          </span>
        </div>

        <div className="d-flex">
          <h5 style={{fontFamily:"Josefin Sans"}}>Bootstrap</h5>
          <span style={{ marginLeft: "116px" }}>
            <Rating />
          </span>
        </div>

        <div className="d-flex">
          <h5 style={{fontFamily:"Josefin Sans"}}>SASS</h5>
          <span style={{ marginLeft: "152px" }}>
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
      <Button style={{marginLeft:"39rem"}}
      color="success"
      className="print_hide"
      
    >
      download the file
    </Button>
      <div className="last-img">
        <img src="" />
      </div>
    </div>
  )
}

export default Star