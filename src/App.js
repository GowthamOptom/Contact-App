import './App.css';
import { Route, Routes } from 'react-router-dom';

// viwes
import ContactApp from './views/Contactapp';
import DetailContact from './views/DetailContact';
import CategoryContact from './views/CategoryContact';
import NotFound from "./views/NotFound"

//Components
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ContactApp/>}/>
        <Route path='/detail/:id' element={<DetailContact/>}/>
        <Route path='/category/:category' element={<CategoryContact/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
   
  );
}

export default App;
