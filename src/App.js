import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './Routing/Home';
import Contact from './Routing/Contact';
import Student from './Routing/Student';
import { useState } from 'react';
import AddNew from './AddNew';
import Edit from './Edit';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  const [data, setData] = useState([{name:"Akash", age:22, course:"MERN", batch:"November"},{name:"John", age:24, course:"MERN", batch:"September"},{name:"Mohan", age:21, course:"MERN", batch:"November"},{name:"Ajay", age:25, course:"MERN", batch:"October"}]);
  
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/student' element={
          <Provider store = {store} value={{entries:data, updateFun:setData}}>
          <Student/>
        </Provider>
        }/>

        <Route path='/addnew' element={
          <Provider store = {store} value={{entries:data, updateFun:setData}}>
          <AddNew/>
        </Provider>
        }/>

        <Route path='/editStudent' element={
          <Provider store = {store} value={{entries:data, updateFun:setData}}>
          <Edit/>
        </Provider>
        }/>

        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;