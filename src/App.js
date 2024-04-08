import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/static/Header';
import Employee from './Components/Forms/Employee';
import Index from './Components/Index';
import Counter from './features/counter/Counter';
function App() {
  console.log("backend base uri",process.env.BACKEND_BASE_URI)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header/>}>
          <Route index element={<Index/>} />
          <Route path="/createEmployee" element={<Employee/>} />
          <Route path="/counter" element={<Counter/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
