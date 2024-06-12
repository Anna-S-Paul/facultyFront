import logo from './logo.svg';
import './App.css';
import AddFaculty from './components/AddFaculty';
import SearchFaculty from './components/SearchFaculty';
import ViewFaculty from './components/ViewFaculty';

function App() {
  return (
    <div>
      <AddFaculty/>
      <SearchFaculty/>
      <ViewFaculty/>
    </div>
  );
}

export default App;
