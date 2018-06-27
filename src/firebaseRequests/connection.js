import firebase from 'firebase';
import constants from '../constants';

function firebaseApp () {
  return firebase.initializeApp(constants.firebaseConfig);
}

export default firebaseApp;
