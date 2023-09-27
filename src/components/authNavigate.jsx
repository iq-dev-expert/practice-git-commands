import React from 'react';
import { Link } from 'react-router-dom';

const AuthNavigate = ({ route, text }) => {
  return (
    <div>
      
        <Link to={route}>{text}</Link>
        
      
    </div>
  );
};

export default AuthNavigate;