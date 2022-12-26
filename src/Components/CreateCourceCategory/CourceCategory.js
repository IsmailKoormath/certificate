import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {  useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import Layout from "../../Pages/Layout/Layout";
import { CourseCategoryApi } from "../../Store/courseCategory/useApi";

const CourceCategory = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [input, setInput] = useState({});

  const Handle = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const handleCourseCategory = (e) => {
    e.preventDefault();
    if (input) {
      dispatch(CourseCategoryApi(input, navigate));
    }
  };
  return (
    <>
      <Layout>
        <div>
          <div style={{ height: "800px" }}>
            <div className="container my-5">
              <div className="row justify-content-center my-5">
                <div className="col-sm-6 shadow rounded g-7">
                  <h1 className="text-center pt-3 text-secondery h2">
                    CREATE COURSE CATEGORY
                  </h1>
                  <form
                    onSubmit={handleCourseCategory}
                    style={{ padding: "10px" }}
                  >
                    <div className="form-group">
                      <label className="col-form-label">
                        <b>Category Name:</b>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="course_category_name"
                        onChange={(e) => Handle(e)}
                      />
                    </div>
                    <div className="form-group">
                      <label className="col-form-label">
                        <b>Designation:</b>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        required
                        name="designation"
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
                      <Button
                        type="submit"
                        style={{
                          backgroundColor: "MediumSeaGreen",
                          color: "white",
                          padding: "3px 20px 3px 20px",
                          borderRadius: "5px",
                        }}
                      >
                      
                        Create
                      </Button>
                      <Button
                        style={{
                          backgroundColor: " white ",
                          color: "black",
                          padding: "3px 20px 3px 20px",
                        }}
                        onClick={() => {
                          navigate("/dashboard");
                        }}
                      >
                        back
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default CourceCategory;
