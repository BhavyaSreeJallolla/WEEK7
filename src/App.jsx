<<<<<<< HEAD
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
=======
// src/App.jsx
import React from 'react';
import PortfolioList from './components/PortfolioList/PortfolioList';
import AboutMe from './components/AboutMe/AboutMe';
import ContactForm from './components/ContactForm/ContactForm';
import './App.css'; // 

const projects = [
  {
    title: 'Project 1',
    description: ' The app uses modern JavaScript ES6+ features and CSS for responsive design, providing an intuitive and mobile-friendly user interface."',
    image: 'https://images.pexels.com/photos/2808402/pexels-photo-2808402.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Project 2',
    description: 'A detailed 3D model of a mechanical component designed using AutoCAD. The project includes precise engineering drawings, dimensioning, and annotations adhering to industry standards. The design process involved parametric modeling and simulation to ensure the components functionality and manufacturability.',
                    
    image: 'https://images.pexels.com/photos/271667/pexels-photo-271667.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  // Add more projects here if needed
];

function App() {
  return (
    <div>
      <AboutMe />
      <PortfolioList projects={projects} />
      <ContactForm />
    </div>
  );
}
>>>>>>> f162fc1 (Add new folder and files)

export default App;
