import React from "react";

const Body = () => {
    
  return (
    <div className="main">
      <div className="body-content">


        <div className="contentpart">
          <h1>YOUR FEET DESERVE BEST</h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>


          <div className="buttons01">
            <button>Shop Now</button>
            <button className="second-btn">Category</button>
          </div>

          <div className="Shopping">
            <p> also availble on </p>
            <div className="brand-icon">
                    <img src="Images/shops.png" alt="shoesimages"></img>
            </div>
          </div>

        </div>


        <div className="body-image">
          <img src="Images/shoe_image.png" alt="shoesimages"></img>
        </div>

        
      </div>
    </div>
  );
};

export default Body;
