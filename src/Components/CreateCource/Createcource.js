import { map } from "lodash";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Col, Container, Row } from "reactstrap";
import Layout from "../../Pages/Layout/Layout";
import { createCourseApi } from "../../Store2/course2/courseSlice";
import { categoryApi } from "../../Store2/courseCategory2/courseCategorySlice";

const Createcource = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [input, setInput] = useState();

  const Handle = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitCreateCourse = (e) => {
    e.preventDefault();
    if (input) {
      dispatch(createCourseApi({input, navigate}));
    }
  };
  useEffect(()=>{
dispatch(categoryApi())
  },[])
  const { allCategoty } = useSelector((state) => ({
    allCategoty: state.category.allCategoty,
  }));

  return (
    <>
      <Layout>
        <div className="page-content">
          <Container fluid>
            <div className="container-fluid">
              <Container>
                <Row>
                  <Col xl="3"></Col>
                  <Col xl="6">
                    <div className="container my-5">
                      <div className="row justify-content-center my-5">
                        <div className="col-sm-6 shadow rounded g-5">
                          <h1 className="text-center pt-3 text-secondery h2">
                            <b>Create Course</b>
                          </h1>
                          <form
                            style={{ padding: "10px" }}
                            onSubmit={handleSubmitCreateCourse}
                          >
                            <div className="form-group">
                              <label className=" col=-form-label">
                                <b>Course Name:</b>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name="course_name"
                                required
                                onChange={(e) => Handle(e)}
                              />
                            </div>
                            <div className="form-group">
                              <label className=" col=-form-label">
                                <b>Duration:</b>
                              </label>
                              <input
                                type="number"
                                name="duration"
                                className="form-control"
                                required
                                onChange={(e) => Handle(e)}
                              />
                            </div>
                            <div className="form-group">
                              <label className=" col-form-label">
                                <b>Course Category:</b>
                              </label>

                              <div className="form-group">
                                <select
                                  className="col-form-label"
                                  name="course_category"
                                  
                                  onChange={(e) => Handle(e)}
                                >
                                  <option>choose course category...</option>
                                  {map(allCategoty.results, (item) => (
                                    <option value={item.id}>
                                      {item?.course_category_name}
                                      
                                    </option>
                                  ))}
                                </select>
                              </div>

                              <div
                                style={{
                                  paddingTop: "15px",
                                  display: "flex",
                                  justifyContent: "space-between",
                                }}
                              >
                                <Button
                                  type={"submit"}
                                  style={{
                                    backgroundColor: "MediumSeaGreen",
                                    color: "white",
                                    padding: "3px 20px 3px 20px",
                                  }}
                                >
                                  {" "}
                                  create
                                </Button>
                                <Button
                                  style={{
                                    color: "black",
                                    backgroundColor: "white",
                                    padding: "3px 20px 3px 20px",
                                    borderRadius: "5px",
                                  }}
                                  onClick={() => {
                                    navigate("/dashboard");
                                  }}
                                >
                                  {" "}
                                  back
                                </Button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </Container>
        </div>
      </Layout>
    </>
  );
};

export default Createcource;
