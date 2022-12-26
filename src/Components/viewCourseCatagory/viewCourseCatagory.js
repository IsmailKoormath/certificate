import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteCategoryApi, viewCategoryApi } from "../../Store/courseCategory/useApi";
import { BsTrash } from "react-icons/bs";
import { Button } from "reactstrap";
import Layout from "../../Pages/Layout/Layout";

const ViewCourseCatagory = () => {
const dispatch = useDispatch()
const navigate = useNavigate()
const params = useParams()
    
const catId = params.id

const {singleView,loading} =useSelector((state)=>({
    singleView:state.createCourseCategoryReducer.singleView,
    loading:state.loading
}))

const deleteCoursecategory=()=>{
    dispatch(deleteCategoryApi(catId,navigate))
}

useEffect(()=>{
    dispatch(viewCategoryApi(catId))
},[dispatch])


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
          COURSE CATEGORY VIEW
        </h1>
        <div className="container">
          <div className="row justify-content-center">
          
            <div className="col-sm-6 shadow rounded g-5">
              <div className=" pt-3 text-secodary h4 justify-content-spacebetween">
                Course Category:
                <h1 style={{ color: "red" }}>
                  {singleView?.course_category_name}
                </h1>
                <br />
                Designation:
                <h1 style={{ color: "red" }}> {singleView?.designation} </h1>
                <br />
                <Button
                  type="button"
                  color="success"
                  onClick={() => navigate(`/Updatecourcecategory/${catId}`)}
                  style={{ padding: "3px 20px 3px 20px" }}
                >
                  update
                </Button>
                <Button
                  type="button"
                  color="danger"
                  onClick={deleteCoursecategory}
                  style={{ marginLeft: "15px", padding: "3px 20px 3px 20px" }}
                >
                  Trash
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

export default ViewCourseCatagory;
