const filterButtons = () => {
  document.querySelector('#filter-buttons').innerHTML = `
  <button id="filter1" class="btn btn-success">Filter by ___</button>
  <button id="filter2" class="btn btn-success">Filter by ___</button>
  <button id="filter3" class="btn btn-success">Filter by ___</button>
  `;
};

export default filterButtons;
