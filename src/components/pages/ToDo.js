import React from 'react';
import ShowToDo from '../pages/ShowToDo'
import './ToDo.css'
import { useState } from 'react'


function ToDo() {
  //For taking uses input we use set task
  const [task, setTask] = useState("Add some task")

  //New State to store data or To store users data we use SetData
  const [data, setData] = useState([])

  // Its handle the task
  const onChangeHandler = (e) => {
    setTask(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const newData = task;
    // here ...data store old data
    setData([...data, newData])
    // console.log("submit");
    setTask('')
  }

  const deleteItem = (a) => {
    // console.log('deleted');
    const finalData = data.filter((curEle, index) => {
      return index !== a
    })
    setData(finalData)
  }
  return (
    <div className="container">
      <div className="row justify-content-center align-items main-row">
        <div className="col shadow-main-col bg-white">
          <div className="row bg-info text-white mr-5">
            <div className="col p-2">
              <h4 className='text-center'>ToDo APP</h4>
            </div>
          </div>
          <form onSubmit={submitHandler}>
            <div className="row justify-content-between text-white p-2">
              <div className="form-group flex-fill mb-2 col-9">
                <input id='todo-input' type='text' className='form-control' value={task} onChange={onChangeHandler} />
              </div>
              <button type="submit" className="btn btn-secondary btn-sm ">ADD ToDo</button>
            </div>
          </form>

          {
            data.map((value, index) => (
              <ShowToDo
                key={index}
                id={index}
                task={value}
                onSelect={deleteItem}
              />
            ))

          }

        </div>
      </div>

    </div>
  )
}


export default ToDo;