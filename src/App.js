// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import FirstPage from './pages/firstPage/FirstPage';
import BirthdayPage from './pages/birthdayPage/BirthdayPage';
// import FirstPage from './pages/firstPage/FirstPage';

function App() {
  return (

    <Router>
      <Routes>
        <Route path='/' element={<FirstPage/>}/>
        <Route path='/mybirthday' element={<BirthdayPage/>
        }/>
      </Routes>
    </Router>
    // <FirstPage/>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
