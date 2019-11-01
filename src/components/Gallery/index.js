import React ,{ useEffect }from 'react';
import './gallery.scss';
import DashNav from 'src/containers/DashNav';

import PropTypes from 'prop-types';
import { Button, Form, Icon } from 'semantic-ui-react';


// == Composant
const Gallery = ({images}) => (
    <div id="Gallery">

    <DashNav/>
    <div id="Board">
    <div id="cards">

{images.map(image=>(
    
 <div id="card">
    <input type="hidden" id="card-id" name="card-id" value={image.id}/>
    <img src={image.src} alt={image.name} />
 </div>

))}
 
 </div>
 {/* div de fermedure de Board*/}  
    </div>

{/* div de fermedure de Gallery */}
    </div>
  
     
);
Gallery.propTypes = {
    images: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
      }),
    ).isRequired,
};  
  // == Export
  export default Gallery;