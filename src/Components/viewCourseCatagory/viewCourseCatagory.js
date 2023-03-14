import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { BsTrash } from "react-icons/bs";
import { Button } from "reactstrap";
import Layout from "../../Pages/Layout/Layout";
import { deleteCategoryApi, singleCategryapi } from "../../Store2/courseCategory2/courseCategorySlice";
import { Box, Modal, Typography } from "@mui/material";

const ViewCourseCatagory = () => {
const dispatch = useDispatch()
const navigate = useNavigate()
const params = useParams()
    
const courseCategoryId = params.id

const {singleCategory,loading} =useSelector((state)=>({
  singleCategory:state.category.singleCategory,
    loading:state.category.loading
}))

const deleteCoursecategory=()=>{
    dispatch(deleteCategoryApi({courseCategoryId,navigate}))
}

useEffect(()=>{
    dispatch(singleCategryapi({courseCategoryId}))
},[dispatch])

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
          <Button onClick={deleteCoursecategory} style={{color:"white",background:"red",border:"none",marginLeft:"5px"}}>delete</Button>
        </Box>
      </Modal>
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
                  {singleCategory?.course_category_name}
                </h1>
                <br />
                Designation:
                <h1 style={{ color: "red" }}> {singleCategory?.designation} </h1>
                <br />
                <Button
                  type="button"
                  color="success"
                  onClick={() => navigate(`/Updatecourcecategory/${courseCategoryId}`)}
                  style={{ padding: "3px 20px 3px 20px" }}
                >
                  update
                </Button>
                <Button
                  type="button"
                  color="danger"
                  onClick={()=>setOpen(true)}
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
