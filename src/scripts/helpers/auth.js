import firebase from 'firebase/app';
import 'firebase/auth';
import loginButton from '../components/loginButton';
// import logoutButton from '../components/logoutButton';
import firebaseConfig from '../../api/apiKeys';
import startApp from '../components/startApp';

const checkLoginStatus = () => {
  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      startApp(user);
    } else {
      document.querySelector('#app').innerHTML = `
      <h2>Welcome to Vocab-YOU-lary!</h2>
      `;
      loginButton();
    }
  });
};

export default checkLoginStatus;
