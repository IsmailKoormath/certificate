import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { map, range } from "lodash";
import Layout from "../../Pages/Layout/Layout";
import { Link } from "react-router-dom";
import moment from "moment";
import { studentsApi } from "../../Store2/Students2/studentSlice";
import { Col, Row } from "react-bootstrap";
import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";
import LoadingSpinner from "../Loading/Loading";



const Students = () => {
  const dispatch = useDispatch();

  const { allStudents, loading, pageCount } = useSelector((state) => ({
    allStudents: state.students.allStudents,
    loading: state.students.loading,
  }));

  const tableData = allStudents.results;
  console.log(allStudents);

  const [pages, setPages] = useState(1);

  useEffect(() => {
    dispatch(studentsApi(pages));
  }, [dispatch, pages]);

  const totalPage = Math.round(pageCount / 10);
  const pageToArray = range(1, totalPage + 1);

 
   

  return (
    <>
      <Layout>
     
        <div style={{ marginLeft: "20px" }}>
          {loading && <LoadingSpinner/>}
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
                {map(tableData, (item, key) => (
                  <tr key={key}>
                    <td>{key+1}</td>
                    <td>{item?.full_name}</td>
                    <td>{item?.phone}</td>
                    <td>{item?.email}</td>
                    <td>{moment(item?.start_date).format("Do MMMM YYYY")}</td>
                    <td>{moment(item?.dob).format("Do MMMM YYYY")}</td>{" "}
                    {/*moment().format('MMMM Do YYYY, h:mm:ss a')*/}
                    <td>{item?.designation}</td>
                    <td>{item?.photo}</td>
                    <td>
                      <Link to={`/studentview/${item.id}`}>
                        <button
                          stle={{ color: "black", backgroundColor: "white" }}
                        >
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
        <div
          className="shadow p-3 mb-5 bg-white rounded"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "400px",
            height: "50px",
            background: "white",
            marginLeft: "300px",
            borderRadius: "20px",
          }}
        >
          <Row>
            <Col>
              <HiArrowCircleLeft
                style={{ cursor: "pointer" }}
                onClick={() => setPages(pages - 1)}
              />
            </Col>
            {map(pageToArray, (page) => (
              <Col
                style={{ cursor: "pointer" }}
                className={pages === page && "active"}
                onClick={() => setPages(page)}
              >
                {pages}
              </Col>
            ))}
            {/* <Col style={{ cursor: "pointer" }} onClick={() => {
                    setPages(pages + 1);
                  }}>{pages }</Col> */}
            <Col>
              <HiArrowCircleRight
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setPages(pages + 1);
                }}
              />
            </Col>
          </Row>
        </div>
      </Layout>
    </>
  );
};

export default Students;
