import { map } from 'lodash'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { IoEye } from 'react-icons/io5';
import Layout from '../../Pages/Layout/Layout'
import CreateCourseReducer from '../../Store/course/reducer';
import { courseApi } from '../../Store/course/useApi'

const Cources = () => {

const dispatch=useDispatch();

  const {allcourse,loading} =useSelector((state)=>({
    allcourse:state.CreateCourseReducer.allcourse,
    loading:state.CreateCourseReducer.loading,
  }))
console.log(allcourse);

useEffect(()=>{
  dispatch(courseApi());
},[dispatch])

 const CourseStore = allcourse.results;
 console.log(CourseStore);

  return (
    <div>
      <Layout>
        <table
          className="fl-table"
          style={{
            borderRadius: "5px",
            fontSize: " 12px",
            fontWeight: "normal",
            border: "none",
            borderCollapse: "collapse",
            width: "100%",
            maxWidth: "100%",
            whiteSpace: "nowrap",
            backgroundColor: " white",
            textAlign:"center",
            marginLeft:"20px",marginTop:"20px"
          }}
        >
          <thead>
            <tr>
              <th>#</th>
              <th>ID</th>
              <th>Cource Name</th>
              <th>Duration</th>
              {/* <th>Course Category</th> */}
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {map(CourseStore,(item, key)=>(
              <tr key={key}>
                <td></td>
                <td>{key+1}</td>
                <td>{item.course_name}</td>
                <td>{item?.duration}</td>
                <td>
                  <Link  style={{ textDecoration: "none", color: "black" }}
                  to={`/coursesingleview/${item.id}`}>
                    <IoEye style={{ fontSize: "25px" }} />
                  </Link>
                </td>
                
              </tr>
          ))}
          </tbody>
        </table>
        </Layout>
    </div>
  )
}

export default Cources