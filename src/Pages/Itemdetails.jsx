import React from "react";
import Navbar from "../Components/Navbar";
import "./Itemdetails.css";
import delllaptop from "../assets/dell-laptop.jpg";
import { useNavigate } from "react-router-dom";

function ItemDetails() {
    const navigate = useNavigate();
  return (
    <>
      <Navbar />

      <div className="item-details-page">

        <button className="back-btn"
        onClick={()=>navigate("/Home")}>
          ← Back to Listings
        </button>

        <div className="item-details-card">

          <div className="item-image">
            <img
              src={delllaptop}
              alt="item"
            />
          </div>

          <div className="item-info">

            <div className="item-tags">
              <span className="lost-tag">LOST</span>
              <span className="category-tag">ELECTRONICS</span>
            </div>

            <h1>Dell laptop</h1>

            <p><strong>Location:</strong> Library block</p>

            <p><strong>Date:</strong> 06-06-2026 </p>

            <p><strong>Reported By:</strong> Krishna Raj BR</p>

            <p><strong>Posted:</strong> 28-06-2026</p>

            <h3>Description</h3>

            <div className="description-box">
              Found a black Dell laptop near the library reading tables. Has some stickers on the lid. It also has a small scratch at the lid
            </div>

          </div>

        </div>

      </div>
    </>
  );
}

export default ItemDetails;