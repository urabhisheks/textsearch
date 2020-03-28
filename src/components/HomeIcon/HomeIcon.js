import React from 'react'
import { Link} from 'react-router-dom';
import classes from './HomeIcon.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

const HomeIcon = props => (

  <div className={classes.Home} >
    <Link to='/' className={classes.Home}>
       <FontAwesomeIcon icon={faHome} />
      </Link>
  </div>
);

export default  HomeIcon;
