import React from'react';
import PropTypes from'prop-types';


const Bubble =({name,message,hour})=>(
    
<div>
    <h3>{name}</h3>
    <p>{message}</p>
    <h6>{hour}</h6>
</div>
);


Bubble.propTypes ={
  
 name: PropTypes.string.isRequired,
 message: PropTypes.string.isRequired,
 hour: PropTypes.string.isRequired,


};

export default Bubble;