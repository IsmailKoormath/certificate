import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import Layout from "../../Pages/Layout/Layout";
const Dashboard = () => {
  return (
    <>
      <Layout>
        <body>
          <div
            className="container sm"
            style={{
              width: "100%",
              height: "100%",
              marginBottom: "20px",
            }}
          >
            <main id="main" className="main">
              <div className="pagetitle">
                <h1>Dashboard</h1>
                <nav>
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item active">Dashboard</li>
                  </ol>
                </nav>
              </div>
              <Row style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                <Col sm={4}>
                  <div
                    style={{
                      backgroundImage: "url(lap3.jpg)",
                      height: "182px",
                      boxShadow: " 0 0 20px 0px rgba(0,0,0,0.1)",
                      borderRadius: "5px",
                      padding: "35px",
                      color: "rgb(98, 55, 199)",
                      marginTop: "18px",
                    }}
                  >
                    <h5>Welcome Back !</h5>
                    <p>It will seem like simplified</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      backgroundColor: "white",
                      borderRadius: "5px",
                      padding: "35px",
                      height: "166px",
                    }}
                  >
                    <div
                      style={{
                        borderRadius: "5px",
                        padding: "35px",
                      }}
                    >
                      <div
                        style={{
                          padding: "6px",
                        }}
                      >
                        <img
                          style={{
                            borderRadius: "50%",
                            height: "74%",
                            width: "127%",
                            marginTop: "-159px",
                            marginLeft: "-34px",
                          }}
                          src=""
                          alt="profile"
                        />
                        <h5
                          style={{
                            marginTop: "-56px",
                            marginLeft: "-38px",
                            fontSize: "19px",
                            color: "rgb(26, 49, 121)",
                          }}
                        >
                          ""
                        </h5>
                        <p
                          style={{
                            marginLeft: "-38px",
                            fontSize: "12px",
                            color: "red",
                          }}
                        >
                          ""
                        </p>
                      </div>
                    </div>
                    <div>
                      <h5 style={{ paddingTop: "2px", fontSize: "15px" }}>
                        125
                      </h5>
                      <p>Projects</p>
                      <Button
                        style={{
                          backgroundColor: "rgb(98, 55, 199)",
                          width: "124px",
                          height: "37px",
                        }}
                      >
                        View Profile
                      </Button>
                    </div>
                    <div
                      style={{
                        padding: "23px",
                      }}
                    >
                      <h5 style={{ marginTop: "-18px", fontSize: "15px" }}>
                        $1245
                      </h5>
                      <p>Revenue</p>
                    </div>
                  </div>
                </Col>
                <Col sm={4}>
                  <div
                    style={{
                      backgroundColor: "white",
                      boxShadow: " 0 0 20px 0px rgba(0,0,0,0.1)",
                      borderRadius: "5px",
                      padding: "35px",
                      display: "flex",
                      marginTop: "18px",
                    }}
                  >
                    <div className="card-body">
                      <h5 className="card-title text-muted">
                        Available Courses
                      </h5>
                      <p className="ps-3">3</p>
                    </div>
                    <div>
                      <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i className="BsFillArchiveFill"></i>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      backgroundColor: "white",
                      boxShadow: " 0 0 20px 0px rgba(0,0,0,0.1)",
                      borderRadius: "5px",
                      padding: "35px",
                      marginTop: "40px",
                      height: "144px",
                    }}
                  >
                    <div className="card-body">
                      <h5 className="card-title text-muted"> Total Students</h5>
                      <p className="ps-3">5</p>
                    </div>
                    <div>
                      <img
                        src="copyicon.png"
                        style={{
                          height: "57px",
                          marginLeft: "295px",
                          marginTop: "-123px",
                        }}
                        alt="copy"
                      />
                    </div>
                  </div>
                </Col>
                <Col sm={4}>
                  <div
                    style={{
                      backgroundColor: "white",
                      boxShadow: " 0 0 20px 0px rgba(0,0,0,0.1)",
                      borderRadius: "5px",
                      padding: "35px",
                      display: "flex",
                      marginTop: "18px",
                    }}
                  >
                    <div className="card-body">
                      <h5 className="card-title text-muted">
                        Course Completed Students
                      </h5>
                      <p className="ps-3">2</p>
                    </div>
                    <div>
                      <img
                        src="copyicon.png"
                        style={{ height: "57px", marginLeft: "94px" }}
                        alt="copy"
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      backgroundColor: "white",
                      boxShadow: " 0 0 20px 0px rgba(0,0,0,0.1)",
                      borderRadius: "5px",
                      padding: " 35px",
                      marginTop: "40px",
                      height: "144px",
                    }}
                  >
                    <div className="card-body">
                      <h5 className="card-title text-muted"> Total Students</h5>
                      <p className="ps-3">5</p>
                    </div>
                    <div>
                      <img
                        src="copyicon.png"
                        style={{
                          height: "57px",
                          marginLeft: "295px",
                          marginTop: "-123px",
                        }}
                        alt="copy"
                      />
                    </div>
                  </div>
                </Col>
              </Row>
            </main>
          </div>
        </body>
      </Layout>
    </>
  );
};

export default Dashboard;
