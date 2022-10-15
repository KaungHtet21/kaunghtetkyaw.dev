import { Route, Routes } from 'react-router-dom';
import './App.css';
import Aboutme from './components/AboutMe/Aboutme';
import ArticleView from './components/ArticlesView/ArticleView';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='aboutme' element={<Aboutme/>}/>
        <Route path='articles/:title' element={<ArticleView/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
