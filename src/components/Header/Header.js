import React from "react";
import './css/Header.css';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
 import {Link} from "react-router-dom";

function Header(){
      return(
          <header>
          <div className="header-container">
              <div className="header-left">
             {/* <Link to="/">  */}
                
              <img 
              src="https://content.presspage.com/uploads/2658/c800_logo-stackoverflow-square.jpg?98978"  
              alt='logo' />
                  
                  {/* </Link> */}
                  <h3>Products</h3>
              </div>
              <div className="header-middle">
                  <div className="header-search-container">
                   <SearchIcon />
                   <input type="text" placeholder="search..."/>
                  </div>
              </div>
              <div className="header-right">
                 <Link to="/auth" ><Avatar /></Link>
              </div>
          </div>
          </header>
      )
    }
    
    export default Header;