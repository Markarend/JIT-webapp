import React from 'react';
import IpList from './IpAddr';
import GetUser from './Users';

function App() {

  var ip = IpList();
  var user = GetUser();
  return <div>1048 You are { user.userDetails } at {ip}</div>;
}

export default App;
