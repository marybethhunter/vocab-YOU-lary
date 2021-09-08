import axios from 'axios';
import firebaseConfig from '../../../api/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// GET CARDS
const getAllVocabTerms = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

export default getAllVocabTerms;
