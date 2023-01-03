import React, { useState } from 'react';
import jsonplaceholder from './A-test/jsonplaceholder.js';
import Button from './A-test/button';
import Resouces from './A-test/resouce';
import './A-test/a-section.scss';

const App =()=>{
  const [resouces, setResouces] = useState([]);

  const getfacts = async ()=> {
    const facts =await jsonplaceholder.get('https://catfact.ninja/fact');
    setResouces(facts.data);
  }
  return (
    <div className=''>
    <Button className="a-button" onClick={getfacts} text='更新' />
    <Resouces resouces = {resouces} />
    </div>
  )
}

export default App;