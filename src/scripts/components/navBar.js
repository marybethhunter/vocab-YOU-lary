const navBar = () => {
  document.querySelector('#navigation').innerHTML = `
  <nav class="navbar fixed-top navbar-dark bg-dark">
    <div class="container-fluid">
      <a id="goHome" class="navbar-brand" href="#">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8GYe0WjPzRGflZBqQWH6UL_VmVosVyVYcpg&usqp=CAU" alt="code icon" width="30" height="24" class="d-inline-block align-text-top">
          vocab-YOU-lary
        </a>
        <button id="create-vocab-btn" class="create-btn btn btn-success">Create Entry</button>
        <input
              class="form-control mr-sm-2 search"
              id="search"
              placeholder="Search Cards"
              aria-label="Search"
            />
        <div id="logout-button"></div>
    </div>
  </nav>
  `;
};

export default navBar;
