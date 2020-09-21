import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';


/*=============================================
=            Navigation            =
=============================================*/

const Navigation = () => 
{
    return(
        <nav>            
            <ul>
                <li>
                    <Link to = '/'>
                        ABOUT
                    </Link>
                </li>
                <li>
                    <Link to = '/'>
                        EVENTS
                    </Link>
                </li>
                <li>
                    <Link to = '/'>
                        NEWS
                    </Link>
                </li>
                <li>
                    <Link to = '/'>
                        DONATE
                    </Link>
                </li>
                <li>
                    <Link to = '/'>
                        SHOP
                    </Link>
                </li>
                <li>
                    <Link to = '/'>
                        VOLUNTEER
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

/*=====  End of Navigation  ======*/

export default Navigation;