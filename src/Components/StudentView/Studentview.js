import React, { useEffect, useState } from "react";
import "./StudentView.css";
import { BiMapPin, BiUserVoice } from "react-icons/bi";
import { BsPersonLinesFill } from "react-icons/bs";
import { AiOutlineSetting } from "react-icons/ai";
import Layout from "../../Pages/Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { map } from "lodash";
import moment from "moment";
import { deleteStudentApi, singleStudentApi } from "../../Store2/Students2/studentSlice";
import { Box, Modal, Typography } from "@mui/material";

const StudentView = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const { singleStudent } = useSelector(
    (state) => ({
      singleStudent: state.students.singleStudent,
      loading: state.students.loading,
    })
  );

const studentId = params.id

  useEffect(() => {
    dispatch(singleStudentApi({studentId}))
  },[dispatch]);

  const deleteStudent = () => {
    dispatch(deleteStudentApi({studentId, navigate}));
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };
  
  const [open, setOpen] = useState(false);


  return (
    <>
    
      <Layout>
      <div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Delete Confirm
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Are you sure to delete
          </Typography>
          <Button onClick={() => setOpen(false)}>cancel</Button>
          <Button onClick={deleteStudent} style={{color:"white",background:"red",border:"none",marginLeft:"5px"}}>delete</Button>
        </Box>
      </Modal>
    </div>
        <div className="viewmain shadow rounded g-5 mt-5">
          <div className="main-content">
            <div className="content-one">
              <h2>{singleStudent.full_name}</h2>

              {/* <span>dob:</span> */}
              {moment(singleStudent.dob).format("Do MMMM YYYY")}
              <br />
              <p>
                <span className="icon">
                  <BiMapPin />
                </span>
                address:{singleStudent.address}
              </p>

              <p>
                <span className="icon">
                  <BsPersonLinesFill />
                </span>
                {singleStudent.phone}
              </p>
            </div>

            <div className="content-two">
              <h5>Conatact Details:{singleStudent.phone}</h5>
              <p>
                <span className="icon">
                  <BiUserVoice />
                </span>
                email:{singleStudent.email}
              </p>
              <p>
                <span className="icon">
                  <AiOutlineSetting />
                </span>
                Mobile: {singleStudent.phone}
              </p>
            </div>
          </div>

          <div className="image-side1">
            <img src={require("./profile-picture (1).jpeg")} alt="" />
            <p className="designation">{singleStudent.designation}</p>
          </div>

          <div className="button-side">
            <button
              onClick={() => navigate(`/updatestudents/${studentId}`)}
              className="btn-update"
            >
              Update
            </button>
            <br />
            <button onClick={() => setOpen(true)} className="btn-delete">Delete </button>
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
                            to={`/createstudentcourse/${params.id}`}
                          >
                            + Create Students Course
                          </Link>
                        </Button>
                  {map(singleStudent?.student_courses, (item) => (
                    <div>
                      <h5>Course Name:</h5>
                      <h2 style={{ color: "blue" }}>
                        {item.course.course_name}
                      </h2>
                      <h5>Duration:</h5>
                      <h2 style={{ color: "blue" }}>{item.course.duration}</h2>
                      <h5>Progess:</h5>
                      <h2 style={{ color: "blue" }}>{item.progress}</h2>
                      <h5>Course Category Name:</h5>
                      <h2 style={{ color: "blue" }}>
                      
                        {item.course.course_category.course_category_name}
                      </h2>
                      <h5>Designation:</h5>
                      <h2 style={{ color: "blue" }}>
                       
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
                            to={`/certificate/${studentId}`}
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
