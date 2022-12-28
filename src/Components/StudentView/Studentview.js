import React, { useEffect } from "react";
import "./StudentView.css";
import { BiMapPin, BiUserVoice } from "react-icons/bi";
import { BsPersonLinesFill } from "react-icons/bs";
import { AiOutlineSetting } from "react-icons/ai";
import Layout from "../../Pages/Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteStudentApi, singleViewApi } from "../../Store/students/useApi";
import { Button } from "react-bootstrap";
import { map } from "lodash";

const StudentView = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const { singleView, loading, studentCourse, studentCourseData } = useSelector(
    (state) => ({
      singleView: state.CreateReducer.singleView,
      studentCourse: state.CreateReducer.studentCourse,
      studentCourseData: state.CreateReducer.studentCourseData,
      loading: state.loading,
    })
  );

  useEffect(() => {
    dispatch(singleViewApi(params.id));
  }, [dispatch]);

  const deleteStudent = () => {
    dispatch(deleteStudentApi(params.id, navigate));
  };

  return (
    <>
      <Layout>
        <div className="viewmain shadow rounded g-5 mt-5">
          <div className="main-content">
            <div className="content-one">
              <h2>{singleView.full_name}</h2>

              <span>dob:</span>
              {singleView.dob}
              <br />
              <p>
                <span className="icon">
                  <BiMapPin />
                </span>
                address:{singleView.address}
              </p>

              <p>
                <span className="icon">
                  <BsPersonLinesFill />
                </span>
                {singleView.phone}
              </p>
            </div>

            <div className="content-two">
              <h5>Conatact Details:{singleView.phone}</h5>
              <p>
                <span className="icon">
                  <BiUserVoice />
                </span>
                email:{singleView.email}
              </p>
              <p>
                <span className="icon">
                  <AiOutlineSetting />
                </span>
                Mobile: {singleView.phone}
              </p>
            </div>
          </div>

          <div className="image-side1">
            <img src={require("./profile-picture (1).jpeg")} alt="" />
            <p className="designation">{singleView.designation}</p>
          </div>

          <div className="button-side">
            <button
              onClick={() => navigate(`/updatestudents/${params.id}`)}
              className="btn-update"
            >
              Update
            </button>
            <br />
            <button onClick={deleteStudent} className="btn-delete">
              Delete
            </button>
          </div>
        </div>

       
       
        <div className="container">
        
          <div className="row justify-content-center mx-5  ">
            <div className="col-sm-6 shadow rounded g-5 stdcourse" style={{background:"white"}}>
              <div className="pt-3 text-dark h2 justifyy-content-spacebetween">
              <h3>STUDENT COURSE</h3>
                <div>
                <Button
                          style={{ padding: "3px 20px 3px 20px", marginBottom:"10px"}}
                          color="success"
                        >
                          <Link
                            style={{ textDecoration: "none", color: "white" }}
                            to="/createstudentcourse"
                          >
                            + Create Students Course
                          </Link>
                        </Button>
                  {map(singleView?.student_courses, (item) => (
                    <div>
                      <h5>Course Name:</h5>
                      <h2 style={{ color: "red" }}>
                        {item.course.course_name}
                      </h2>
                      <h5>Duration:</h5>
                      <h2 style={{ color: "red" }}>{item.course.duration}</h2>
                      <h5>Progess:</h5>
                      <h2 style={{ color: "red" }}>{item.progress}</h2>
                      <h5>Course Category Name:</h5>
                      <h2 style={{ color: "red" }}>
                      
                        {item.course.course_category.course_category_name}
                      </h2>
                      <h5>Designation:</h5>
                      <h2 style={{ color: "red" }}>
                       
                        {item.course.course_category.designation}
                      </h2>

                      <div
                        className="d-flex"
                        style={{
                          justifyContent: "space-around",
                          padding: "5px 0px 10px 0px",
                        }}
                      >
                       
                        <Button
                          color="success"
                          style={{
                            padding: "3px 20px 3px 20px",
                            marginLeft:"180px"
                          }}
                        >
                          <Link
                            style={{
                              textDecoration: "none",
                              color: "white",
                              
                            }}
                            to={`/certificate/${params.id}`}
                          >
                            Certificate View
                          </Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default StudentView;
