import signOut from '../../helpers/auth/signOut';

const navigationEvents = () => {
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);
};

export default navigationEvents;
