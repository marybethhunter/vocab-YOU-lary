import { createVocabTerm, deleteVocabTerms } from '../../helpers/data/vocabCardsData';
import showVocabCards from '../showVocabCards';

const domEvents = () => {
  document.querySelector('#app')
    .addEventListener('click', (e) => {
      if (e.target.id.includes('submit-vocab')) {
        const newVocabCard = {
          title: document.querySelector('#title').value,
          definition: document.querySelector('#definition').value,
          category: document.querySelector('#category').value,
          timestamp: new Date(),
        };
        createVocabTerm(newVocabCard).then((allVocab) => showVocabCards(allVocab));
      }

      if (e.target.id.includes('delete-vocab')) {
        // eslint-disable-next-line no-alert
        if (window.confirm('Want to delete?')) {
          const [, id] = e.target.id.split('--');
          deleteVocabTerms(id).then(showVocabCards);
        }
      }
    });
};

export default domEvents;
