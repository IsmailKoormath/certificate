import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Card, Button, Form, Row, Col, CardBody } from "reactstrap";
import Layout from "../../Pages/Layout/Layout";
import { singleStudentApi, updateStudentApi } from "../../Store2/Students2/studentSlice";

const Updatestudents = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const [store, setStore] = useState();

  const {loading,singleStudent } = useSelector((state) => ({
    singleStudent: state.students.singleStudent,
    loading: state.students.loading,
  }));

  useEffect(() =>{
    setStore(singleStudent);
  },[]);

  const Handle = (e) => {
    setStore({
      ...store,
      [e.target.name]: e.target.value,
    });
  };

  const studentId= params.id

  const HandleStudentUpdate = () => {
    dispatch(updateStudentApi({studentId, navigate, store}));
  };

  return (
    <>
      <Layout>
        <div>
          <h4 style={{ textAlign: "center" }}>UPDATE STUDENTS</h4>
          <Container fluid style={{ height: "1000px" }}>
            <Row>
              <Col xl="3"></Col>
              <Col xl="6" style={{ marginTop: "15px" }}>
                <Card>
                  <CardBody>
                    <Form>
                      <Row>
                        <Col xl={12}>
                          <div className="form-group">
                            <label className="col-form-label">
                              <b>Full Name:</b>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              // required={"true"}
                              required
                              name="full_name"
                              onChange={(e) => Handle(e)}
                              value={store?.full_name}
                            />
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col xl={6}>
                          <div className="form-group">
                            <label className="col-form-label">
                              <b>E-mail:</b>
                            </label>
                            <input
                              type="e-mail"
                              className="form-control"
                              name="email"
                              onChange={(e) => Handle(e)}
                              value={store?.email}
                            />
                          </div>
                        </Col>
                        <Col xl={6}>
                          <div className="form-group">
                            <label className="col-form-label">
                              <b>Phone:</b>
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              name="phone"
                              onChange={(e) => Handle(e)}
                              value={store?.phone}
                            />
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col xl={12}>
                          <div className="form-group">
                            <label className="col-form-label">
                              <b>Address:</b>
                            </label>
                            <input
                              type="textarea"
                              className="form-control"
                              name="address"
                              onChange={(e) => Handle(e)}
                              value={store?.address}
                            />
                          </div>
                        </Col>
                        {/* </Row> */}
                        {/* <Row> */}
                        <Col xl={12}>
                          <div className="form-group">
                            <label className="col-form-label">
                              <b>Date of Birth:</b>
                            </label>
                            <input
                              type="date"
                              className="form-control"
                              name="dob"
                              onChange={(e) => Handle(e)}
                              value={store?.dob}
                            />
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col xl={6}>
                          <div className="form-group">
                            <label className="col-form-label">
                              <b>Joining Date :</b>
                            </label>
                            <input
                              type="date"
                              className="form-control"
                              name="start_date"
                              onChange={(e) => Handle(e)}
                              value={store?.start_date}
                            />
                          </div>
                        </Col>
                        <Col xl={6}>
                          <div className="form-group">
                            <label className="col-form-label">
                              <b>Date of Leaving :</b>
                            </label>
                            <input
                              type="date"
                              className="form-control"
                              name="end_date"
                              onChange={(e) => Handle(e)}
                              value={store?.end_date}
                            />
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <div className="form-group">
                          <label className="col-form-label">
                            <b>Designation:</b>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="designation"
                            onChange={(e) => Handle(e)}
                            value={store?.designation}
                          />
                        </div>
                        <div className="col-sm-4 form-group">
                          <label
                            for="tel"
                            style={{
                              paddingBottom: "5px",
                              fontWeight: "500",
                              fontSize: "small",
                            }}
                          >
                            Image:
                          </label>
                          <br></br>
                          <label
                            for={"photo"}
                            className="mx-3"
                            style={{
                              paddingBottom: "5px",
                              fontWeight: "500",
                              fontSize: "small",
                            }}
                          >
                            Choose file:{" "}
                            <small className="btn btn-outline-primary">
                              Upload
                            </small>
                            <input id="photo" className="d-none" type="file" />
                          </label>
                        </div>
                      </Row>
                      <div className="mt-3 d-flex justify-content-end">
                        <Button
                          style={{
                            marginRight: "46px",
                            backgroundColor: "white",
                            color: "black",
                            padding: "3px 20px 3px 20px",
                            borderRadius: "5px",
                          }}
                          onClick={() => {
                            navigate("/dashboard");
                          }}
                        >
                          back
                        </Button>
                        <Button
                          style={{
                            backgroundColor: "MediumSeaGreen",
                            padding: "3px 20px 3px 20px",
                            borderRadius: "5px",
                          }}
                          onClick={() => HandleStudentUpdate()}
                        >
                          
                          Update
                        </Button>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
              <Col xl="3"></Col>
            </Row>
          </Container>
        </div>
      </Layout>
    </>
  );
};

export default Updatestudents;
