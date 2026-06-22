import React, { useState } from 'react'
import "./SearchBar.css";

function SearchBar() {
    const[search,setSearch] = useState("");
  return (
    <section className="search-section">
        <div className="search-container">
            <input placeholder="Search by name or keyword" 
            value={search}
            onChange={(e)=>setSearch(e.target.value)}/>
            <select>
                <option>All Statuses</option>
                <option>Lost</option>
                <option>Found</option>
            </select>
            <select>
                <option value="">Select Category</option>
                <option>Electronics</option>
                <option>Books</option>
                <option>Accessories</option>
            </select>
            <select>
                <option>Newest First</option>
                <option>Oldest First</option>
            </select>
      </div>
    </section>
  )
}

export default SearchBar
