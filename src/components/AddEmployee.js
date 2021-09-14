import React from 'react'


    const AddEmployee=({showModal,setShowModal})=>{
    return (
        <>
        {showModal ?
        <div>
               <div id="myModal" className="modal">
               <div className="modal-content">
                   <div className="modal-header">
                       <span class="close">&times;</span>
                       <h2 className="heading">Add Employee</h2>
                   </div>
                   <div className="modal-body">
                       <div>First Name*</div>
                        <input type="text" placeholder="Enter First Name" label="First Name*"></input>
                       <div>Last Name*</div><input type="text" placeholder="Enter Last Name" label="Last Name*"></input>
                       <div>Desingantion*</div><input type="text" placeholder="Enter Designation" label="Designation*"></input>
                       <div>Contact Number*</div><input type="number" placeholder="Enter Contact Number" label="Contact Number*"></input>

                   </div>
                   <div className="modal-footer">
                       <span>
                           <button className="cancel">Cancel</button>
                           <button className="add">Add</button>
                       </span>
                       </div>
                   </div>
               </div> 
        </div>
        :null}
        </>
            )}


export default AddEmployee
