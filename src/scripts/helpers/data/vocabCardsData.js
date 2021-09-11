import axios from 'axios';
import firebaseConfig from '../../../api/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// GET CARDS
const getAllVocabTerms = (userId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/.json?orderBy="uid"&equalTo="${userId}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

// CREATE CARDS
const createVocabTerm = (newVocab) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/.json`, newVocab)
    .then((response) => {
      const firebaseKey = response.data.name;
      axios.patch(`${dbUrl}/${firebaseKey}.json`, { firebaseKey })
        .then(() => getAllVocabTerms(newVocab.uid).then((allVocab) => resolve(allVocab)));
    }).catch(reject);
});

// UPDATE CARDS
const updateVocabTerm = (vocabObject) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/${vocabObject.firebaseKey}.json`, vocabObject)
    .then(() => getAllVocabTerms(vocabObject.uid).then(resolve))
    .catch(reject);
});

// DELETE CARDS
const deleteVocabTerms = (firebaseKey, userId) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/${firebaseKey}.json`)
    .then(() => {
      getAllVocabTerms(userId).then(resolve);
    }).catch(reject);
});

// GET SINGLE CARD
const getSingleCard = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

// FILTER BY CATEGORY: LANGUAGE
const filterByLang = (userId) => new Promise((resolve, reject) => {
  getAllVocabTerms(userId)
    .then((userCardsArray) => {
      const langCategory = userCardsArray.filter((card) => card.category === 'Language');
      resolve(langCategory);
    }).catch(reject);
});

// FILTER BY CATEGORY: TECH
const filterByTech = (userId) => new Promise((resolve, reject) => {
  getAllVocabTerms(userId)
    .then((userCardsArray) => {
      const techCategory = userCardsArray.filter((card) => card.category === 'Tech');
      resolve(techCategory);
    }).catch(reject);
});

// SORT FUNCTION
const sortBy = (array) => {
  const sortType = document.querySelector('#sort-dropdown');
  let sortedCards = 'null';
  if (sortType === 'alphabetically') {
    sortedCards = array.sort((a, b) => a.title > b.title);
  }
  if (sortType === 'newest') {
    sortedCards = array.sort((a, b) => b.timestamp.localeCompare(a.timestamp));
  }
  if (sortType === 'oldest') {
    sortedCards = array.sort((a, b) => a.timestamp.localeCompare(b.timestamp));
  }
  return sortedCards;
};

// SEARCH CARDS
const searchCards = (searchValue) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/.json?orderBy="title"&equalTo="${searchValue}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

export {
  getAllVocabTerms,
  createVocabTerm,
  deleteVocabTerms,
  updateVocabTerm,
  getSingleCard,
  filterByLang,
  filterByTech,
  searchCards,
  sortBy
};
