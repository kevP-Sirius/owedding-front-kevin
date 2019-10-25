// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import ActionButton from 'src/components/TablePlan/ActionButton';

// Action Creators
import { addList } from 'src/store/reducers/listReducer';

/* === State (données) ===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */
const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  addList: () => {
    dispatch(addList());
  },

});


// Container
const AuthContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ActionButton);

// == Export
export default AuthContainer;

/* = export à la volée
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ActionButton);
*/
