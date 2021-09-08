import signOut from '../../helpers/auth/signOut';
import addVocabForm from '../forms/addVocabForm';
import { getAllVocabTerms } from '../../helpers/data/vocabCardsData';
import showVocabCards from '../showVocabCards';

const navigationEvents = () => {
  document.querySelector('#logout-button').addEventListener('click', () => {
    signOut();
  });

  document.querySelector('#create-vocab-btn').addEventListener('click', () => {
    addVocabForm();
  });

  document.querySelector('#goHome').addEventListener('click', () => {
    document.querySelector('#form-container').innerHTML = '';
    getAllVocabTerms().then((words) => showVocabCards(words));
  });
};

export default navigationEvents;
