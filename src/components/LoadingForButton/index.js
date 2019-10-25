// == Import : npm
import React from 'react';
import { Loader } from 'semantic-ui-react';

// == Import : local

// == Composant
const LoadingForButton = () => (
  <div id="loading">
    <Loader size='tiny' active inline='centered' />
  </div>
);


// == Export
export default LoadingForButton;
