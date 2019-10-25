// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import ProjectName from 'src/components/ProjectName';

// Action Creators
import { changeValue, createProject } from 'src/store/reducers/userReducer';

/* === State (données) ===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */
const mapStateToProps = (state, ownProps) => ({
  name: state.userReducer.name,
  date: state.userReducer.date,
  department: state.userReducer.department,
  forecast_budget: state.userReducer.forecast_budget,

});

/* === Actions ===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = (dispatch, ownProps) => ({
  changeInput: (value, name) => {
    dispatch(changeValue(value, name));
  },
  createProject: () => {
    dispatch(createProject());
  },
  
});

// Container
const ExampleContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProjectName);

// == Export
export default ExampleContainer;

/* = export à la volée
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProjectName);
*/
