import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import Navbar from "../Navbar";
import "../App.css";

const Student = () => {
    const Bdata = useSelector((state)=>state.dataKey)
    const nav = useNavigate();
    return(
        <>
        <Navbar/>
        <h1>Student Datails</h1>
        <button className="addbtn" onClick={()=>{nav('/addnew')}}>Add New Student</button>
        <br/>
        <div className="table">
        <table border={"1px"} >
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Course</th>
                    <th>Batch</th>
                    <th>Change</th>
                </tr>
            </thead>
            <tbody>
                {Bdata.map((item,index)=>(
                    <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.course}</td>
                        <td>{item.batch}</td>
                        <td>
                            <Link to='/editStudent' state={{data:index}}>Edit</Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
        </>
    )
}

export default Student;