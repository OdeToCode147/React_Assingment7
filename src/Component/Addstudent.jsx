import React from "react";
import { Link } from "react-router-dom";

const Addstudent = () => {
  return (
    <div className="addstudent">
      <form>
        <br />
        <h1> Add Student </h1>
        <br />
        <label>Name: </label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Enter Your Name"
          value={"Name"}
          onChange={"ChangeHandler1"}
        />
        <br />
        <br />
        <label>Age:</label>
        <input
          id="age"
          type="number"
          name="age"
          placeholder="Enter Your Age"
          value={"Age"}
          onChange={"ChangeHandler2"}
        />
        <br />
        <br />
        <label>Course:</label>
        <input
          id="course"
          type="text"
          name="course"
          placeholder="Enter Course"
          value={"Course"}
          onChange={"ChangeHandler3"}
        />
        <br />
        <br />
        <label>Batch:</label>
        <input
          id="batch"
          type="text"
          name="batch"
          placeholder="Enter Batch"
          value={"Batch"}
          onChange={"ChangeHandler4"}
        />
        <div style={{ marginTop: "25px" }}>
          <Link to="/Student">
            <button className="btn1">Cancel ❌</button>
          </Link>
          <Link to="/Student">
            <button className="btn2" onClick={"SubmitHandler"}>
              Submit ✅
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Addstudent;
