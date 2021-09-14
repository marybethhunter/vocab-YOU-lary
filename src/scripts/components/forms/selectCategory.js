import { getAllVocabTerms } from '../../helpers/data/vocabCardsData';

const selectCategory = (userId) => {
  let domString = `<label for="category">Select a Category</label>
    <select class="form-control" id="category" required>
    <option value="">Select a Category</option>`;

  getAllVocabTerms(userId).then((vocabArray) => {
    vocabArray.forEach((vocab) => {
      domString += `<option value="${vocab.category}" ${vocab.category ? 'selected' : ''}>${vocab.category}</option>`;
    });

    domString += '</select>';

    document.querySelector('#select-category').innerHTML = domString;
  });
};

export default selectCategory;
