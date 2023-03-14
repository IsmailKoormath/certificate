import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container, Card, Button, Form, Row, Col, CardBody } from "reactstrap";
import Layout from "../../Pages/Layout/Layout";
import { createStudentApi } from "../../Store2/Students2/studentSlice";


const Creactstudents = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input) {
      dispatch(createStudentApi({ input, navigate }));

    }
  
  };
  return (
    <>
      <Layout >
        <div>

          <h4 style={{ textAlign: "center" }}>CREATE STUDENTS</h4>
          <Container fluid style={{ height: "1000px" }}>
            <Row>
              {/* <Col xl="3"></Col> */}
              <Col xl="6" style={{ marginTop: "15px" }}>
                <Card>
                  <CardBody>
                    <Form onSubmit={handleSubmit}>
                      <Row>
                        <Col xl={12}>
                          <div className="form-group">
                            <label className="col-form-label">
                              <b>Full Name:</b>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              required
                              name="full_name"
                              onChange={(e) =>
                                setInput({
                                  ...input,
                                  full_name: e.target.value,
                                })
                              }
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
                              onChange={(e) =>
                                setInput({ ...input, email: e.target.value })
                              }
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
                              onChange={(e) =>
                                setInput({ ...input, phone: e.target.value })
                              }
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
                              onChange={(e) =>
                                setInput({ ...input, address: e.target.value })
                              }
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
                              onChange={(e) =>
                                setInput({ ...input, dob: e.target.value })
                              }
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
                              onChange={(e) =>
                                setInput({
                                  ...input,
                                  start_date: e.target.value,
                                })
                              }
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
                              onChange={(e) =>
                                setInput({ ...input, end_date: e.target.value })
                              }
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
                            onChange={(e) =>
                              setInput({
                                ...input,
                                designation: e.target.value,
                              })
                            }
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
                          type="submit"
                        >
                          Create
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

export default Creactstudents;
