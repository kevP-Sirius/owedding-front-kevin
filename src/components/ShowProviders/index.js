import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image, Button, Icon } from 'semantic-ui-react';


import './showproviders.scss';
import DashNav from 'src/containers/DashNav';
import Budget from 'src/containers/Budget';


const ShowProviders = ({ providers, chooseProvider }) => {
  const handleClick = (id) => () => {
    console.log(id);
    chooseProvider(id);
  };
  return (
    <div id="showProviders">
    <div className="navBudget">
        <DashNav />
        <Budget />
      </div>
      <div className="providersBoard">
        <Card.Group itemsPerRow={4} stackable>
          {providers.map((provider) => (
            <Card className="providersCard">
              <Image className="providerImage" src={provider.provider_image} wrapped ui={false} />
              <Card.Content>
                <Card.Header className="nameCard">
                  {provider.name}
                </Card.Header>
                <Card.Meta>
                  {/* <div className="contactCard">
                    Email: {provider.email}
                   </div> */}
                   <div className="contactCardPhone">
                   Téléphone: 0{provider.phone_number}
                   </div>
                </Card.Meta>
                <Card.Description className="descriptionCard">
                  {provider.provider_description}
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className="tarifCard">
                  Tarifs: {provider.average_price} &euro;
                </div>
              </Card.Content>
              <Button animated='vertical' onClick={handleClick(provider.id)} className="buttonProvider">
                <Button.Content hidden>
                <Icon name='shop' />
                </Button.Content>
                <Button.Content visible>Choisir</Button.Content>
              </Button>
            </Card>
          ))}
        </Card.Group>

      </div>
    </div>
  );
};

ShowProviders.propTypes = {
  chooseProvider: PropTypes.func.isRequired,
  providers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      provider_image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      provider_description: PropTypes.string.isRequired,
      phone_number: PropTypes.number.isRequired,
      average_price: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default ShowProviders;