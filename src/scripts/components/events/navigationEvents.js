import signOut from '../../helpers/auth/signOut';
import addVocabForm from '../forms/addVocabForm';
import { getAllVocabTerms, searchCards } from '../../helpers/data/vocabCardsData';
import showVocabCards from '../showVocabCards';
import filterButtons from '../filterButtons';
import sortDropdown from '../sortDropdown';

const navigationEvents = (uid) => {
  document.querySelector('#logout-button').addEventListener('click', () => {
    signOut();
  });

  document.querySelector('#create-vocab-btn').addEventListener('click', () => {
    addVocabForm(uid);
  });

  document.querySelector('#search').addEventListener('keyup', (e) => {
    const searchValue = document.querySelector('#search').value;
    if (e.keyCode === 13) {
      searchCards(searchValue).then(showVocabCards);
      document.querySelector('#search').value = '';
    }
  });

  document.querySelector('#goHome').addEventListener('click', () => {
    document.querySelector('#form-container').innerHTML = '';
    getAllVocabTerms(uid).then((words) => showVocabCards(words));
    filterButtons();
    sortDropdown();
  });
};

export default navigationEvents;
