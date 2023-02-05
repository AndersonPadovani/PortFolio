import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Index from './pages/indexPage/index';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<Index/>}/>     
          </Routes>
        </BrowserRouter>       
    </div>
  );
}

export default App;
