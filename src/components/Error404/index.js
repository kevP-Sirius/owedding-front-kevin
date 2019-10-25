// == Import : npm
import React from 'react';
import 'semantic-ui-css/semantic.min.css';

// == Import : local
import './error404.scss';



// == Composant
const Error404 = () => (
  <div id="error404">
    <h1>404</h1>
<div class="error">
<main>
  <div>
    <div>
      <span>Vous avez trouvé votre moitié</span>
      <span>mais pas la bonne page</span>
    </div>
    <svg viewBox='0 0 200 600'>
      <polygon points='118.302698 8 59.5369448 66.7657528 186.487016 193.715824 14 366.202839 153.491505 505.694344 68.1413353 591.044514 200 591.044514 200 8'></polygon>
    </svg>
  </div>
  <svg class='crack' viewBox='0 0 200 600'>
    <polyline points='118.302698 8 59.5369448 66.7657528 186.487016 193.715824 14 366.202839 153.491505 505.694344 68.1413353 591.044514'></polyline>
  </svg>
  <div>
    <svg viewBox='0 0 200 600'>
      <polygon points='118.302698 8 59.5369448 66.7657528 186.487016 193.715824 14 366.202839 153.491505 505.694344 68.1413353 591.044514 0 591.044514 0 8'></polygon>
    </svg>
    <div>
      <span>Nous en sommes désolé</span>
      <span>
        <a href="http://92.243.10.85/">
          <b>Retournez à l'accueil !</b>
        </a>
      </span>
    </div>
  </div>
</main>
</div>
  </div>
);
// == Export
export default Error404;