import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import Layout from "../../Pages/Layout/Layout";
import { BsTrash } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  deleteCourseApi,
  singleCourseApi,
} from "../../Store2/course2/courseSlice";
import { Box, Modal, Typography } from "@mui/material";

const CourseSingleView = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const {allCategory, singleCourse, loading } = useSelector((state) => ({
    singleCourse: state.course.singleCourse,
    allCategory:state.category.allCategory,
    loading: state.course.loading,
  }));

  const courseId = params.id;

  useEffect(() => {
    dispatch(singleCourseApi({ courseId }));
  },[]);

  const deleteCourse = () => {
    dispatch(deleteCourseApi({ courseId, navigate }));
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
    <div>
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
          <Button onClick={deleteCourse} style={{color:"white",background:"red",border:"none",marginLeft:"5px"}}>delete</Button>
        </Box>
      </Modal>
      </div>
        <h1
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textDecoration: "underline",
          }}
        >
          Course View
        </h1>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-6 shadow rounded g-5">
              <div className="pt-3 text-secondary h4 justify-content-spacebetween">
                Course Name:
                <h2 style={{ color: "red" }}>{singleCourse?.course_name}</h2>
                <br />
                Duration:
                <h2 style={{ color: "red" }}>{singleCourse?.duration}</h2>
                <br />
                Course Category:
                <h2 style={{ color: "red" }}>
                  {allCategory?.course_category_name}
                </h2>
                <br />
                <Button
                  type="button"
                  color="success"
                  onClick={() => navigate(`/updatecourse/${courseId}`)}
                  style={{ padding: "3px 20px 3px 20px" }}
                >
                  update
                </Button>
                <Button
                  color="danger"
                  onClick={()=>setOpen(true)}
                  style={{ marginLeft: "15px", padding: "3px 20px 3px 20px" }}
                >
                  <BsTrash style={{ fontSize: "20px" }} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default CourseSingleView;
