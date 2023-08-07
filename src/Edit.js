import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import { editData } from './slice';

function Edit() {
    const dispatch = useDispatch();
    const Bdata = useSelector((state)=>state.dataKey);
    const nav= useNavigate();
    const loc = useLocation().state.data;
    const currentData={
        name: Bdata[loc].name,
        age: Bdata[loc].age,
        course: Bdata[loc].course,
        batch: Bdata[loc].batch,
    }

    const handleChange = (event)=>{
        currentData[event.target.name]=event.target.value;
    }

    const HandleSubmit=()=>{
        dispatch(editData({currentData,loc}));
        nav(-1);
    }
    
    const cancel=()=>{
        nav(-1);
    }
  return (
    <>
    <Navbar/>
    <br/>
    <br/>
    <br/>
    <div className='formInput'>
    <input name="name" onChange={handleChange} placeholder={Bdata[loc].name} />
    <input name="age" onChange={handleChange} placeholder={Bdata[loc].age} />
    </div>
    <br/>
    <br/>
    <div className='formInput'>
    <input name="course" onChange={handleChange} placeholder={Bdata[loc].course} />
    <input name="batch" onChange={handleChange} placeholder={Bdata[loc].batch} />
    </div>
    <br/>
    <button onClick={HandleSubmit} className="subBtn">Update</button>
    <button onClick={cancel} className="cancelBtn">Cancel</button>
    </>
  )
}

export default Edit