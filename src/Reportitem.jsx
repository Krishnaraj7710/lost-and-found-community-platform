import { useState } from "react";

function ReportItem(){
    const[itemName,setItemName] = useState("");
    const[category,setCategory] = useState("");
    const[date,setDate] = useState("");
    const[location,setLocation] = useState("");
    const[description,setDescription] = useState("");
    return(
        <div>
            <h1>Report lost item</h1>
            <label>Item Name</label>
            <input placeholder="Enter the lost item name" 
            value ={itemName}
            onChange={(e)=>setItemName(e.target.value)}
            />
            <label>Category</label>
            <select
            value={category}
            onChange={(e)=>setCategory(e.target.value)}
            >
                <option value="">Select Category</option>
                <option>Electronics</option>
                <option>Documents</option>
                <option>Accessories</option>
                <option>Clothing</option>
                <option>Others</option>

            </select>

            <label>Date lost</label>
            <input type="date"
            value={date}
            onChange={(e)=>setDate(e.target.value)} />

            <label>Location</label>
            <input placeholder="Enter the locaion" 
            value={location}
            onChange={(e)=>setLocation(e.target.value)}/>

            <label>Description</label>
            <textarea 
            placeholder="Describe the lost item"
            value={description}
            onChange={(e)=>setDescription(e.target.value)}></textarea>
            




        </div>
    )
}
export default ReportItem;