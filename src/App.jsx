import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NavigationMenu from './components/NavigationMenu/NavigationMenu';
import Banner from './components/Banner/Banner';
import LoginForm from './components/LoginForm/LoginForm';
import ContactForm from './components/ContactForm/ContactForm';
import Dashboard from './components/Dashboard/Dashboard';
import Notification from './components/Notification/Notification';
import Sidebar from './components/Sidebar/Sidebar';
import Modal from './components/Modal/Modal';
import './App.css'; 

const App = () => {
  return (
    <div className="App">
      <Header />
      <NavigationMenu />
      <Banner />
      <main>
        <Sidebar />
        <Dashboard />
        <LoginForm />
        <ContactForm />
        <Notification />
        <Modal />
      </main>
      <Footer />
    </div>
  );
};

export default App;
