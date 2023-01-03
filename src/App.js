import React, { useState } from 'react';
import axios from 'axios';
import Button from './A-test/button';
import Resources from './A-test/resource';
import './A-test/a-section.scss';

const App =()=>{
  const [resources, setResouces] = useState([]);
  try {
  }catch(err) {
    console.log(err);
  };

  const getFacts = async ()=> {
    const facts = await axios.get('https://catfact.ninja/fact');
    setResouces(facts.data);
  }
  return (
    <div className=''>
    <Button className="a-button" onClick={getFacts} text='更新' />
    <Resources resources = {resources} />
    </div>
  )
}

export default App;