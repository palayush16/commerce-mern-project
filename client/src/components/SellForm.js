import React from 'react';
import { Link } from 'react-router-dom';
import './SellForm.css';
import RealNavbar from './RealNavbar';

const SellForm = () => {
  return(
      <div>
          <RealNavbar/>

          
              <div className="formBx">
                <div className="product-form">
                    <h2>Enter Product Details</h2>
                    <form>
                      
                      <input type="text" name="" placeholder="Product Name"/>
                      <textarea type="text"  rows="5"  name="" placeholder="Product Detail"/>
                      
                      <Link to="/confirm"><input type="submit" name="" value="Upload Images"/></Link>
                      <input type="number" name="" placeholder="Price"/>
                      <Link to="/confirm"><input type="submit" name="" value="Submit your Product"/></Link>
                    </form>
                  </div>
                  <div className="seller-detail">
                  <h2>Enter Your Detail</h2>
                  <form>
                    <h3>Just For Your Information</h3>
                    <h3>We will need to share your details to one interested in your item. Enter your details if you are Ok with it</h3>
                    <input type="text" name="" placeholder="Your Name"/>
                    <input type="text" name="" placeholder="Hostel No."/>
                    <input type="text" name="" placeholder="Room No."/>
                    <input type="text" name="" placeholder="WhatsApp No."/>
                    
                    <Link to="/confirm"><input type="submit" name="" value="Submit Your Details"/></Link>
                  </form>
                  </div>
              </div>
                    
          
      </div>
      
  ) 
};

export default SellForm;
