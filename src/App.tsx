import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { Router } from "./router/Router";
import './App.css';

function App() {
  return (
    <div id="main">
      <RouterProvider router={Router} />
    </div>
  );
}

export default App;
