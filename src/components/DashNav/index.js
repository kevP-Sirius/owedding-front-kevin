// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';
import { Route, NavLink, Redirect } from 'react-router-dom';


// == Import : local
import './dashNav.scss';


// == Composant
const DashNav = ({ projectName }) => (
  <div id="dashNav">
    <div className="dashMenu">
      <div className="projectName">{projectName}</div>
      <div className="dashIcons">        
        <NavLink to="/dashboard/guests">
          <div className="iconItem">
            <div className="iconGuests" />
            <div>Créez et gérez votre liste d'invités</div>
          </div>
        </NavLink>
        <NavLink to="/dashboard/providers">
          <div className="iconItem">
            <div className="iconProviders" />
            <div>Recherchez vos futurs prestataires</div>
          </div>
        </NavLink>
        <NavLink to="/dashboard/tables">
          <div className="iconItem">
            <div className="iconTables" />
            <div>Créez et gérez votre plan de table</div>
          </div>
        </NavLink>
        <NavLink to="/dashboard/chat">
          <div className="iconItem">
            <div className="iconChat" />
            <div>Discutez avec vos invités </div>
          </div>
        </NavLink>
        <NavLink to="/dashboard/account">
          <div className="iconItem">
            <div className="iconAccount" />
            <div>Mon compte</div>
          </div>
        </NavLink>
      </div>
    </div>   
  </div>
);

DashNav.propTypes = {
  projectName: PropTypes.string.isRequired,
};

// == Export
export default DashNav;
