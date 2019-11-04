import React ,{ useEffect }from 'react';
import './gallery.scss';
import DashNav from 'src/containers/DashNav';
import store from "../../store";
import PropTypes from 'prop-types';
import { Button, Form, Icon } from 'semantic-ui-react';

// == Composant
const Gallery = ({ images, basePath, loadImages, imagesStatus, deleteImages}) => {
  useEffect(() => {
   console.log(images);
   console.log(imagesStatus);
   if(imagesStatus===false){
    loadImages();
   }
    
   
    console.log('coucou je suis le hook de Gallery');
    
  });
  const handleDeleteImage = (id,name) => () => {
    console.log(id);
    if(confirm('supprimer l\'image:"'+name+'"?'));
    {
      const project = {
        imageId: id,
      };
      console.log('pressed ok');
      deleteImages(project);
    }
  };
  return (
    <div id="Gallery">
      
      <DashNav />
      <div id="Board">
        <div id="cards">

          {images.map(image => (
    
            <div id="card">
              <div id="delete-icon">
                <Icon name="delete" onClick={handleDeleteImage(image.id, image.name)} />
              </div>
            
              <img  src={basePath + image.src } alt={image.name} height="400" width="300" />
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
  deleteImages: PropTypes.func.isRequired,
  basePath: PropTypes.string.isRequired,
  loadImages: PropTypes.func.isRequired,
  imagesStatus: PropTypes.bool.isRequired,
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
