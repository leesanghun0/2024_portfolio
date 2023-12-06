import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './Layout/Layout';
import Index from './pages';
import About from './pages/About';
import Experience from './pages/Experience';
import Work from './pages/Work';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Index />} />
          <Route path='/about' element={<About />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/work' element={<Work />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
