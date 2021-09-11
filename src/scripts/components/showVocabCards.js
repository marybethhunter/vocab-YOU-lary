const showVocabCards = (array) => {
  document.querySelector('#home').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';
  array.forEach((word) => {
    document.querySelector('#home').innerHTML += `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${word.title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Category: ${word.category}</h6>
          <p class="card-text">${word.definition}</p>
          <p class="card-text">Timestamp: ${word.timestamp}</p>
          <div class="icon-btns">
          <i id="edit-vocab-btn--${word.firebaseKey}" class="fas fa-edit btn btn-info"></i>
          <i id="delete-vocab--${word.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i></div>
      </div>
    </div>
  `;
  });
};

export default showVocabCards;
