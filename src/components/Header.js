import React from 'react';
import { Link } from "react-router-dom";





/*=============================================
=            HeaderComponent            =
=============================================*/

const HeaderComponent = () => 
{   
    const ShowOverLay = (toShowFormName) => 
    {
        if(toShowFormName==="contact")
        {
            const callingForm = document.getElementsByClassName("contactform-overlay");            
        }
        else if (toShowFormName==="login")
        {
            const callingForm = document.getElementsByClassName("loginform-overlay"); 
        }
        callingForm.classList.add("form-overlay");      
        
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
                    <li><a href=""  onClick={ShowOverLay("login")} >LOGIN</a></li>
                    <li><a href=""  onClick={ShowOverLay("contact")}>CONTACT</a></li>
                    <li><Link to="/cart">CART</Link></li>                   
                </ul>
            </nav>
        </>
        
    );
}

/*=====  End of HeaderComponent  ======*/

export default HeaderComponent;