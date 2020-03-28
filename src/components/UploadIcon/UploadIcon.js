import React from 'react'
import { Link} from 'react-router-dom';
import classes from './UploadIcon.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'

const UploadIcon = props => (

  <div className={classes.Carticon} >
    <Link to='/upload' className={classes.Carticon}>
       <FontAwesomeIcon icon={faCloudUploadAlt} />
      </Link>
  </div>
);

export default  UploadIcon;
