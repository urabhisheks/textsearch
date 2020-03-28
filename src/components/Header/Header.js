import React from 'react'
import classes from './Header.module.css';
import HomeIcon from '../HomeIcon/HomeIcon';
import UploadIcon from '../UploadIcon/UploadIcon';

const Header = props => (
  <header className={classes.Header} >
    
    <div className={classes.Logo} >
      <HomeIcon />
    </div>
    <div className={classes.text}>Mini Search Engine</div>
    <UploadIcon />
  </header>
);

export default Header;