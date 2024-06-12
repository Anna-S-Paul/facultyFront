import logo from './logo.svg';
import './App.css';
import AddFaculty from './components/AddFaculty';
import SearchFaculty from './components/SearchFaculty';
import ViewFaculty from './components/ViewFaculty';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/add' element={<AddFaculty/>}/>
      <Route path='/search' element={<SearchFaculty/>}/>
      <Route path='/viewall' element={<ViewFaculty/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
