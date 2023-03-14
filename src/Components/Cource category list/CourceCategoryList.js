import { map, range } from "lodash";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../Pages/Layout/Layout";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { categoryApi } from "../../Store2/courseCategory2/courseCategorySlice";
import { useState } from "react";
import { Col, Row } from "reactstrap";
import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";

const CourceCategoryList = () => {
  const dispatch = useDispatch();

  const { allCategoty, loading } = useSelector((state) => ({
    allCategoty: state.category.allCategoty,
    loading: state.category.loading,
  }));
  const courseTable = allCategoty.results;

  const [pages, setPages] = useState(1);

  useEffect(() => {
    dispatch(categoryApi(pages));
  }, [dispatch, pages]);

  const totalPage = Math.ceil(allCategoty?.count / 10);
  const pageToArray = range(1, totalPage + 1);

  return (
    <>
      <Layout>
        <div>
          <h4 style={{ textAlign: "center" }}>COURCE CATEGORY</h4>
          <div
            className="table-wrapper"
            style={{
              fontFamily: "Helvetica",
              WebkitFontSmoothing: " antialiased",
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
                maxWidth: "80%",
                whiteSpace: "nowrap",
                backgroundColor: " white",
              }}
            >
              <thead>
                <tr>
                  <th>#</th>
                  <th>ID</th>
                  <th>Course Category Name</th>
                  <th>Designation</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {map(courseTable, (item, key) => (
                  <tr key={key}>
                    <td></td>
                    <td>{key + 1}</td>
                    <td>{item.course_category_name}</td>
                    <td>{item.designation}</td>

                    <td>
                      <Link to={`/viewCourseCatagory/${item.id}`}>
                        <Button
                          stle={{ color: "black", backgroundColor: "white" }}
                        >
                          View Details
                        </Button>
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

export default CourceCategoryList;
