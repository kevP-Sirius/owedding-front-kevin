// == Import : npm
import React ,{ useEffect }from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';

// == Import : local
import './page.scss';
import SignUp from 'src/containers/SignUp';
import HomePage from 'src/containers/HomePage';
import Error404 from 'src/components/Error404';
import Dashboard from 'src/containers/Dashboard';
import GuestsList from 'src/containers/GuestsList';
import TablePlan from 'src/containers/TablePlan';
import Providers from 'src/containers/Providers';
import ShowProviders from 'src/containers/ShowProviders';
import Contact from 'src/components/Contact';
import AboutUs from 'src/components/AboutUs';
import LegalsMentions from 'src/components/LegalsMentions';
import CookieManagement from 'src/components/CookieManagement';
import PrivacyPolicy from 'src/components/PrivacyPolicy';
import SiteMap from 'src/components/SiteMap';
import UpdatePassword from 'src/containers/UpdatePassword';
import Chat from 'src/containers/Chat';
import Gallery from 'src/containers/Gallery';
import Dropzone from 'src/containers/Dropzone';
import DrawIt from 'src/components/DrawIt';
import  { saveUser ,showGuests} from 'src/store/reducers/userReducer';
import {
  load, finishLoad, closeLoginForm, errorLoginPseudo, errorLoginPassword,
  PASSWORD_RESET, passwordResetDone, passwordResetError,
} from 'src/store/reducers/appReducer';
import store from "../../store";

// == Composant
const Page = ({ logged }) => {
  useEffect(()=>{

    console.log(localStorage.getItem('page'))
    console.log(store.getState().userReducer.logged);
    console.log('coucou je suis le hook du composant page');
    console.log(localStorage.getItem('token')+'je suis le localstorage');
    if(localStorage.getItem('token')!== null){
      
      console.log('coucou je suis le mountEffect');
      let status = ''
      if(localStorage.getItem( 'project_status')=='true'){
        status = true ;
      }else{
        status=false
      }
      const user = {

        username: localStorage.getItem('username'),
        token: localStorage.getItem('token'),
        
        project_status:  status,
        
      };
      
      const actionSaveUser = saveUser(user);
      store.dispatch(actionSaveUser);
      store.dispatch(showGuests()); // Cette fonction (showGuest) va lancer une requête au back pour montrer la liste d'invités.
    
    }
  })
 return( <div id="page">
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/contact" component={Contact} />
      <Route path="/signup" component={SignUp} />
     
      {logged && (
        <Route path="/dashboard/" exact component={Dashboard} />
      )}
      {!logged && (
        <Redirect from="/dashboard" to="/" />
      )}
      <Route path="/dashboard/pictionnary" component={DrawIt} />
      <Route path="/dashboard/chat" component={Chat} />
      <Route path="/dashboard/upload" component={Dropzone} />
      <Route path="/dashboard/gallery" component={Gallery} />
      <Route path="/site-map" component={SiteMap} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/cookie-management" component={CookieManagement} />
      <Route path="/legalsMentions" component={LegalsMentions} />
      <Route path="/AboutUs" component={AboutUs} />
      <Route path="/dashboard/guests" component={GuestsList} />
      <Route path="/dashboard/tables" component={TablePlan} />
      <Route path="/dashboard/account" component={UpdatePassword} />
      <Route path="/dashboard/providers" component={Providers} />
      <Route path="/dashboard/wedding-room" component={ShowProviders} />
      <Route component={Error404} />
    </Switch>
  </div>
 );
};

Page.propTypes = {
  logged: PropTypes.bool.isRequired,
};

// == Export
export default Page;
