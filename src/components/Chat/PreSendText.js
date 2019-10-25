import React from 'react';
import PropTypes from 'prop-types'






const PreSendText=({name})=>(
    <p>{name} est en train d'écrire un message<p className="saving"><span>.</span><span>.</span><span>.</span></p></p>
);
  
       
    
   

    
PreSendText.propTypes ={
      
    name: PropTypes.string.isRequired,
    
    
    
};
    
    export default PreSendText;