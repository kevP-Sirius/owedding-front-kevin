// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Icon } from 'semantic-ui-react';


// == Import : local
import './coupleNames.scss';


// == Composant
const CoupleNames = ({ spouse1, spouse2, changeInputConnect, spousesSubmit }) => {
  const handleChange = (event) => {
    const { value, name } = event.target;
    changeInputConnect(value, name);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    spousesSubmit();
  };
  return (
  <div id="coupleNames">
    <Form onSubmit={handleSubmit}>
      <div className="inputs">
        <div className="mariedFirst">        
          <Form.Field>
            <label>Prenom du conjoint 1</label>
            <input
              placeholder="Last Name"
              value={spouse1}
              name="spouse1"
              onChange={handleChange}
            />
          </Form.Field>
        </div>
        <div className="mariedSecond">        
          <Form.Field>
            <label>Prenom du conjoint 2</label>
            <input
              placeholder="Last Name"
              value={spouse2}
              name="spouse2"
              onChange={handleChange}
            />
          </Form.Field>
        </div>
        <div className="radios">
          <Form.Group inline>
            <label>Size</label>
            <Form.Radio
              label='Small'
              value='sm'
              checked={value === 'sm'}
              onChange={handleChange}
            />
            <Form.Radio
              label='Medium'
              value='md'
              checked={value === 'md'}
              onChange={handleChange}
            />
            <Form.Radio
              label='Large'
              value='lg'
              checked={value === 'lg'}
              onChange={handleChange}
            />
          </Form.Group>
        </div>
      </div>
      <Button type="submit">Se connecter</Button>
    </Form>
  </div>
  )
};

CoupleNames.propTypes = {
  spouse1: PropTypes.string.isRequired,
  spouse2: PropTypes.string.isRequired,
  changeInputConnect: PropTypes.func.isRequired,
  spousesSubmit: PropTypes.func.isRequired,

};

// == Export
export default CoupleNames;
