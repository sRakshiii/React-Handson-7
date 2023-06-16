import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Navbar from './Navbar';
import { addData } from './slice';

function AddNew() {
    //const DataContext  = useContext(ContextData);
    const dispatch = useDispatch();
    //const Bdata = useSelector((state)=>state.dataKey)
    const nav= useNavigate();
    const  newObj = {
        name:"",
        age:"",
        course:"",
        batch:""
    }
    const handleChange = (event)=>{
        newObj[event.target.name]=event.target.value;
    }
    const HandleSubmit=()=>{
        dispatch(addData(newObj));
        nav(-1);
    }
  return (
    <>
    <Navbar/>
    <br/>
    <br/>
    <br/>
    <div className='formInput'>
    <input name="name" onChange={handleChange} placeholder='Name' />
    <input name="age" onChange={handleChange} placeholder='Age' />
    </div>
    <br/>
    <br/>
    <div className='formInput'>
    <input name="course" onChange={handleChange} placeholder='Course' />
    <input name="batch" onChange={handleChange} placeholder='Batch' />
    </div>
    <br/>
    <button onClick={HandleSubmit} className="subBtn">Submit</button>
    </>
  )
}

export default AddNew;