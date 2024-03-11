import React from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from './Components/navigation/Nav.tsx';

// Screens
import Home from "./Pages/home/Home.tsx";
import About from "./Pages/about/About.tsx";
import Portfolio from './Pages/portfolio/Portfolio.tsx';
import Contact from './Pages/contact/Contact.tsx';

// Styling
import "./index.css";

const App = () => (
  <div id="app">
    <NavBar />
    <main>
        <Home />
        <About />
        <Portfolio />
        <Contact />
    </main>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <App />
);