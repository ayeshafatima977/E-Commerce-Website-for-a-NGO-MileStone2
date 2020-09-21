import React from 'react';
import { Link } from "react-router-dom";




/*=============================================
=            HeaderComponent            =
=============================================*/

const HeaderComponent = () => 
{   
    const ShowOverLay = (toShowForName) => 
    {
        var login = document.getElementById("login");
        login.classList.add("contactform-overlay");
        
    }
    

    return(
        
        <>
            <logo>Logo</logo>
            <h1>Make A DIFFERENCE</h1>
            <nav>           
                <ul>    
                    <li><Link to="/about">ABOUT</Link></li>
                    <li><Link to="/events">EVENTS</Link></li>
                    <li><Link to="/news">NEWS</Link></li>
                    <li><Link to="/donate">DONATE</Link></li>
                    <li><Link to="/shop">SHOP</Link></li>
                    <li><Link to="/volunteer">VOLUNTEER</Link></li>{/*!Parking lot item */}
                </ul>
                <ul>
                    <li><a href="" id="login" className="contactform-overlay" onClick={ShowOverLay("login")} >LOGIN</a></li>
                    <li><a href="" id="contact" className="contactform-overlay" onClick={ShowOverLay("contact")}>CONTACT</a></li>
                    <li><Link to="/cart">CART</Link></li>                   
                </ul>
            </nav>
        </>
        
    );
}

/*=====  End of HeaderComponent  ======*/

export default HeaderComponent;