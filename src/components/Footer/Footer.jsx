import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
<section className="f-wrapper">
    <div className="paddings innerWidth flexCenter f-container">

        {/* left side */}

        <div className="flexColStart f-left">
            <img src="./logo2.png" alt="footer" width={120} />
        <span className="secondaryText">
            Venha nos visitar <br />
Estaremos de portas abertas        </span>
        
        </div>




          {/* right side */}

          <div className="flexColStart f-right">
        <span className="primaryText">
Informações
        </span>

        <span className="secondaryText">
Rua treze de maio, 1772
        </span>
        <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
        </div>
        </div>
    </div>
</section>
  )
}