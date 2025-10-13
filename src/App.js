import React from 'react';

function App() {

  var ipAddr = '';
  fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
      ipAddr = data.ip;
    })
    .catch(error => ipAddr = 'Error fetching IP: ' + error);

  return <div>0148 Your IP address is {ipAddr}</div>;
}

export default App;
