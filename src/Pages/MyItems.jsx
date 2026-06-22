import React from 'react'
import "./MyItems.css";
import Navbar from '../Components/Navbar';
import avatar from "../assets/avatar.png"
import { useNavigate } from 'react-router-dom';

function MyItems() {
  const user = JSON.parse(localStorage.getItem("user"));

  const navigate = useNavigate();
  return (
    
    <>
    <Navbar />
    <section className='my-items-page'>
    
    <div className='profile-card'>
      <div className='profile-avatar'>
      <img src={avatar} alt='avatar-img' />
      </div>
      <div className='profile-description'>
      <h2>{user.name}</h2>
      <h3>{user.email}</h3>
      </div>
    </div>


    <section className='row-2'>

      <div className='total-report-card'>
        <h1> 2 </h1>
        <h3>Total Reports</h3>
      </div>

      <div className='lost-report-card'>
        <h1> 1 </h1>
        <h3>Lost</h3>
      </div>

      <div className='found-report-card'>
        <h1> 1 </h1>
        <h3>Found</h3>
      </div>

      <div className='returned-report-card'>
        <h1> 0 </h1>
        <h3>Returned</h3>
      </div>
      

    </section>

    <section className='row-3'>

      <h3>My Listings</h3>

      <div className='dell-laptop'>
        <div className='row3-subheading'>
        <h3>Dell laptop</h3>
        </div>
        <div className='row3-buttons'>
        <button onClick={() => navigate("/itemdetails")}>
             View
        </button>
        {/* <button>Edit</button>
        <button>Returned</button>
        <button>Delete</button> */}
        </div>

      </div>

      <div className='lenovo-laptop'>
        <div className='row3-subheading'>
        <h3>Lenovo laptop</h3>
        </div>
        <div className='row3-buttons'>
        <button>View</button>
        {/* <button>Edit</button>
        <button>Returned</button>
        <button>Delete</button> */}
        </div>

      </div>




    </section>

    


    </section>

  
    </>
  )
}

export default MyItems
