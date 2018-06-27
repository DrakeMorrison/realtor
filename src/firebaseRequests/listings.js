import axios from 'axios';
import constants from '../constants';

function getRequest () {
  return new Promise(function (resolve, reject) {
    axios
      .get(`${constants.firebaseConfig.databaseURL}/listings.json`)
      .then(function (results) {
        const listings = [];
        if (results.data !== null) {
          Object.keys(results.data).forEach(function (key) {
            results.data[key].id = key;
            listings.push(results.data[key]);
          });
        }
        resolve(listings);
      })
      .catch(function (err) {
        reject(err);
      });
  });
}

export default {
  getRequest,
};
