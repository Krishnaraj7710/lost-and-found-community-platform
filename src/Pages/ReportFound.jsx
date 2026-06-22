import React, { useState } from 'react'
import "./ReportFound.css"
import Navbar from '../Components/Navbar';


function ReportFound() {
  const[itemname,setItemName] = useState("");
  const[category,setCategory] = useState("");
  const[date,setDate] = useState("");
  const[location,setLocation] = useState("");
  const[description,setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!itemname || !category || !date || !location || !description){
        alert("Please fill all fields");
        return;
    }

    alert("Report Submitted Successfully!");
};
  
  
  return (
    <>
    <Navbar />
    <section className='page-header'>
      <div className='heading'>
      <h1>Report Found Item</h1>
      <p>Fill in the details below so the community can help you return it.</p>
      </div>

      <form className='Lost-Form' onSubmit={handleSubmit}>

        <div className='row1'>
          <div>
          <label>Item name</label>
          <input placeholder='Item name'
          value={itemname}
          onChange={(e)=>setItemName(e.target.value)}/>
          </div>
          <div>
          <label>Category</label>
          <select value={category}
          onChange={(e)=>setCategory(e.target.value)}>
            <option value="">Select Category</option>
           
            <option>Electronics</option>
            <option>Books</option>
            <option>Accessories</option>
          </select>
        
           </div>
        </div>
        
        <div className='row2'>
          <div>
          <label>Date Found</label>
          <input type='date' 
          value={date}
          onChange={(e)=>setDate(e.target.value)}/>
          </div>
          <div>
          <label>Location</label>
          <input placeholder='Enter the location' 
          value={location}
          onChange={(e)=>setLocation(e.target.value)}/>
          </div>
        </div>
        
        <div className='row3'>
          <label>Description</label>
          <textarea placeholder='Descibe about the lost item' 
          value={description}
          onChange={(e)=>setDescription(e.target.value)}/>
        </div>

        <div className='row4'>
          <label>Upload Image</label>
          <div className='upload-image'>
            Click here to upload image
          </div>
        </div>

        <div className='row5'>
          <button className='cancel-button'>Cancel</button>
          <button className='submit-button' type='submit'>Submit Found Report</button>
        </div>


      </form>

      


    </section>
    </>
  )
}

export default ReportFound
