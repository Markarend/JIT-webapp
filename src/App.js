import React from 'react';
import IpList from './IpAddr';
import GetUser from './Users';
import GetSettings from './settings';

function App() {

  var ip = IpList();
  var user = GetUser();
  var settings = GetSettings();

  msg = <div>1048 You are { user.userDetails } at {ip}</div>;
  msg += <div>Settings: { JSON.stringify(settings) }</div>;

  return ( msg );
}

export default App;
