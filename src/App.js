import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePages from './home/HomePages';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import SinglePage from './components/watch/SinglePage';

function App() {
  return (
    <div className='app'>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePages/>}/>
        <Route path='/SinglePage/:id' element={<SinglePage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
