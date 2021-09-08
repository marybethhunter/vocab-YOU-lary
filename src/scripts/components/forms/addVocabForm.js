const addVocabForm = (obj = {}) => {
  document.querySelector('#home').innerHTML = '';
  document.querySelector('#filter-buttons').innerHTML = '';
  document.querySelector('#form-container').innerHTML = `
  <form id="submit-vocab-form" class="mb-4">
  <div class="form-group">
    <label for="title">Vocabulary Term:</label>
    <input type="text" class="form-control" id="title" aria-describedby="vocabTitle" placeholder="Enter Vocabulary Term" required>
  </div>
  <div class="form-group">
    <label for="definition">Vocabulary Term:</label>
    <input type="text" class="form-control" id="definition" aria-describedby="vocabDefinition" placeholder="Enter Vocabulary Definition" required>
  </div>
  <div class="form-group">
    <label for="category">Vocabulary Category (Language/Tech):</label>
    <input type="text" class="form-control" id="category" aria-describedby="vocabCategory" placeholder="Enter Vocabulary Category" required>
  </div>
  <button type="submit" id="${obj.firebaseKey ? `update-vocab--${obj.firebaseKey}` : 'submit-vocab'}" class="btn btn-success">Submit Vocabulary Entry</button>
  </form>
  `;
};

export default addVocabForm;
