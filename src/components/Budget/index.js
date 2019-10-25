// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';


// == Import : local
import './budget.scss';


// == Composant
const Budget = ({budgetForecast, budgetCurrent, providersAdded, deleteProvider }) => {
  const handleChangeGuest = (id) => () => {
    deleteProvider(id);
  };
  return (
    <div id="budget">
      <div className="budgetMenu">
        <h2 className="budgetTitle">Votre budget :</h2>
        <div className="budgetCorpus">
          <p id="budgetTotal">Budget alloué : {budgetForecast} &euro;</p>
          <p id="budgetRestant">Budget restant : {budgetCurrent} &euro;</p>
          {providersAdded !== '' && providersAdded.map(provider => (
            <div className='providerInCart'>
              <div className="providerTheme">{provider.provider_theme_name}:</div>
              <div className="providerItem">
                <div className="providerName">
                  {provider.name} - {provider.average_price} &euro;
                </div>
              <div className="deleteProvider">
              <Icon name="delete" onClick={handleChangeGuest(provider.id)} />
              </div>
              </div>
            </div>
          ))}
          </div>
      </div>
    </div>
  );
}



Budget.propTypes = {
  budgetForecast: PropTypes.number.isRequired,
  budgetCurrent: PropTypes.number.isRequired,
  providersAdded: PropTypes.arrayOf(PropTypes.shape({
    id:PropTypes.number.isRequired ,
})).isRequired,
  deleteProvider: PropTypes.func.isRequired,
};

// == Export
export default Budget;
