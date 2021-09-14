import {React,useState} from 'react'

function Employee({addEmployee}) {
    const[value,setValue]=useState("");
    const [val,setVal]=useState("");
    const[designation,setDesignation]=useState("");
    const [number,setNumber]=useState("");
    const handleSumbit=e=>{
        e.preventDefault();
        if(!value )return;
        addEmployee(value);
        setValue("");
        if(!val)return;
        addEmployee(val);
        setVal("");
        if(!designation)return;
        addEmployee(designation);
        setDesignation("");
        if(!number)return;
        addEmployee(number);
        setNumber("");
    
    }
    return (
        
            <form onSubmit={handleSumbit}>
                <table>
                        <tr>
                            <th>FIRST NAME</th>
                            <th>LAST NAME</th>
                            <th>DESIGNATION</th>
                            <th>CONTACT NUMBER</th>
                        </tr>
                     
                            
            <tr>
            <td><input type="text" className="firstName" value={value} onChange={e=>setValue(e.target.value)} ></input></td>
            <td><input type="text" className="lastName" value={val} onChange={e=>setVal(e.target.value)}></input></td>
            <td><input type="text" className="lastName" value={designation} onChange={e=>setDesignation(e.target.value)}></input></td>
            <td><input type="number" className="contact" value={number} onChange={e=>setNumber(e.target.value)} ></input></td>
            </tr>
            </table>
            </form>
    )
}

export default Employee
