import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cources from "./Components/Allcources/Cources";
import Creactstudents from "./Components/CreactStudents/Creactstudents";
import Dashboard from "./Components/Dashbord/Dashboard";
import Home from "./Components/Homepage/Home";
import Students from "./Components/Studentspage/Students";
import Studentview from "./Components/StudentView/Studentview";
import Updatestudents from "./Components/Updatestudents/Updatestudents";
import Createcource from "./Components/CreateCource/Createcource";
import Updatecource from "./Components/Updatecource/Updatecource";
import CourceCategory from "./Components/CreateCourceCategory/CourceCategory";
import CourceCategoryList from "./Components/Cource category list/CourceCategoryList";
import Updatecourcecategory from "./Components/Updatecoursecategory/Updatecourcecategory";
import Login from "./Components/Loginpage/Login";
import CourseSingleView from "./Components/CourseSingleView/CourseSingleView";
import ViewCourseCatagory from "./Components/viewCourseCatagory/viewCourseCatagory";
import Certificate from "./Components/Certificate/Certificate";
import Star from "./Components/Star/Star";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>

          <Route path="/students" element={<Students />}></Route>
          <Route
            path="/updatestudents/:id"
            element={<Updatestudents />}
          ></Route>
          <Route path="/createstudents" element={<Creactstudents />}></Route>

          <Route path="/allcourse" element={<Cources />}></Route>
          <Route path="/updatecourse/:id" element={<Updatecource />}></Route>
          <Route path="/createcource" element={<Createcource />}></Route>

          <Route
            path="/courcecategorylist"
            element={<CourceCategoryList />}
          ></Route>
          <Route path="/CourceCategory" element={<CourceCategory />}></Route>
          <Route
            path="/Updatecourcecategory/:id"
            element={<Updatecourcecategory />}
          ></Route>

          <Route path="/studentview/:id" element={<Studentview />}></Route>
          <Route
            path="/coursesingleview/:id"
            element={<CourseSingleView />}
          ></Route>
          <Route
            path="/viewCourseCatagory/:id"
            element={<ViewCourseCatagory />}
          ></Route>
          <Route path="/certificate" element={<Certificate/>}></Route>
          <Route path="/star" element={<Star/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
