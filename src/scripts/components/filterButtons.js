const filterButtons = () => {
  document.querySelector('#filter-buttons').innerHTML = `
  <button id="techFilter" class="btn btn-success">Filter by Tech</button>
  <button id="langFilter" class="btn btn-success">Filter by Languages</button>
  `;
};

export default filterButtons;
