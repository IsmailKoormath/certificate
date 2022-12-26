import React from "react";
import "./sidebar.css";
import { BiHomeCircle, BiStore } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { BsPersonLinesFill } from "react-icons/bs";
import { Link } from "react-router-dom";




const Sidebar = () => {
  return (
    
     
    <div className="side-bar">
      <h6 className="menu">MENU</h6>
      <ul>
      
       <li>
          <BiHomeCircle />
          <span className="ms-3">Dashboard</span>
        </li>
        
        {/* <Link to="/Studentview" > */}
        
        <li>
          <CgProfile />
          <span className="ms-3">Students</span>
        </li>
        {/* </Link> */}
      </ul>
      <ul className="list">
        <Link to="/students">
        <li>All Students</li></Link>
        <Link to="/updatestudents">
        <li>Update Student</li></Link>
        <Link to="/createstudents">
        <li>Create Student</li></Link>
      </ul>
      <ul>
      {/* <Link to="/"> */}
        <li>
          <BiStore />
          <span className="ms-3">Courses</span>
        </li>
        {/* </Link> */}
      </ul>
      <ul className="list">
      <Link to="/allcourse">
        <li>All Courses</li>
        </Link>
        <Link to="/updatecourse">
        <li>Update Courses</li></Link>
        <Link to="/createcource">
        <li>Create Courses</li></Link>
      </ul>
      <ul>
      {/* <Link to="/CourceCategoryList"> */}
        <li>
          <BsPersonLinesFill />
          <span className="ms-3">Courses Category</span>
        </li>
        {/* </Link> */}
      </ul>
      <ul className="list">
      <Link to="/courcecategorylist">
        <li>All Courses Category</li>
        </Link>
        <Link to="/Updatecourcecategory">
        <li>Update Courses Category</li></Link>
        <Link to="/CourceCategory">
        <li>Create Courses Category</li></Link>
      </ul>
    </div>
    
    
  );
};

export default Sidebar;
