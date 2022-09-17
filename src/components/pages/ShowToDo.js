import React from 'react'

function ShowToDo(props){

    return (
        <div className="container">
            <div className="row my-2">

                <div className="col-6">
                    <h6>{props.task}</h6>
                </div>
                <div className="col-6">
                    <button onClick={()=>{
                        //props send data from child to parent  
                        props.onSelect(props.id )
                    }}>X</button>
                </div>  
            </div>

        </div>
    )
}
export default ShowToDo;