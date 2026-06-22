import React from 'react'
import "./Itemcard.css"
import delllaptop from "../assets/dell-laptop.jpg";
import lenovolaptop from "../assets/lenovo-laptop.webp";
import iphone13pro from "../assets/iphone13pro.jpg";
import carkeys from "../assets/car-image.webp";
import wallet from "../assets/brownleatherwallet.avif"
import bluebag from "../assets/bluebag.webp"
import { useNavigate } from 'react-router-dom';

function Itemcard() {
  const navigate = useNavigate();
  return (
  <>
    <section className="active-listings">
    <div className="listings-header">
      <h2>Your Active listings</h2>
      <h2>2 listings</h2>
    </div>

    <div className="card-container">
        <div className="item-card">
            <div className='card-image'>
              <img src={delllaptop} alt="Dell laptop" />

            </div>
            <div className='item-content'>
              <div className='card-header'>
                   <h3>Dell laptop</h3>
                   <span className='lost-badge'>Lost</span>
              </div>
            
            <p>Electronics</p>
            <p>Library block</p>
            <p>06-02-2026</p>
            <p>black dell laptop</p>
            </div>


            <div className='card-footer'>
                <span className='Category'>Electronics</span>
                <button onClick={()=>navigate("/Itemdetails")}>View Details</button>
            </div>


        </div>

        <div className='item-card'>
          <div className='card-image'>
            <img src={lenovolaptop} alt='lenovo laptop' />

          </div>
          <div className='item-content'>
            <div className='card-header'>
          <h3>Lenovo Laptop</h3>
          <span className='found-badge'>Found</span>
            </div>
            <p>Electronics</p>
            <p>Kompetenzy ,Palayam</p>
            <p>20-06-2026</p>
            <p>black lenovo laptop</p>
          </div>


            <div className='card-footer'>
                <span className='Category'>Electronics</span>
                <button>View Details</button>
            </div>
        </div>

        

    </div>
    </section>






    <section className='community-listings'>
      <div className='community-listings-header'>
        <h3>Community Listings</h3>
        <h3>4 items</h3>

      </div>

    <div className='card-container'>
      <div className='item-card'>
          <div className='card-image'>
            <img src={iphone13pro} alt='iphone 13 pro' />

          </div>
          <div className='item-content'>
            <div className='card-header'>
          <h3>Black Iphone 13 pro</h3>
          <span className='found-badge'>Found</span>
            </div>
            <p>Electronics</p>
            <p>City Mall, Food Court – 2nd Floor</p>
            <p>20-06-2026</p>
            <p>Black iPhone 13 Pro with a cracked screen protector. Has a dark-green silicone case.</p>
          </div>


            <div className='card-footer'>
                <span className='Category'>Electronics</span>
                <button>View Details</button>
            </div>
        </div>

        <div className='item-card'>
          <div className='card-image'>
            <img src={carkeys} alt='car keys' />

          </div>
          <div className='item-content'>
            <div className='card-header'>
          <h3>Car Keys - Honda</h3>
          <span className='lost-badge'>Lost</span>
            </div>
            <p>Accessories</p>
            <p>Indiranagar Metro Station, Platform 1</p>
            <p>15-06-2026</p>
            <p>Car keys with a small orange keychain attached.Found on the platform bench</p>
          </div>


            <div className='card-footer'>
                <span className='Category'>Accessories</span>
                <button>View Details</button>
            </div>
        </div>

        <div className='item-card'>
          <div className='card-image'>
            <img src={wallet} alt='brown wallet' />

          </div>
          <div className='item-content'>
            <div className='card-header'>
          <h3>Brown Leather Wallet</h3>
          <span className='lost-badge'>Lost</span>
            </div>
            <p>Accessories</p>
            <p>Café Coffee Day, MG Road Outlet</p>
            <p>19-06-2026</p>
            <p>Brown leather men's wallet. Contains some cash and a couple of debit cards.</p>
          </div>


            <div className='card-footer'>
                <span className='Category'>Accessories</span>
                <button>View Details</button>
            </div>
        </div>

        <div className='item-card'>
          <div className='card-image'>
            <img src={bluebag} alt='blue bag' />

          </div>
          <div className='item-content'>
            <div className='card-header'>
          <h3>Blue Backpack</h3>
          <span className='found-badge'>Found</span>
            </div>
            <p>Accessories</p>
            <p>Central Park, Near the Fountain</p>
            <p>20-06-2026</p>
            <p>Navy blue JanSport backpack left near the main fountain.</p>
          </div>


            <div className='card-footer'>
                <span className='Category'>Accessories</span>
                <button>View Details</button>
            </div>
        </div>

        

        

    </div>

    </section>
  </>
  )
}

export default Itemcard
