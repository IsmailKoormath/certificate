import { map } from "lodash";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../Pages/Layout/Layout";
import createCourseCategoryReducer from "../../Store/courseCategory/reducer";
import { getCategoryApi } from "../../Store/courseCategory/useApi";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CourceCategoryList = () => {
  const dispatch = useDispatch();

  const { courseCatagory, loading } = useSelector((state) => ({
    courseCatagory: state.createCourseCategoryReducer.courseCatagory,
    loading: state.createCourseCategoryReducer.loading,
  }));

  useEffect(() => {
    dispatch(getCategoryApi());
  }, [dispatch]);

  const courseTable = courseCatagory?.results;
  console.log(courseTable);
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
                {map(courseTable,(item, key) => (
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
      </Layout>
    </>
  );
};

export default CourceCategoryList;
