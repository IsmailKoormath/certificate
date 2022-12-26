import { map } from "lodash";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "reactstrap";
import Layout from "../../Pages/Layout/Layout";
import {
  courseApi,
  UpdateCourseApi,
  viewCourseApi,
} from "../../Store/course/useApi";

const Updatecource = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();

  const [Stoke, setStoke] = useState({
    course_category_name: "",
    course_name: "",
    duration: "",
    id: "",
  });
  const { courseCatagory, loding } = useSelector((state) => ({
    courseCatagory: state.createCourseCategoryReducer.courseCatagory,
    loading: state.loading,
  }));

  const { updateCourse, loading, courseSingleView } = useSelector((state) => ({
    updateCourse: state.CreateCourseReducer.updateCourse,
    courseSingleView: state.CreateCourseReducer.courseSingleView,
    loading: state.loading,
  }));

  useEffect(() => {
    dispatch(viewCourseApi(catId));
  }, [dispatch]);

  console.log(courseSingleView);
  useEffect(() => {
    setStoke(courseSingleView);
  }, [courseSingleView]);

  const catId = params.id;

  const Handle = (e, catId) => {
    setStoke({
      ...Stoke,
      [e.target.name]: e.target.value,
    });
  };

  const HandleSubmitUpdateCourse = (e) => {
    e.preventDefault();
    dispatch(UpdateCourseApi(catId,navigate, Stoke));
  };

  return (
    <>
      <Layout>
        <div style={{ height: "1000px" }}>
          <div className="container my-5">
            <div className="row justify-content-center my-5">
              <div className="col-sm-6 shadow rounded g-5">
                <h1 className="text-center pt-3 text-secondery h2">
                  <b>UPDATE COURSE</b>
                </h1>
                <form onSubmit={HandleSubmitUpdateCourse}>
                  <div className="form-group">
                    <label className=" col=-form-label">
                      <b>Course Name:</b>
                    </label>
                    <input
                      required
                      className="form-control"
                      type="text"
                      value={Stoke?.course_name}
                      onChange={(e) => Handle(e)}
                      name="course_name"
                    />
                  </div>
                  <div className="form-group">
                    <label className=" col=-form-label">
                      <b>Duration:</b>
                    </label>
                    <input
                      required
                      type="number"
                      className="form-control"
                      onChange={(e) => Handle(e)}
                      value={Stoke?.duration}
                      name="duration"
                    />
                  </div>
                  <div className="form-group">
                    <label className=" col=-form-label">
                      <b>Course Category:</b>
                    </label>

                    <div className="form-group">
                    <select
                      className="col-form-label"
                      name="course_category"
                      id=""
                      onChange={(e) => Handle(e)}
                    >
                      <option>choose course category...</option>
                      {map(courseCatagory?.results, (item, key) => (
                        <option value={item.id}>
                          {item?.course_category_name}
                          
                        </option>
                      ))}
                    </select>
                  </div>
                  </div>
                  <div>
                    <div
                      style={{
                        padding: "15px",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Button
                        type="submit"
                        style={{
                          color: "white",
                          backgroundColor: "MediumSeaGreen ",
                          padding: "3px 20px 3px 20px",
                          borderRadius: "5px",
                        }}
                      >
                        Update
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
                        back
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Updatecource;
