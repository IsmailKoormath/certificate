import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "reactstrap";
import Layout from "../../Pages/Layout/Layout";
import { updateCategoryApi } from "../../Store2/courseCategory2/courseCategorySlice";

const Updatecourcecategory = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();

  const [data, setData] = useState({
    course_category_name: "",
    designation: "",
    _id: "",
  });

  const { loading, singleCategory } = useSelector((state) => ({
    singleCategory: state.category.singleCategory,
    loading: state.category.loading,
  }));
  
  useEffect(() => {
    setData(singleCategory);
  }, []);

  const courseCategoryId = params.id;

  const Handle = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitUpdateCourseCategory = (e) => {
    e.preventDefault();
    dispatch(updateCategoryApi({ courseCategoryId, navigate, data }));
  };

  return (
    <>
      <Layout>
        <div style={{ height: "900px" }}>
          <div className="container my-5">
            <div className="row justify-content-center my-5">
              <div className="col-sm-6 shadow rounded g-7">
                <h1 className="text-center pt-3 text-secondery h2">
                  Edit your Details
                </h1>
                <form
                  onSubmit={handleSubmitUpdateCourseCategory}
                  style={{ padding: "10px" }}
                >
                  <div className="form-group">
                    <label className="col-form-label">
                      <b>Category Name:</b>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      requied={true}
                      onChange={(e) => Handle(e)}
                      value={data?.course_category_name}
                      name="course_category_name"
                    />
                  </div>
                  <div className="form-group">
                    <label className="col-form-label">
                      <b>Designation:</b>
                    </label>
                    <input
                      requied={true}
                      type="text"
                      className="form-control"
                      onChange={(e) => Handle(e)}
                      value={data?.designation}
                      name="designation"
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
                      style={{
                        // marginLeft: "462px",
                        backgroundColor: " white ",
                        color: "black",
                        padding: "3px 20px 3px 20px",
                        borderRadius: "5px",
                      }}
                      onClick={() => {
                        navigate("/courcecategorylist");
                      }}
                    >
                      back
                    </Button>
                    <Button
                      style={{
                        backgroundColor: "MediumSeaGreen",
                        color: "white",
                        padding: "3px 20px 3px 20px",
                        borderRadius: "5px",
                      }}
                      type="submit"
                    >
                      update
                    </Button>
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

export default Updatecourcecategory;
