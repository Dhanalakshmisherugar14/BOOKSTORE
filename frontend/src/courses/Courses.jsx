import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
//import Freebook from "../components/Freebook";
import Course from "../components/Course";
import list from "../../public/list.json";
import Freebook from "./../components/Freebook";

function Courses() {
  console.log(list);
  return (
    <>
      <Navbar />

      <Course />

      <Footer />
    </>
  );
}

export default Courses;
