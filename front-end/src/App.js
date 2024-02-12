// import React from 'react';
import {BrowserRouter as Router, Route, Routes, useParams} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navigation from './components/Navigation';
import NoteList from './components/NoteList';
import CreateNote from './components/CreateNote';
import CreateUser from './components/createUser';

function App() {
  const RutaAux = () => <CreateNote params={useParams()} />;

  return (
    <Router>
      <Navigation/> 

      <div className="container p-4">
        <Routes>
          <Route path='/' exact Component={NoteList} />
          <Route path='/edit/:id' element={<RutaAux />}  />
          <Route path='/create' Component={CreateNote} />
          <Route path='/user' Component={CreateUser} />
        </Routes>
      </div>
      
    </Router>
  );
}

export default App;
