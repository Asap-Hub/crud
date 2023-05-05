import './App.css'; 
import GetAll from './components/crud/GetAll';
import Create from './components/crud/Create'
import { useState } from 'react';

function App() {
  const [refresh,setRefresh]=useState(false);
  return (
    <div className="App">
      <header className="App-header">
      <div> <GetAll refresh={refresh}></GetAll></div>
     <div> <Create setRefresh={()=> setRefresh(!refresh)}></Create></div>
    
   
      </header>
    </div>
  );
}

export default App;
