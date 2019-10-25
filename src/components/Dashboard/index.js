// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';


// == Import : local
import './dashboard.scss';
import ProjectName from 'src/containers/ProjectName';


// == Composant
const Dashboard = ({ project_status }) => (
  <div id="dashboard">
    <div className="dashRight">
      {!project_status && <ProjectName />}
      {project_status && <Redirect to="/dashboard/guests" />}      
 
    </div>
  </div>
);

Dashboard.propTypes = {
  project_status: PropTypes.bool.isRequired,
  
};

// == Export
export default Dashboard;
