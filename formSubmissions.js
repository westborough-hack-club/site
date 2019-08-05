const scriptURL = '<https://script.google.com/macros/s/AKfycbxw1ak7kYrjbrbcZVg_qJ-6yx9akqalplCwWn4bDh23Qa4sKyA/exec>';
  const form = document.forms['submit-to-google-sheet'];

  form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message));
  });