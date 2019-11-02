import React ,{ useEffect }from 'react';
import './gallery.scss';
import DashNav from 'src/containers/DashNav';
import store from "../../store";
import PropTypes from 'prop-types';


// == Composant
const Gallery = ({ images, basePath, loadImages }) => {
  useEffect(() => {
   console.log(images);
    console.log('coucou je suis le hook de Gallery');
  });
  return (
    <div id="Gallery">

      <DashNav />
      <div id="Board">
        <div id="cards">

          {images.map(image => (
    
            <div id="card">
              <input type="hidden" id="card-id" name="card-id" value={image.id} />
              <img src={basePath + image.src} alt={image.name} />
            </div>

          ))}
 
        </div>
 {/* div de fermedure de Board*/}  
      </div>

{/* div de fermedure de Gallery */}
    </div>  
  );
};
Gallery.propTypes = {
  loadImages: PropTypes.func.isRequired,
  basePath: PropTypes.string.isRequired,
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
