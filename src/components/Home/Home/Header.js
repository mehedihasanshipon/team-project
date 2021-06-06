import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./Header.css"

const Header = () => {
    return (
        <div className="header-bg">
            <div className="search-field">
                <h1 style={{color:'white',fontSize:'3rem'}}>Find Your Dream Place</h1>
                <div class="search">
                    <form class="example" action="/action_page.php" >
                        <input type="text" placeholder="Search.." name="search2" />
                        <button type="submit"><FontAwesomeIcon icon={faSearch}/></button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Header;