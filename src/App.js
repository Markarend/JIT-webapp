import React from 'react';

async function App() {

  var ipAddr = '';
  await fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
      ipAddr = data.ip;
    })
    .catch(error => ipAddr = 'Error fetching IP: ' + error);

  return <div>0154 Your IP address is {ipAddr}</div>;
}

export default App;
