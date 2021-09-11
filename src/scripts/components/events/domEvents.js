import {
  createVocabTerm,
  deleteVocabTerms,
  updateVocabTerm,
  getSingleCard,
  filterByTech,
  filterByLang,
  sortBy,
  getAllVocabTerms
} from '../../helpers/data/vocabCardsData';
import filterButtons from '../filterButtons';
import addVocabForm from '../forms/addVocabForm';
import showVocabCards from '../showVocabCards';

const domClickEvents = (uid) => {
  document.querySelector('#app')
    .addEventListener('click', (e) => {
      if (e.target.id.includes('delete-vocab')) {
        // eslint-disable-next-line no-alert
        if (window.confirm('Want to delete?')) {
          const [, id] = e.target.id.split('--');
          deleteVocabTerms(id, uid).then(showVocabCards);
        }
      }

      if (e.target.id.includes('edit-vocab')) {
        const [, id] = e.target.id.split('--');
        getSingleCard(id).then((vocabObj) => addVocabForm(vocabObj));
      }

      if (e.target.id.includes('techFilter')) {
        filterByTech(uid).then(showVocabCards);
      }

      if (e.target.id.includes('langFilter')) {
        filterByLang(uid).then(showVocabCards);
      }
    });

  document.querySelector('#main-container')
    .addEventListener('change', (e) => {
      if (e.target.id.includes('sort-dropdown')) {
        getAllVocabTerms(uid).then((array) => sortBy(array)).then((array) => showVocabCards(array, uid));
      }
    });
};

const domSubmitEvents = (uid) => {
  document.querySelector('#form-container')
    .addEventListener('submit', (e) => {
      if (e.target.id.includes('submit-vocab')) {
        e.preventDefault();
        const newVocab = {
          title: document.querySelector('#title').value,
          definition: document.querySelector('#definition').value,
          category: document.querySelector('#category').value,
          timestamp: new Date(),
          uid
        };
        createVocabTerm(newVocab).then(showVocabCards);
        filterButtons();
      }

      if (e.target.id.includes('update-vocab')) {
        e.preventDefault();
        const [, id] = e.target.id.split('--');
        const vocabObject = {
          title: document.querySelector('#title').value,
          definition: document.querySelector('#definition').value,
          category: document.querySelector('#category').value,
          timestamp: new Date(),
          firebaseKey: id,
          uid
        };
        updateVocabTerm(vocabObject).then(showVocabCards);
        filterButtons();
      }
    });
};

export { domClickEvents, domSubmitEvents };
