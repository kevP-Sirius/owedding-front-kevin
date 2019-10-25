import React from 'react';
import Icon from '@material-ui/core/Icon';
import PropTypes from 'prop-types';



const ActionButton = ({ addList }) => {
  const openForm = () => {
    console.log('cliiiick');
    addList();
  };

  return (
    <div className="actionButton" onClick={openForm}>
      <Icon fontSize="large">add</Icon>
      <p>Ajouter une table</p>
    </div>
  );
};

ActionButton.propTypes = {
  addList: PropTypes.func.isRequired,
};

export default ActionButton;
