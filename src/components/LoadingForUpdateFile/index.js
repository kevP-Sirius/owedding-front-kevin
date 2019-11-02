import React from 'react';
import { Loader } from 'semantic-ui-react';
// == Import : local
import './loading.scss';
const LoaderForUpdateFile = () => (
  <div id="loadingUpload">
    <Loader size='massive' active inline='centered'>Fichier en cours de chargement</Loader>
  </div>
)

export default LoaderForUpdateFile;