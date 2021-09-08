import axios from 'axios';
import firebaseConfig from '../../../api/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// GET CARDS
const getAllVocabTerms = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

// CREATE CARDS
const createVocabTerm = (newVocab) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/.json`, newVocab)
    .then((response) => {
      const firebaseKey = response.data.name;
      axios.patch(`${dbUrl}/${firebaseKey}.json`, { firebaseKey })
        .then(() => getAllVocabTerms(newVocab).then((allVocab) => resolve(allVocab)));
    }).catch(reject);
});

// UPDATE CARDS
// const updateVocabTerms = () => new Promise((resolve, reject) => {
//   axios.
// });

// DELETE CARDS
const deleteVocabTerms = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/${firebaseKey}.json`)
    .then(() => {
      createVocabTerm().then(resolve);
    }).catch(reject);
});

export { getAllVocabTerms, createVocabTerm, deleteVocabTerms };
