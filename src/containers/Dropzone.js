// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Dropzone from 'src/components/Dropzone';

// Action Creators
import { upload } from 'src/store/reducers/galleryReducer';

/* === State (données) ===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */
const mapStateToProps = (state, ownProps) => ({
  username:state.userReducer.username,
  token:state.userReducer.token,
});

/* === Actions ===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = (dispatch) => ({
    uploadFile: (fd) => {
        dispatch( upload(fd));
    },
});

// Container
const DropzoneContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dropzone);

// == Export
export default DropzoneContainer;

/* = export à la volée
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Example);
*/
