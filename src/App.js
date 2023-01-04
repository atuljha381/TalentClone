
import './App.css';
import Navbar from './Components/Navbar';
import India from './Components/India';
function App() {
  return (
    <>
      <Navbar first="India" second="Global" name="Atul" />
      <div className='container'>

        <India></India>
      </div>
    </>
  );
}

export default App;
