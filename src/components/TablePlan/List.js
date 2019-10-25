import React from 'react';
import PropTypes from 'prop-types';
import { Droppable } from 'react-beautiful-dnd';


import './tableplan.scss';
import Guest from 'src/components/TablePlan/Guest';

const List = ({ dataGuests, listID, listClass, title }) => {
  //
  return (   
    <Droppable droppableId={String(listID)}> 
      {(provided) => (
        <div 
          {...provided.droppableProps}
          ref={provided.innerRef} 
          {...provided.droppablePlaceholder}
          className={listClass}
        >
        <ol className="list">
          <div className="listTitle">{title}</div>
          {dataGuests.map((guest, index) => (
            <Guest index={index} key={guest.id} guest={guest} id={guest.id} />
          ))}
        </ol>
        {provided.placeholder}
      </div>
      )}
      
      </Droppable>
  )
};          
 
List.propTypes = {
  dataGuests: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      firstname: PropTypes.string.isRequired,
      lastname: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    }),
  ).isRequired,
};


export default List;
