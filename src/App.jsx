// src/App.jsx
import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Sidebar } from './components/Sidebar';

function App() {
  return (
    <div>
      <Header />
      <Sidebar />
      <main>
        <h1>Hello, World!</h1>
      </main>
      <Footer />
    </div>
  );
}

export default App;
