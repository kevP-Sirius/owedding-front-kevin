import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Icon } from 'semantic-ui-react';
import { Draggable } from 'react-beautiful-dnd';


import './tableplan.scss';


const Guest = ({ guest, id, index }) => {
  // const handleChange = (event) => {
  //   const { value, name } = event.target;
  //   changeInputConnect(value, name);
  // };
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   connectFunc();
  // };
  return (    
    <Draggable draggableId={String(id)} index={index}>
      {(provided) => (
        <div 
        className="guests" 
        ref={provided.innerRef} 
        index={index}
        {...provided.draggableProps} 
        {...provided.dragHandleProps}>
        <li />
        <div className="guestName">
          {guest.firstname} {guest.lastname} - {guest.type=='witness' && 'tém.'}
          {guest.type=='maried' && 'mar.'}
          {guest.type=='guest' && 'inv.'}
        </div>
        <div className="deleteGuest">
       
        </div>
      </div>
      )}
      
    </Draggable>
  );
};          
 
Guest.propTypes = {
guest: PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.number.isRequired,
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }),
).isRequired,
};


export default Guest;
