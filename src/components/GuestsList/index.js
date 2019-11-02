import React ,{ useEffect }from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Icon } from 'semantic-ui-react';

import './guestslist.scss';
import DashNav from 'src/containers/DashNav';
import  { saveUser ,showGuests} from 'src/store/reducers/userReducer';
import  { loadImages } from 'src/store/reducers/galleryReducer';
import {
  load, finishLoad, closeLoginForm, errorLoginPseudo, errorLoginPassword,
  PASSWORD_RESET, passwordResetDone, passwordResetError,
} from 'src/store/reducers/appReducer';
import store from "../../store";

const GuestsList = ({ 
  guestFirstName, guestLastName, changeValue, guestType,
  dataGuests, deleteGuest, guestTypeError, submitGuestListVerif,
  guestEmail, sendNewsletter, newsletterSent,
}) => {
  const handleChange = (event) => {
    const { value, name } = event.target;
    changeValue(value, name);
  };
  const handleChangeRadio = (e, data) => {
    const { value, name } = data;
    changeValue(value, name);
  };
  const handleChangeGuest = (id) => () => {
    deleteGuest(id);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    submitGuestListVerif(guestType);
  };
  const newsletter = () => {
    sendNewsletter();
  }
  useEffect(()=>{
    store.dispatch(loadImages());
    console.log('coucou je suis le hook de guest');
    let page = 'guests';
    localStorage.setItem('page',page);
    console.log(localStorage.getItem('page'));

  })
  

  return (
    <div id="guestslist">
      <div className="nav">
        <DashNav />   
      </div>      
      <div className="guestsBoard">
      <div>Veuillez rentrer la liste des personnes présentes lors de votre mariage : </div>
        <Form onSubmit={handleSubmit}>
          <div className="inputs">
            <div className="mariedFirst">        
              <Form.Field>
                <label>Nom</label>
                <input
                  placeholder="Nom"
                  value={guestLastName}
                  name="guestLastName"
                  onChange={handleChange}
                />
              </Form.Field>
            </div>
            <div className="mariedSecond">        
              <Form.Field>
                <label>Prénom</label>
                <input
                  placeholder="Prénom"
                  value={guestFirstName}
                  name="guestFirstName"
                  onChange={handleChange}
                />
              </Form.Field>
            </div>
            <div className="radios">
              <Form.Group inline>
                <Form.Radio
                  label='Marié(e)s'
                  value="maried"
                  name="guestType"
                  checked={guestType === 'maried'}
                  onChange={handleChangeRadio}
                />
                <Form.Radio
                  label='Témoins'
                  value="witness"
                  name="guestType"
                  checked={guestType === 'witness'}
                  onChange={handleChangeRadio}
                />
                <Form.Radio
                  label='Invités'
                  value="guest"
                  name="guestType"
                  checked={guestType === 'guest'}
                  onChange={handleChangeRadio}
                />
              </Form.Group>
            </div>
          </div>
          <div className="emailInput">
          <Form.Group>
          <Form.Field>
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  value={guestEmail}
                  name="guestEmail"
                  onChange={handleChange}
                />
              </Form.Field >
              <div className="newsButtonMessage">
                <div className="newsletter" onClick={newsletter}>Newsletter</div>
                {newsletterSent && <div className="newsletterSent">Newsletter à été bien envoyé</div>}
              </div>
              </Form.Group>
          </div>
          <div className={guestTypeError ? 'guestTypeErrorTrue' : 'guestTypeErrorFalse'}>
            Veuillez saisir le type d'invité s'il vous plait
          </div>
          <Button type="submit">Valider</Button>
        </Form>
      <ol className='list'>
        {dataGuests.map(guest  => (
          <div className="guests">
            <li></li>
            <div className="guestName">
              {guest.firstname} {guest.lastname} - {guest.type=='witness' && 'témoin'}
              {guest.type=='maried' && 'marié(e)'}
              {guest.type=='guest' && 'invité'}
            </div>
            <div className="deleteGuest">
            <Icon name="delete" onClick={handleChangeGuest(guest.id)} />
            </div>
          </div>
        ))}           
      </ol>
      </div>
    </div>
  );
};

GuestsList.propTypes = {
  guestLastName: PropTypes.string.isRequired,
  guestFirstName: PropTypes.string.isRequired,
  guestType: PropTypes.string.isRequired,
  guestEmail: PropTypes.string.isRequired,
  changeValue: PropTypes.func.isRequired,
  guestTypeError: PropTypes.bool.isRequired,
  newsletterSent: PropTypes.bool.isRequired,
  sendNewsletter: PropTypes.func.isRequired,
  deleteGuest: PropTypes.func.isRequired,
  submitGuestListVerif: PropTypes.func.isRequired,
  dataGuests: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      firstname: PropTypes.string.isRequired,
      lastname: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    }),
  ).isRequired,
};


export default GuestsList;
