import React, { useEffect } from 'react'
import { Button } from "reactstrap";
import Layout from "../../Pages/Layout/Layout";
import { BsTrash } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { DeleteCourseApi, viewCourseApi } from '../../Store/course/useApi';
import { useNavigate, useParams } from 'react-router-dom';
//  import CreateCourseReducer from '../../Store/course/reducer';

const CourseSingleView = () => {
const dispatch=useDispatch()
const navigate = useNavigate()
const params = useParams ()

const catId = params.id;
const {courseSingleView,loading} =useSelector((state)=>({
    courseSingleView:state.CreateCourseReducer.courseSingleView,
    loading:state.loading
}))

useEffect(()=>{
    dispatch(viewCourseApi(catId))
},[dispatch])
console.log(catId);
const  deleteCourse =()=>{
    dispatch(DeleteCourseApi(catId,navigate))
}


    return (
        <div>
          <Layout>
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
                    <h2 style={{ color: "red" }}>
                    {courseSingleView?.course_name}
                    </h2>
                    <br />
                    Duration:
                    <h2 style={{ color: "red" }}>
                    {courseSingleView?.duration}
                    </h2>
                    <br />
                    Course Category:
                    <h2 style={{ color: "red" }}>
                    {courseSingleView?.course_category}
                    </h2>
                    <br />
                    <Button
                      type="button"
                      color="success"
                      onClick={() => navigate(`/updatecourse/${catId}`)}
                      style={{ padding: "3px 20px 3px 20px" }}
                    >
                      update
                    </Button>
                    <Button
                      color="danger"
                       onClick={deleteCourse}
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
    }
    
 
export default CourseSingleView