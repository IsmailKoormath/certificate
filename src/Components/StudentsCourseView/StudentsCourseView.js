import React from 'react'
import Layout from "../../Pages/Layout/Layout";
import { Button } from "react-bootstrap";
import {map} from 'lodash'
import { Link} from "react-router-dom";

const StudentsCourseView = () => {
  return (
    <Layout>
    <div
      className="table-wrapper"
      style={{
        fontFamily: "Helvetica",
        WebkitFontSmoothing: " antialiased",
        background: " rgba( 71, 147, 227, 1)",
      }}
    >
      <table
        className="fl-table"
        style={{
          borderRadius: "5px",
          fontSize: " 12px",
          fontWeight: "normal",
          border: "none",
          borderCollapse: "collapse",
          width: "100%",
          maxWidth: "100%",
          whiteSpace: "nowrap",
          backgroundColor: " white",
        }}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Course</th>
            <th>Student</th>
           
          </tr>
        </thead>
        <tbody>
          
            <tr >
              <th scope="row"></th>
              <td></td>
              <td></td>
              <td></td>
             
              <td>
               <Link to={`/studentview/`}>
                  <Button stle={{ color: "black", backgroundColor: "white" }}>
                    View Details
                  </Button>
                </Link>
              </td>
            </tr>
          
        </tbody>
      </table>
    </div>
  </Layout>
  )
}

export default StudentsCourseView