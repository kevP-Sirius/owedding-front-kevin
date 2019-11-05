// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Gallery from 'src/components/Gallery';

// Action Creators
import { getImages, loadImages, deleteImages, switchCursor  } from 'src/store/reducers/galleryReducer';

/* === State (données) ===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */
const mapStateToProps = (state, ownProps) => ({
  basePath: state.galleryReducer.basePath,
  images: state.galleryReducer.projectImages,
  imagesStatus: state.galleryReducer.imagesLoaded,
  zoomStatus: state.galleryReducer.curserZoom,

});

/* === Actions ===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = (dispatch, ownProps) => ({

  loadImages: () => {
    dispatch(loadImages());
  },
  deleteImages: (project) => {
    dispatch(deleteImages(project));
  },
  switchCursor: () => {
    dispatch(switchCursor());
  },
});

// Container
const GalleryContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Gallery);

// == Export
export default GalleryContainer;

/* = export à la volée
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Example);
*/
