const sortDropdown = () => {
  document.querySelector('#sort-dropdown').innerHTML = `
  <select id="sortDropdown" class="form-select sorting" aria-label="sort-dropdown">
      <option value="">Sort</option>
      <option id="alphabetically" value="alphabetically">Alphabetically</option>
      <option id="newest" value="newest">Newest</option>
      <option id="oldest" value="oldest">Oldest</option>
  </select>
  `;
};

export default sortDropdown;
