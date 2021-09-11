import selectCategory from './selectCategory';

const addVocabForm = (userId, obj = {}) => {
  document.querySelector('#home').innerHTML = '';
  document.querySelector('#sort-dropdown').innerHTML = '';
  document.querySelector('#filter-buttons').innerHTML = '';
  document.querySelector('#form-container').innerHTML = `
  <form id="${obj.firebaseKey ? `update-vocab--${obj.firebaseKey}` : 'submit-vocab'}" class="mb-4">
  <div class="form-group">
    <label for="title">Vocabulary Term:</label>
    <input type="text" class="form-control" id="title" aria-describedby="vocabTitle" placeholder="Enter Vocabulary Term" value="${obj.title || ''}" required>
  </div>
  <div class="form-group">
    <label for="definition">Vocabulary Term:</label>
    <input type="text" class="form-control" id="definition" aria-describedby="vocabDefinition" placeholder="Enter Vocabulary Definition" value="${obj.definition || ''}" required>
  </div>
  <div class="form-group" id="select-category"></div>
  <button type="submit" class="btn btn-success">Submit Vocabulary Entry</button>
  </form>
  `;
  selectCategory(userId, `${obj.category || ''}`);
};

export default addVocabForm;
