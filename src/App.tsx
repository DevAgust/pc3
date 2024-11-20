import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Menu } from './Layout/Menu';
import {Articulos} from './Components/Articulos';
import { Proveedores } from './Components/Proveedores';
import { Ventas } from './Components/Ventas';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Menu/>}>
            <Route path='/Articulos' element={<Articulos/>}/>
            <Route path='/Proveedores' element={<Proveedores/>}/>
            <Route path='/Ventas' element={<Ventas/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
