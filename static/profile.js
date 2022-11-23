function submitProfile(evt) {
  evt.preventDefault();

  const data = {
    name: document.querySelector('#name-field').value,
    age: document.querySelector('#age-field').value,
    occupation: document.querySelector('#occupation-field').value,
  };
  
    // fill in the rest
  fetch('/api/profile' , {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((responseJson) => {
      document.querySelector('#profiles').insertAdjacentHTML('beforeend', JSON.stringify(responseJson));
    });
};
// <li>${responseJson.fullname} the ${responseJson.occupation} is ${responseJson.age}</li>

  // make request to server to get the data
  // add the data the server returns to the document
  // (you can add it to the end of the div with ID "profiles")


document.querySelector('#profile-form').addEventListener('submit', submitProfile);
