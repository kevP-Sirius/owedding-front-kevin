import React from 'react';
import PropTypes from 'prop-types';
import Pre_send_text from './PreSendText';
const Pre_send =({pre_sends})=>(
    <div id="pre-send">
    {pre_sends.map( (pre_send, index)=>(
      <Pre_send_text key={index}{...pre_send}/>
    ))

    }
    
    </div>
);

Pre_send.propTypes = {

    pre_sends:PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.number.isRequired ,
    })).isRequired,

}


export default Pre_send;