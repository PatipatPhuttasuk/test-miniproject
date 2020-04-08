import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Fuck from './test/Fuck'
const App = () => {

  const [covid, setCovid] = useState({})

  useEffect(function () {
    getCovid();
  }, [])
  console.log(covid)

  const getCovid = async () => {
    const result = await axios.get('https://covid19.th-stat.com/api/open/today')
    setCovid(result.data)
  }
  return (
    <div>
      <div>Confirmed : {covid.Confirmed}</div>
      <div>{covid.Recovered}</div>
      <div>{Date()}</div>
    </div>
  );
}
export default App;