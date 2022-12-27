import React, { useEffect, useState } from "react";
import { FaAward, IconName } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { mainCertificate } from "../../Store/students/useApi";
import Star from "../Star/Star";

const Certificate = () => {
// const [model,setModal]=useState(false)
const params = useParams()
const dispatch = useDispatch()

// useEffect(() => {
//   setModal(true);
// }, [setModal]);

const {Certificate,loading}=useSelector((state)=>({
Certificate:state.createReducer?.studentCertificate,
loading:state.createReducer?.loading
}))

useEffect(()=>{
  dispatch(mainCertificate(params.id))
},[dispatch])

  return (
    <div
      style={{
        size: "a",
      }}
    >
      <style>
        {`
        @media print{
          .print_hide{
            display:none;
          }
        }
        `}
      </style>

      <div className="good">
        <img
          style={{ marginLeft: "60%" }}
          src=""
          className="d-flex justify-content-end"
        />

        <div
          style={{
            position: "absolute",
            textAlign: "center",
            marginLeft: "450px",
            marginTop: "50px",
          }}
        >
          <img style={{ marginLeft: "5%", width: "20%" }} src="" />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontStyle: "paratype",
              marginTop: "10px",
              justifyContent: "center",
              marginLeft: "60px",
            }}
          >
            <h5
              className="hello"
              style={{
                fontSize: "54px",
                color: "rgb(37, 55, 89)",
                textAlign: "center",
              }}
            > 
              <div className="done" style={{ fontFamily: "fantasy" }}>
                Certificate
              </div>
              </h5>
              <h5
                style={{
                  marginBottom: "15px",
                  fontFamily: "quicksand,san-serif",
                  fontSize: "27px",
                }}
              >
                Of Experience
              </h5>
              <br />
            
          </div>

          <div
            style={{
              minHeight: "100vh",

              marginBottom: "30px",
              textAlign: "center",

              fontWeight: "500",
            }}
          >
            <b></b>
            <div>
              <b>
                <h6
                  style={{
                    fontWeigt: "400",
                    fontSize: "20px",
                    marginTop: "30px",
                    paddingBottom: "4px",
                  }}
                >
                  this certify that
                </h6>
              </b>
              <b>
                <h1
                  className="font"
                  style={{
                    fontSize: "30px ",
                    color: "rgb(37, 55, 89)",
                    minWidth: "15px",
                    fontFamily: "Patrick Hand SC,cursive",
                  }}
                >
                  <div
                    className=""
                    style={{ minWidth: "20px", paddingBottom: "35px" }}
                  > {Certificate?.full_name}</div>
                </h1>
              </b>
            </div>

            <div style={{ fontFamily: "'Josefin Sans'" }}>
              <h5>
                was employed at
                <b style={{ fontFamily: "cursive", fontSize: "16px" }}>
                  Xanthrone e-solutions
                </b>
                as a
                <b
                  className="font"
                  style={{
                    color: "rgb(37, 55, 89)",
                    fontSize: "20px",
                    minWidth: "15px",
                    fontStyle: "bold",
                  }}
                >
                  web application developer,
                  <br />
                </b>
                <span style={{ fontFamily: "Josefin Sans" }}>from</span>
                <b
                  style={{
                    fontSize: "20px",
                    minWidth: "5px",
                    fontFamily: "Josefin Sans",
                  }}
                >{Certificate?.start_date}</b>
                <b
                  style={{
                    fontSize: "20px",
                    minWidth: "5px",
                  }}
                >
                  
                  to {Certificate?.end_date},
                </b>
                while showcasing aprofessional<br></br> commandable work
                attitude throughout the specified time period.
              </h5>
              <div className="">
                <h5>We wish all the best in his/her future endeavors</h5>
              </div>
              <div
                style={{
                  marginTop: "130px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span></span>
                <span></span>
                <span></span>
                <span style={{ fontSize: "18px", marginRight: "50px" }}>
                  CEO
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="last-img" style={{ marginTop: "500px" }}>
        <img src="" />
      </div>
      <Star />
    </div>
  );
};

export default Certificate;
