import './App.css';
import React, { useState } from 'react'

function App() {
  const [returnedData, setReturnedData] = useState('hi')
  const [project, setProject] = useState({
    ProjectId: 0, 
    ProjectName: '', 
    ProjectDescription: '', 
    ProjectStart: '', 
    ProjectComplete: '', 
    ProjectLessons: ''
  })

  const setInput = (e) => {
    const {name, value} = e.target;
    console.log(value);
    if (name === 'ProjectID') {
      setProject(prevState => ({
        ...prevState,
        [name]: parseInt(value)
      }));
      return;
    }
    setProject(prevState => ({
      ...prevState,
      [name]: value
    }));
  }



  const fetchData = async () => {
    console.log(project);
    const newData = await fetch('/api', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: project.ProjectName
      })
    })
    .then(res => res.json());
    console.log(newData);
    setReturnedData(newData[0])
  }

  const createProject = async () => {
    const newData = await fetch('/hello', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        ...project
      })
    })
    .then(res => res.json());
    console.log(newData);
    setReturnedData(newData[0])
  }

  return (
    <div className="App">
      <input 
        type='number' 
        name='ProjectID' 
        placeholder='ProjectID' 
        onChange={setInput}></input>
      <input 
        name='ProjectName' 
        placeholder='Project Name' 
        onChange={setInput}></input>
      <input 
        name='ProjectDescription' 
        placeholder='Project Description' 
        onChange={setInput}></input>
      <input 
        name='ProjectStart' 
        placeholder='Project Start' 
        onChange={setInput}></input>
      <input 
        name='ProjectComplete' 
        placeholder='Project Complete' 
        onChange={setInput}></input>
      <input 
        name='ProjectLessons' 
        placeholder='Project Lessons' 
        onChange={setInput}></input>
      <button onClick={() => fetchData()}>Click</button>
      <button onClick={() => createProject()}>Create</button>
      <p>ProjectID: {returnedData.ProjectID}</p>
      <p>ProjectName: {returnedData.ProjectName}</p>
      <p>ProjectDescription: {returnedData.ProjectDescription}</p>
      <p>ProjectStart: {returnedData.ProjectStart}</p>
      <p>ProjectComplete: {returnedData.ProjectComplete}</p>
      <p>ProjectLessons: {returnedData.ProjectLessons}</p>
    </div>
  );
}

export default App;
