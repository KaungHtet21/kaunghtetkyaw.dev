import { Route, Routes } from 'react-router-dom';
import './App.css';
import Aboutme from './components/AboutMe/Aboutme';
import ArticleView from './components/ArticlesView/ArticleView';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/aboutme' element={<Aboutme/>}/>
        <Route path='/articles/:title' element={<ArticleView/>}/>
      </Routes>
    </div>
  );
}

export default App;
