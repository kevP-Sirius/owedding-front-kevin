import React ,{ useEffect }from 'react';
import './gallery.scss';
import DashNav from 'src/containers/DashNav';
import store from "../../store";
import PropTypes from 'prop-types';
import { Button, Form, Icon } from 'semantic-ui-react';

// == Composant
const Gallery = ({ images, basePath, loadImages, imagesStatus, deleteImages, switchCursor, zoomStatus }) => {
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
  const handleZoomImage = (imageSource) => (event) => {
    console.log('handleZoomImage');
    console.log('width:'+event.target.style.width);
    switchCursor();
    
    var imgs = document.getElementsByTagName('img');
    console.log(imgs.length);
    console.log(imgs[0].style.width);
    if(event.target.style.width === '600px'|| event.target.style.width === ''){
      console.log('zoom-in');
      
      event.target.parentNode.childNodes[0].parentNode.parentNode.childNodes[0].style.left='1588px';
      document.getElementById('nav').style.visibility='hidden';
      event.target.style.cursor = 'zoom-out';
      event.target.style.width = '1500px';
      event.target.style.height= '1500px';
      // window.open(basePath+imageSource);
    }else{
      console.log('zoom-out');
      event.target.style.cursor = 'zoom-in';
      event.target.style.width = '600px';
      event.target.style.height = '600px';
      event.target.parentNode.childNodes[0].parentNode.parentNode.childNodes[0].style.left='691px';
      var countBig = 0 ;
      for (var i = 0; i < imgs.length; i++) {
        if(imgs[i].style.width==='600px'||imgs[i].style.width===''){
          
          countBig++
        }else{
          countBig--
        }
        
      };
      console.log(countBig);
      if(countBig===imgs.length){
        document.getElementById('nav').style.visibility='visible';
      }
      
    }

  };
  const handleHoverImage = () => (event) => {
    // console.log('handleHoverImage');
    
    if(event.target.style.width === '600px' || event.target.style.width === ''){
      
      event.target.style.cursor = 'zoom-in';
    }else{
      
      event.target.style.cursor = 'zoom-out';
    }
  };
  return (
    <div id="Gallery">
      <div id="nav">
        <DashNav />   
      </div> 
    
      <div id="Board2">
        <div id="cards">

          {images.map(image => (
           
    
            <div id="card">
              <div id="delete-icon">
                <Icon name="delete" onClick={handleDeleteImage(image.id, image.name)} />
              </div>
              <div id="img">
                <img  onClick={handleZoomImage(image.src)}  onMouseMove={handleHoverImage()} src={basePath + image.src } alt={image.name} />
              </div>
            </div>

          ))}
 
        </div>
 {/* div de fermedure de Board2*/}  
      </div>

{/* div de fermedure de Gallery */}
    </div>  
  );
};
Gallery.propTypes = {
  switchCursor: PropTypes.func.isRequired,
  deleteImages: PropTypes.func.isRequired,
  basePath: PropTypes.string.isRequired,
  zoomStatus: PropTypes.bool.isRequired,
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
