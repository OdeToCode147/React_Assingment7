import React, { useState } from "react";
import { Button, TextField, Box, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

let studentDetails = {
  name: "",
  age: "",
  course: "",
  batch: "",
};
const Student = () => {
  const [store, setStore] = useState(studentDetails);
  const [dataList, setDataList] = useState([]);
  const [edit, setEdit] = useState(false);
  const [hide, setHide] = useState(false);
  const changeHandler = (e) => {
    const value = e.target.value;
    setStore((store) => ({ ...store, [e.target.name]: value }));
  };
  const addData = () => {
    if (edit) {
      const updatedDataList = dataList.map((row) =>
        row.id === store.id ? store : row
      );
      setDataList(updatedDataList);
      setEdit(false);
      setStore(studentDetails);
      setHide(!hide);
    } else {
      let listItems = dataList;
      const item = {
        id: dataList.length,
        ...store,
      };
      listItems = [...dataList, item];
      setDataList(listItems);
      clearData();
      setHide(!hide);
    }
  };
  const clearData = () => {
    setStore(studentDetails);
  };
  const deleteRow = (id) => {
    const filtered = dataList.filter((item) => item.id !== id);
    console.log(filtered);
    setDataList(filtered);
  };
  const editRow = (row) => {
    setStore(row);
    setEdit(true);
    setHide(!hide);
  };
  return (
    <>
      {hide ? null : (
        <>
          {" "}
          <div className="studentDetails">
            <h1 className="sd">Students Details</h1>
            <Button
              variant="contained"
              onClick={() => {
                setHide(!hide);
              }}
              startIcon={<AddIcon />}
              style={{
                color: "black",
                backgroundColor: "lightblue",
                marginLeft: "45vw",
                marginTop: "10vh",
              }}
            >
              Add new student
            </Button>
          </div>
          <Box>
            <table className="table">
              {dataList &&
                dataList.map((row, i) => (
                  <tr>
                    <td>{row.name}</td>
                    <td>{row.age}</td>
                    <td>{row.course}</td>
                    <td>{row.batch}</td>
                    <td>
                      <IconButton>
                        <EditIcon
                          style={{ color: "green" }}
                          onClick={() => {
                            editRow(row);
                          }}
                        />
                      </IconButton>
                      <IconButton>
                        <DeleteIcon
                          style={{ color: "red" }}
                          onClick={() => {
                            deleteRow(row.id);
                          }}
                        />
                      </IconButton>
                    </td>
                  </tr>
                ))}
            </table>
          </Box>
        </>
      )}
      {hide ? (
        <Box>
          <Box className="grid">
            <h2
              style={{
                color: "black",
                fontSize: "54px",
                marginLeft: "40vw",
              }}
            >
              Add New Student
            </h2>
            <br />
            <TextField
              style={{
                marginLeft: "40vw",
                width: "445px",
              }}
              name="name"
              value={store.name}
              onChange={changeHandler}
              label="Name"
              color="warning"
            />
            <br />
            <br />
            <TextField
              style={{
                marginLeft: "40vw",
                width: "445px",
              }}
              name="age"
              value={store.age}
              onChange={changeHandler}
              label="Age"
              color="primary"
            />
            <br />
            <br />
            <TextField
              style={{
                marginLeft: "40vw",
                width: "445px",
              }}
              name="course"
              value={store.course}
              onChange={changeHandler}
              label="Course"
              color="warning"
            />
            <br />
            <br />
            <TextField
              style={{
                marginLeft: "40vw",
                width: "445px",
              }}
              name="batch"
              value={store.batch}
              onChange={changeHandler}
              label="Batch"
              color="primary"
            />
          </Box>
          <Box sx={{ mt: 10, ml: 88 }}>
            <Button
              sx={{ mr: 3 }}
              size="large"
              onClick={addData}
              color="success"
              variant="contained"
            >
              {edit ? "Update" : "submit"}
            </Button>
            <Button
              sx={{ ml: 7 }}
              size="large"
              onClick={clearData}
              color="error"
              variant="contained"
            >
              Cancel
            </Button>
          </Box>
        </Box>
      ) : null}
    </>
  );
};

export default Student;
