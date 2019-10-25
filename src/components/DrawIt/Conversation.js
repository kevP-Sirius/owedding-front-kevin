import React from 'react';
import PropTypes from 'prop-types';
import Bubble from './Bubble';

const Conversation = ({ chat }) => (
   
    <div  id="conversation">
        
       
    {chat.map(chatting=>(

        <Bubble key={chatting.id}{...chatting}/>
    ))}
            
       
    
    
    </div>
   
 
);


Conversation.propTypes ={

  chat:PropTypes.arrayOf(PropTypes.shape({
     id:PropTypes.number.isRequired 
  })).isRequired,
   
};
   
   export default Conversation;