import Header from './components/Header';
import About from './components/About';
import ImcCal from './components/ImcCalc';
import './global.css';


function App() {

  return (
    <>
      <Header />
      <div className="body-grid">
        <About  />
        <ImcCal />
      </div>
    </>
  )
}

export default App;
