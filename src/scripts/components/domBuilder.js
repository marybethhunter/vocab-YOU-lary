const domBuilder = () => {
  document.querySelector('#login-form-container').innerHTML = '';
  document.querySelector('#app').innerHTML = `
  <div id="navigation"></div>
  <div id="main-container">
    <div id="filter-buttons"></div>
    <div id="home"></div>
    <div id="form-container"></div>
  </div>
  `;
};

export default domBuilder;
