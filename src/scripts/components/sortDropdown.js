const sortDropdown = () => {
  document.querySelector('#sort-dropdown').innerHTML = `
  <select id="sort-dropdown" class="form-select sorting" aria-label="sort-dropdown">
      <option id="alphabetically" value="alphabetically">Sort Alphabetically</option>
      <option id="newest" value="newest">Sort Newest</option>
      <option id="oldest" value="oldest">Sort Oldest</option>
  </select>
  `;
};

export default sortDropdown;
