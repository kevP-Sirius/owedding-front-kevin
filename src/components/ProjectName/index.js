import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Icon } from 'semantic-ui-react';


// == Import : local
import './projectName.scss';


// == Composant
const ProjectName = ({ name, date, department, forecast_budget, changeInput, createProject }) => {
  const handleChange = (e) => {
    const { value, name } = e.target;
    changeInput(value, name);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createProject();
  };
  return (
    <div id="projectName">
      <div className="bannerFormRight"></div>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Comment souhaitez-vous appeler votre projet ?</label>
          <input
            placeholder="Le nom de votre projet"
            value={name}
            name="name"
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>La date de votre mariage : </label>
          <input
            placeholder="La date prévu pour votre mariage. Exemple: 12 juin 2022"
            value={date}
            name="date"
            type="date"
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Le lieu de votre mariage : </label>
          <input
            placeholder="Le numero de votre departement. Exemple: 17"
            value={department}
            name="department"
            type="number"
            min="1"
            max="94"
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Le budget pour votre mariage :</label>
          <input
            placeholder="Le budget global pour votre mariage. Exemple: 8000 &euro; "
            value={forecast_budget}
            name="forecast_budget"
            onChange={handleChange}
          />
        </Form.Field>
  
        <Button className="buttonSubmit" type="submit"><span>Valider</span>
          <div><Icon name="heart outline" className="iconForButton" /></div>
        </Button>
      </Form>
      <div className="bannerFormLeft"></div>
    </div>
    
  );
}


ProjectName.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired,
  forecast_budget: PropTypes.string.isRequired,
  changeInput: PropTypes.func.isRequired,
  createProject: PropTypes.func.isRequired,
  
};

// == Export
export default ProjectName;