import React, { useState } from "react";
import "../Stylesheets/Newclient.css"
import { Link } from "react-router-dom";

const Newclient = () => {
  document.addEventListener("DOMContentLoaded", function () {
    var btn = document.querySelector(".button"),
      loader = document.querySelector(".loader"),
      check = document.querySelector(".check");

    btn.addEventListener("click", function () {
      loader.classList.add("active");
    });

    loader.addEventListener("animationend", function () {
      check.classList.add("active");
    });
  });

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
  });
  const [tableData, setTableData] = useState([]);
  const [editClick, setEditClick] = useState(false);
  const [editIndex, setEditIndex] = useState("");
  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("inputs", inputs);
    if (editClick) {
      const tempTableData = tableData;
      Object.assign(tempTableData[editIndex], inputs);
      setTableData([...tempTableData]);
      setEditClick(false);
      setInputs({
        name: "",
        email: "",
      });
    } else {
      setTableData([...tableData, inputs]);
      setInputs({
        name: "",
        email: "",
      });
    }
  };

  const handleDelete = (index) => {
    const filterData = tableData.filter((item, i) => i !== index);
    setTableData(filterData);
  };
  const handleEdit = (index) => {
    const tempData = tableData[index];

    setInputs({ name: tempData.name, email: tempData.email });
    setEditClick(true);
    setEditIndex(index);
  };
  return (
    <>
      <div className="top-left buttonnn">
        <Link to="/dashboard">Go Back</Link>
      </div>
      <div className="min-h-screen ">
        <div className="bg-[#e5e4e4] max-w-fit m-auto">
          <div class="card">
            <div class="card-body">
              <form className="border1" onSubmit={handleSubmit}>
                <div className="flex flex-col">
                  <input name="name" value={inputs.name} onChange={handleChange} placeholder="Name" />
                </div>
                <div className="flex flex-col">
                  <input name="email" value={inputs.email} onChange={handleChange} placeholder="Email" />
                </div>

                <div class="main2">
                  <button class="button1">
                    {editClick ? "update" : "Add"}
                  </button>


                  <div class="loader">
                    <div class="check">
                      <span class="check-one"></span>
                      <span class="check-two"></span>
                    </div>
                  </div>

                </div>
              </form>
            </div>
          </div>
        </div>
        <div>
          <table className="w-full text-center text-black">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="text-black">
              {tableData.map((item, i) => (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>
                    <button
                      onClick={() => handleEdit(i)}
                      className="mr-3 text-blue-300"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(i)}
                      className="text-red-500"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </>
  );
};

export default Newclient;
