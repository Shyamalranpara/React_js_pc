import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EmpListing from './EmpListing';
import EmpDetails from './EmpDetails';
import EmpCreate from './EmpCreate';
import EmpEdit from './EmpEdit';
function App() {

  return (
    <>
     <h1>React js crud with Json_server</h1>
     <BrowserRouter>
  <Routes>
    <Route path='/' element={<EmpListing />} />
    <Route path='/employee/create' element={<EmpCreate />} />
    <Route path='/employee/detail/:empid' element={<EmpDetails />} />
    <Route path='/employee/edit/:empid' element={<EmpEdit />} />
  </Routes>
</BrowserRouter>

    </>
  );

}

export default App
