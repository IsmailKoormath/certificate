import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { NavItem } from "reactstrap";
import {map} from "lodash";
import Layout from "../../Pages/Layout/Layout";
import CreateReducer from "../../Store/students/reducer";
import { studentApi } from "../../Store/students/useApi";
import { Link } from "react-router-dom";


const Students = () => {
  const dispatch = useDispatch();

  const {allStudent,loading} = useSelector((state) => ({
    allStudent: state.CreateReducer.allStudent,
    loading: state.CreateReducer.loading,
  }));
  console.log(allStudent);
 
  useEffect(() => {
    dispatch(studentApi());
  }, []);

 

  const tableData = allStudent?.results;

  // console.log(tableData);


  return (
    <>
      <Layout>
        <div style={{marginLeft:"20px"}}>
          <h4 style={{ textAlign: "center" }}>STUDENTS</h4>
          <div
            className="table-wrapper"
            style={{
              fontFamily: "Helvetica",
              WebkitFontSmoothing: " antialiased",

              marginBottom: "20px",
              display: "flex",

              justifyContent: "center",
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
                  <th>id</th>
                  <th>name</th>
                  <th>phone</th>
                  <th>email</th>
                  <th>Joining Date</th>
                  <th>DOB</th>
                  <th>Designation</th>
                  <th>Photo</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {map(tableData,(item, key) =>(
                <tr key={key}>
                  <th scope="row"></th>
                  <td>{item?.full_name}</td>
                 
                  <td>{item?.phone}</td>
                  <td>{item?.email}</td>
                  <td>{item?.start_date}</td>
                  <td>{item?.dob}</td>
                  <td>{item?.designation}</td>
                  <td>{item?.photo}</td>
                  <td>
                    <Link to={`/studentview/${item.id}`}>
                    <button stle={{ color: "black", backgroundColor: "white" }}>
                      View
                    </button>
                    </Link>
                  </td>
                </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Students;
