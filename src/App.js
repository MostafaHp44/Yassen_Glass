import './App.css';
import Footer from './Components/Footer/Footer';
import BigLine from './Components/NavBar/BigLine/BigLine';
import NavBar from './Components/NavBar/NavBar';
import UI from './Components/UI/UI';
function App() {
  return (
    <div className="App">
      <BigLine/>
      <NavBar/>
      <UI/>
      <Footer/>
    </div>
  );
}

export default App;
