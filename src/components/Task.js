import React from 'react'

function Task({task,index,editEmployee,removeEmployee}) {
    
    return (
        <div className="task">
           {task.text} 
           <div>
               <button onClick={()=>editEmployee(index)}>Edit</button>
               <button id="myBtn" onClick={()=>removeEmployee(index)}>Remove</button>
               {/* <div id="myModal" className="modal"></div>
               <div className="modal-content">
                   <div className="modal-header">
                       <span class="close">&times;</span>
                       <h2>Remove Employee</h2>
                   </div>
                   <div className="modal-body">
                       <p>Please confirm if you want to remove</p>
                   </div>
               </div> */}
               
           </div>
        </div>
    )
}

export default Task
