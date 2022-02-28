import { Route, Routes, BrowserRouter } from 'react-router-dom';
import React from 'react';
import Portfolio from './Portfolio';
import Error404 from './Error404';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" exact element={<Portfolio />} />
        <Route path="*" element={<Error404 />} />
    </Routes>
</BrowserRouter>

  );
}

export default App;
