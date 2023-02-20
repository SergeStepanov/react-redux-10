import { Route, Routes } from 'react-router-dom';
import './App.css';
import ServiceAdd from './components/ServiceAdd';
import ServiceList from './components/ServiceList';
import ServiceEdit from './components/ServiceEdit';
import Page404 from './components/Page404';

function App() {
  return (
    <div className='container mt-3'>
      <Routes>
        <Route path='/' element={<ServiceAdd />} />
        <Route path='/:id/edit' element={<ServiceEdit />} />
        <Route path='/*' element={<Page404 />} />
      </Routes>

      <ServiceList />
    </div>
  );
}

export default App;
