import { map } from "lodash";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Row } from "reactstrap";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button, Card, Container, Form } from "react-bootstrap";
import { CardBody, CardTitle, Input } from "reactstrap";
import Layout from "../../Pages/Layout/Layout";
import { createStudentCourseApi } from "../../Store2/studentCourse/studentCourseSlice";

const CreateStudentCourse = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const [stdCourse, setStdCourse] = useState({});

  const { allStudents, allCourse, loading } = useSelector((state) => ({
    allStudents: state.students.allStudents,
    allCourse: state.course.allCourse,
    loading: state.loading,
  }));


  const Handle = (e) => {
    setStdCourse({
      ...stdCourse,
      [e.target.name]: e.target.value,
    });
  };

  const catId = params.id;

  const handleSubmitStdCourseCreate = (e) => {
    e.preventDefault();
    dispatch(createStudentCourseApi({navigate,stdCourse,catId}));
  };


const students = allStudents.results
const courses = allCourse.results


  return (
    <div>
      <Layout>
        <Container fluid>
          <Row>
            <Col xl="3"></Col>
            <Col xl="6" style={{ paddingTop: "15px" }}>
              <Card>
                <CardBody>
                  <CardTitle>
                    <h1>Student Course</h1>
                  </CardTitle>
                  <Form onSubmit={handleSubmitStdCourseCreate}>
                    <Row>
                      <Col xl={12}>
                        <div className="form-group">
                          <label className="col-form-label">
                            <b>Student</b>
                          </label>

                          <div className="form-group">
                          

                            <select
                              style={{
                                width: "50%",
                                height: "35px",
                                borderRadius: "7px",
                                border: "1px solid #ced4da",
                                padding: "0 10px",
                              }}
                              type="select"
                              className="col-form"
                              name="student"
                              onChange={(e) => Handle(e)}
                            >
                              <option className="text-muted">
                                select a student...
                              </option>
                              {map(students, (item, key) => (
                                <option value={item.id}>
                                  {item.full_name}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-form-label">
                            <b>Course</b>
                          </label>

                          <div className="form-group">
                            <select
                              style={{
                                width: "50%",
                                height: "35px",
                                borderRadius: "7px",
                                border: "1px solid #ced4da",
                                padding: "0 10px",
                              }}
                              className="col-form"
                              name="course"
                              onChange={(e) => Handle(e)}
                            >
                              <option>select your course...</option>
                              {map(courses, (item, key) => (
                                <option value={item.id}>
                                  {item.course_name}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-form-label">
                            <b>Progress</b>
                          </label>
                          <Input
                            type="text"
                            name="progress"
                            required={true}
                            className="form-control"
                            aria-errormessage="invalied text"
                            onChange={(e) => Handle(e)}
                          />
                        </div>
                        <div
                          style={{
                            paddingTop: "15px",
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Link to={`/students`}>
                            <Button type="button">back</Button>
                          </Link>

                          <Button type="submit" color="success">
                            Create
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  </Form>
                  `
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </Layout>
    </div>
  );
};

export default CreateStudentCourse;
