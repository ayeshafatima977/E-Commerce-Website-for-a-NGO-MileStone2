import React from 'react';




/*=============================================
=            Footer            =
=============================================*/

const Footer = () => 
{
    return(
        <footer>
        
            {/* Contact Us start */}        
            <section>
                <h1>Contact Us</h1>            
                <p>12332 123 St Nw, Edmonton</p>
                <p>Alberta, T0A 0W0, 780-000-8888</p>                  
            </section>   
            {/* Contact Us end */} 


            {/* Get Social start */} 
            <section>
                <h1></h1>
            </section>
            {/* Get Social end */}   


            {/* Newsletter start */}           
            <section>
                <h1>Newsletter</h1>
                <p>Stay up to date with our work and how you can help - learn more.</p>
                <input type='text' placeholder='First name' />
                <input type='text' placeholder='Last name' />
                <input type='email' placeholder='Email Address' />
            </section>  
             {/* Newsletter end */}         
        </footer>
        
        
        
        
        
        
    );
}

/*=====  End of Footer  ======*/

export default Footer;