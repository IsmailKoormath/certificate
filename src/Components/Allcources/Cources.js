import { map, range } from "lodash";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IoEye } from "react-icons/io5";
import Layout from "../../Pages/Layout/Layout";
import { coursesApi } from "../../Store2/course2/courseSlice";
import { Col, Row } from "reactstrap";
import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";

const Cources = () => {
  const dispatch = useDispatch();

  const { allCourse, loading, pageCount } = useSelector((state) => ({
    allCourse: state.course.allCourse,
    loading: state.course.loading,
  }));
  const CourseStore = allCourse.results;

  const [pages, setPages] = useState(1);

  useEffect(() => {
    dispatch(coursesApi(pages));
  }, [dispatch, pages]);

  const totalPage = Math.round(pageCount / 10);
  const pageToArray = range(1, totalPage + 1);

  return (
    <>
      <Layout>
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
            textAlign: "center",
            marginLeft: "20px",
            marginTop: "20px",
          }}
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>Cource Name</th>
              <th>Duration</th>
              <th>Course Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {map(CourseStore, (item, key) => (
              <tr key={key}>
                <td>{key + 1}</td>
                <td>{item.course_name}</td>
                <td>{item?.duration}</td>
                <td>{item?.course_category}</td>
                <td>
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to={`/coursesingleview/${item.id}`}
                  >
                    <IoEye style={{ fontSize: "25px" }} />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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

export default Cources;
